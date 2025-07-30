import './PostDetails.css';
import SideMenu from "../../components/side-menu/SideMenu.jsx";
import PageBar from "../../components/page-bar/PageBar.jsx";
import ToggleButton from "../../components/toggle-button/ToggleButton.jsx";
import LoadingState from "../../components/loading-state/LoadingState.jsx";
import Snackbar from "../../components/snackbar/Snackbar.jsx";
import Card from "../../components/card/Card.jsx";
import Avatar from "../../components/avatar/Avatar.jsx";
import Button from "../../components/button/Button.jsx";
import CardContent from "../../components/card-content/CardContent.jsx";
import {useNavigate} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {useParams} from "react-router";
import axios from "axios";
import formatDate from "../../helpers/formatDate.js";
import EmptyState from "../../components/empty-state/EmptyState.jsx";
import Drawer from "../../components/drawer/Drawer.jsx";
import Textarea from "../../components/textarea/Textarea.jsx";

function PostDetails() {

    const {id} = useParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [validation, setValidation] = useState({
        comment: false,
    });
    const [details, setDetails] = useState({});
    const [responses, setResponses] = useState({});
    const [selected, setSelected] = React.useState('left');
    const [drawer, toggleDrawer] = React.useState(false);
    const [showSnackbar, setShowSnackbar] = useState(false);
    const token = localStorage.getItem('token');
    const storedUser = JSON.parse(localStorage.getItem("user"));
    const [formState, setFormState] = useState({
        comment: "" })

    useEffect(() => {

        let isMounted = true;
        fetchPostDetails(isMounted);
        return () => {
            isMounted = false;
        }

    },[]);

    async function fetchPostDetails(isMounted = true) {
        setLoading(true);
        setError(false);
        try { const response = await axios.get(`http://localhost:8080/posts/${id}`, {headers: {
                Authorization: `Bearer ${token}`
            }});
            if (isMounted) {
                setDetails(response.data);
                setResponses(response.data.responses);
            }
        } catch (error) {
            if (isMounted) {
                console.error(error);
                setError(true);
            }
        } finally {
            if (isMounted) {
                setLoading(false);
            }
        }
    }

    function handleChange(e) {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        setError(false);

        if (!formState.comment.trim()) {
            setValidation({comment: true});
            return;
        }

        sendApplication(formState);
    }

    async function sendApplication() {
        try { const response = await axios.post(`http://localhost:8080/responses`, {
            "comment": formState.comment,
            "userId": storedUser.id,
            "postId": details.postId,
        }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
            if (response.status === 201) {
                setShowSnackbar(true);
            }
            await fetchPostDetails();
        } catch (error) {
            setError(true);
            console.log(error);
        } finally {
            setLoading(false);
            toggleDrawer(false);
        }
    }


    if (loading) return <LoadingState/>;
    if (error) return <Snackbar variant={"error"} message={"Er is iets misgegaan, controleer of je verbonden bent met het internet"}/>

    const postDetails = selected === "left";
    const applications = selected === "right";

    if (postDetails) {
        return (
                <div className="post-detail-page">
                    <div className="menu-wrapper"><SideMenu /></div>
                    <div className="content">
                        <PageBar pageTitle={"Post"} iconName={"arrow_back"}/>
                        <div className="cards-wrapper">
                            <Card
                                avatar={<Avatar upload={`http://localhost:8080${details.avatar}`}/>}
                                title={`${details.firstName} ${details.preposition} ${details.lastName}`}
                            />
                            <ToggleButton
                                buttonNameLeft={"Details"}
                                buttonNameRight={"Reageren"}
                                selected={selected}
                                handleToggle={setSelected}
                            />
                            {loading && <LoadingState/>}
                            {error && <Snackbar variant={"error"} message={"Er is iets misgegaan, controleer of je verbonden bent met het internet"}/>}
                            <Card>
                                <CardContent
                                    request={details.title}
                                    startDate={formatDate(details.startDate)}
                                    endDate={formatDate(details.endDate)}
                                />
                            </Card>
                            {details.services.length > 0 && (
                                <Card title={"Services"}>
                                    {details.services.map((service, index) => (
                                        <div className="service-wrapper" key={index}>
                                            <p className="subtitle" key={index}>{service.title}</p>
                                            <p>{service.description}</p>
                                        </div>
                                    ))}
                                </Card>
                            )}
                            {details.remark &&
                                <Card title={"Bijzonderheden"}>
                                    <p className="subtitle">Bijzonderheden:</p>
                                    <p>{details.remark}</p>
                                </Card>
                            }
                        </div>
                        <div className="footer">

                        </div>
                    </div>
                </div>
        )
    }

    const sortedResponses = responses.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));

    if (applications) {
        return (
                <div className="post-detail-page">
                    <div className="menu-wrapper"><SideMenu /></div>
                    <div className="content">
                        <PageBar pageTitle={"Post"} iconName={"arrow_back"}/>
                        <div className="cards-wrapper">
                            {showSnackbar &&
                                <Snackbar
                                    variant={"default"}
                                    message={"Reactie verstuurd!"}
                                />
                            }
                            <Card
                                avatar={<Avatar upload={`http://localhost:8080${details.avatar}`}/>}
                                title={`${details.firstName} ${details.preposition} ${details.lastName}`}
                            />
                            <ToggleButton
                                buttonNameLeft={"Details"}
                                buttonNameRight={"Reageren"}
                                selected={selected}
                                handleToggle={setSelected}
                            />
                            {loading && <LoadingState/>}
                            {error && <Snackbar variant={"error"} message={"Er is iets misgegaan, controleer of je verbonden bent met het internet"}/>}
                            {responses && sortedResponses.length === 0 &&
                                <EmptyState
                                    message={"Nog geen reacties"}
                                    hasButton={false}
                                />}
                            {responses && sortedResponses.length > 0 && sortedResponses.map((response) => (
                                <Card
                                    avatar={<Avatar upload={`http://localhost:8080${response.avatar}`}/>}
                                    title={`${response.firstName} ${response.preposition} ${response.lastName}`}
                                    key={response.responseId}
                                >
                                    <p className="subtitle">{`${response.firstName} op ${formatDate(response.createdAt)}`}</p>
                                    <p>{response.comment}</p>
                                </Card>
                            ))}
                        </div>
                        <div className="footer">
                            <Button
                                variant="fab"
                                hasIconLeft={true}
                                iconName={"add"}
                                onClick={() => {
                                    toggleDrawer(true)
                                    setShowSnackbar(false)
                                    setValidation({comment: false})
                                    formState.comment = "";
                            }}
                            />
                        </div>
                    </div>
                    <div className="upload-drawer">
                        {drawer === true && <Drawer
                            title="reageren"
                            buttons={
                                <>
                                    <Button
                                        type="button"
                                        variant="secondary"
                                        buttonText={"Annuleren"}
                                        isDisabled={loading === true}
                                        onClick={() => {toggleDrawer(false)}}
                                    />
                                    <Button
                                        type="submit"
                                        variant="primary"
                                        buttonText={"Versturen"}
                                        isDisabled={loading === true}
                                        form="apply-form"
                                    />
                                </>
                            }
                        >
                            <form id="apply-form" onSubmit={handleSubmit}>
                                <Textarea
                                    theme={"dark"}
                                    value={formState.comment}
                                    label={"Zeg hallo en stem de laatste zaken af"}
                                    name="comment"
                                    placeholderText="Schrijf een bericht"
                                    hasError={validation.comment}
                                    errorMessage={"Schrijf een bericht"}
                                    onChange={handleChange}
                                />
                            </form>
                        </Drawer>}
                    </div>
                </div>
        )
    }

}

export default PostDetails;