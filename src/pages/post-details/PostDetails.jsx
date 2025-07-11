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
import {useEffect, useState} from "react";
import {useParams} from "react-router";
import axios from "axios";
import formatDate from "../../helpers/formatDate.js";

function PostDetails() {

    const {id} = useParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [details, setDetails] = useState({});

    useEffect(() => {
        let isMounted = true;

        async function fetchPostDetails() {
            setLoading(true);
            setError(false);
            try { const response = await axios.get(`http://localhost:8080/posts/${id}`);
                const results = response.data;
                if (isMounted) {
                    setDetails(results);
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

        fetchPostDetails();

        return () => {
            isMounted = false;
        }

    },[id]);

    if (loading) return <LoadingState/>;
    if (error) return <Snackbar variant={"error"} message={"Er is iets misgegaan, controleer of je verbonden bent met het internet"}/>

    return (
        <>
            <div className="post-detail-page">
                <div className="menu-wrapper"><SideMenu /></div>
                <div className="content">
                    <PageBar pageTitle={"Post"}/>
                    <div className="cards-wrapper">
                        <Card
                            avatar={<Avatar />}
                            title={`${details.firstName} ${details.preposition} ${details.lastName}`}
                        />
                        <ToggleButton
                            buttonNameLeft={"Details"}
                            buttonNameRight={"Reageren"}
                        />
                        <Card>
                            <CardContent
                                request={details.title}
                                startDate={formatDate(details.startDate)}
                                endDate={formatDate(details.endDate)}
                            />
                        </Card>
                        {details.service &&
                            <Card title={"Services"}>
                                <p className="subtitle">{details.service.title}</p>
                                <p>{details.service.body}</p>
                            </Card>
                        }
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
        </>
    )
}

export default PostDetails;