import './NewPost.css';
import SideMenu from "../../components/side-menu/SideMenu.jsx";
import PageBar from "../../components/page-bar/PageBar.jsx";
import Card from "../../components/card/Card.jsx";
import Button from "../../components/button/Button.jsx";
import Input from "../../components/input/Input.jsx";
import React, {useContext, useState} from "react";
import {useNavigate} from "react-router-dom";
import { useEffect, useRef } from "react";
import Textarea from "../../components/textarea/Textarea.jsx";
import validateNewPostInput from "../../helpers/validateNewPostInput.js";
import CardContent from "../../components/card-content/CardContent.jsx";
import axios from "axios";
import Snackbar from "../../components/snackbar/Snackbar.jsx";
import formatDate from "../../helpers/formatDate.js";
import {AuthContext} from "../../components/AuthContext.jsx";
import Drawer from "../../components/drawer/Drawer.jsx";
import EmptyState from "../../components/empty-state/EmptyState.jsx";
import Chip from "../../components/chip/Chip.jsx";

function NewPost() {

    const [formState, setFormState] = useState({
        request: "",
        startDate: "",
        endDate: "",
        remarks: "",
        service: {title: "", description: ""},
    })
    const [services, setServices] = useState([]);
    const [error, setError] = useState(false);
    const [validation, setValidation] = useState(false);
    const [loading, toggleLoading] = useState(false);
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const [drawer, toggleDrawer] = React.useState(false);
    const [showSnackbar, setShowSnackbar] = useState(false);
    const token = localStorage.getItem('token');
    const storedUser = JSON.parse(localStorage.getItem("user"));
    const cardRefs = {
        1: useRef(null),
        2: useRef(null),
        3: useRef(null),
        4: useRef(null),
        5: useRef(null),
    };

    useEffect(() => {
        const ref = cardRefs[step];
        if (ref && ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, [step]);

    useEffect(() => {
        console.log("Services:", services);
    }, [services]);

    function handleChange(e) {
        const { name, value } = e.target;

        if (name === "service.title" || name === "service.description") {
            const field = name.split(".")[1];
            setFormState(prev => ({
                ...prev,
                service: {
                    ...prev.service,
                    [field]: value
                }
            }));
        } else {
            setFormState(prev => ({
                ...prev,
                [name]: value
            }));
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        setError(false);
        setShowSnackbar(false);

        const validationResult = validateNewPostInput(formState);
        setValidation(validationResult);

        if (!validationResult.hasErrors) {
            savePost(formState);
        }
    }

    function handleService(e) {
        e.preventDefault();
        setError(false);

        if (!formState.service.title.trim()) {
            setValidation({service: true});
            return;
        }

        toggleDrawer(false);
        setServices(prev => [...prev, formState.service]);
        setFormState(prev => ({
            ...prev,
            service: { title: "", description: "" }
        }));
        console.log(services);
    }

    async function savePost() {
        try { const response = await axios.post("http://localhost:8080/posts", {
            "startDate": formState.startDate,
            "endDate": formState.endDate,
            "title": formState.request,
            "remark": formState.remarks,
            "userId": storedUser.id,
            "services" : services,
        }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
            if (response.status === 201) {
                setStep(5);
                setShowSnackbar(true);
            }
        } catch (error) {
            setStep(5);
            setError(true);
            console.log(error);
        } finally {
            toggleLoading(false);
        }
    }

    return (
        <>
            <div className="buurtgroep-page">
                <div className="menu-wrapper"><SideMenu /></div>
                <div className="content">
                    <PageBar pageTitle={"Nieuwe post"} iconName={"arrow_back"}/>
                    <form className="cards-wrapper" id="new-post-form" onSubmit={handleSubmit}>
                        {step >= 1 &&
                            <div ref={cardRefs[1]}>
                            <Card
                                title={"Gevraagd"}
                                contentClass={"new-post-card"}
                                hasSubtitle={true}
                                subtitle={"Waar ben je naar op zoek?"}
                            >
                                <Input
                                    hasError={validation.request}
                                    errorMessage="Vul je verzoek in"
                                    value={formState.request}
                                    name="request"
                                    onChange={handleChange}
                                    placeholderText="Bijv: Oppas voor mijn kat"
                                />
                            </Card>
                            </div>
                        }
                        {step >= 1 &&
                            <div ref={cardRefs[1]}>
                            <Card
                                title={"Datum"}
                                contentClass={"new-post-card"}
                                hasSubtitle={true}
                                subtitle={"Wanneer heb je het nodig?"}
                                buttons={<Button
                                variant={"secondary"}
                                buttonText="Volgende"
                                type="button"
                                onClick={() => {
                                    const validationResult = validateNewPostInput(formState);
                                    setValidation(validationResult);
                                    if (!validationResult.hasErrors) {
                                        setStep(2)}}
                                    }
                            />}
                            >
                            <Input
                                type="date"
                                hasError={validation.startDate}
                                errorMessage="Vul een geldige startdatum in"
                                label="Van:"
                                value={formState.startDate}
                                name="startDate"
                                onChange={handleChange}
                                placeholderText="Vul een start datum in"
                            />
                            <Input
                                type="date"
                                hasError={validation.endDate}
                                errorMessage="Vul een geldige einddatum in"
                                label="Tot:"
                                value={formState.endDate}
                                name="endDate"
                                onChange={handleChange}
                                placeholderText="Vul een eind datum in"
                            />
                            </Card>
                            </div>
                        }
                        {step >= 2 &&
                            <div ref={cardRefs[2]}>
                            <Card
                                title={"Services"}
                                contentClass={"new-post-card"}
                                hasSubtitle={true}
                                subtitle={"Welke taken moeten er worden uitgevoerd?"}
                                buttons={
                                    <>
                                        <Button
                                            variant={"primary"}
                                            buttonText="Service toevoegen"
                                            type="button"
                                            onClick={() => {
                                                toggleDrawer(true)
                                                setValidation({service: false})
                                            }}
                                        />
                                        <Button
                                            variant={"secondary"}
                                            buttonText="Volgende"
                                            type="button"
                                            onClick={() => {setStep(3)}}
                                        />
                                    </>}
                            >
                                {services.length === 0 && <EmptyState message="Nog geen services"/>}
                                {services.length > 0 && services.map((service, index) => (
                                    <div className="service-wrapper" key={index}>
                                        <p className="subtitle">{service.title}</p>
                                        <p>{service.description}</p>
                                    </div>
                                    ))
                                }
                            </Card>
                            </div>
                        }
                        {step >= 3 &&
                            <div ref={cardRefs[3]}>
                            <Card
                                title={"Bijzonderheden"}
                                contentClass={"new-post-card"}
                                hasSubtitle={true}
                                subtitle={"Is er nog iets dat de ander moet weten?"}
                                buttons={<Button
                                    variant={"secondary"}
                                    buttonText="Volgende"
                                    type="button"
                                    onClick={() => {setStep(4)}}
                                />}
                            >
                                <Textarea
                                    value={formState.remarks}
                                    name="remarks"
                                    placeholderText="Vul bijzonderheden in"
                                    onChange={handleChange}
                                ></Textarea>
                            </Card>
                            </div>
                        }
                        {step >= 4 &&
                            <div ref={cardRefs[4]}>
                            <Card
                                title={"Samenvatting"}
                                contentClass={"new-post-card"}
                                hasSubtitle={true}
                                subtitle={"Kloppen alle details?"}
                                buttons={<Button
                                    variant={"primary"}
                                    type={"submit"}
                                    form={"new-post-form"}
                                    buttonText="Post plaatsen"
                                    onClick={() => {}}
                                />}
                            >
                                <CardContent
                                    request={formState.request}
                                    startDate={formatDate(formState.startDate)}
                                    endDate={formatDate(formState.endDate)}
                                />
                                <div className="chip-wrapper">
                                {services.length >= 0 && services.map((service, index) => (
                                    <Chip chipText={service.title} key={index} />))}
                                </div>
                                <p>{formState.remarks}</p>
                            </Card>
                            </div>
                        }
                    {showSnackbar && step >= 5 &&
                        <div ref={cardRefs[5]}>
                            <Snackbar
                        variant={"default"}
                        message={"Post geplaatst!"}/>
                        </div>}

                    {error && step >= 5 &&
                        <div ref={cardRefs[5]}>
                        <Snackbar
                        variant={"error"}
                        message={"Er is iets misgegaan, probeer nog een keer"}/>
                        </div>}
                    </form>
                </div>
                <div className="upload-drawer">
                    {drawer === true && <Drawer
                        title="Nieuwe service"
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
                                    buttonText={"Opslaan"}
                                    isDisabled={loading === true}
                                    form="service-form"
                                />
                            </>
                        }
                    >
                        <form id="service-form" className="drawer-content" onSubmit={handleService}>
                            <Input
                                type="text"
                                theme={"dark"}
                                hasError={validation.service}
                                errorMessage="Vul een service in"
                                label="Service"
                                value={formState.service.title}
                                name="service.title"
                                onChange={handleChange}
                                placeholderText="Vul de naam van de taak in"
                            />
                            <Textarea
                                theme={"dark"}
                                value={formState.service.description}
                                label={"Omschrijving"}
                                name="service.description"
                                placeholderText="Hoe moet deze taak worden uitgevoerd?"
                                onChange={handleChange}
                            />
                        </form>
                    </Drawer>}
                </div>
            </div>
        </>
    )
}

export default NewPost;