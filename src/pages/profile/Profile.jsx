import './Profile.css';
import {useContext, useEffect, useState} from "react";
import SideMenu from "../../components/side-menu/SideMenu.jsx";
import PageBar from "../../components/page-bar/PageBar.jsx";
import LoadingState from "../../components/loading-state/LoadingState.jsx";
import Snackbar from "../../components/snackbar/Snackbar.jsx";
import Card from "../../components/card/Card.jsx";
import Button from "../../components/button/Button.jsx";
import placeholder from '/src/assets/avatar_2.png';
import Drawer from "../../components/drawer/Drawer.jsx";
import Input from "../../components/input/Input.jsx";
import validateFileUpload from "../../helpers/validateFileUpload.js";
import axios from "axios";
import {AuthContext} from "../../components/AuthContext.jsx";

function Profile() {

    const [upload, setUpload] = useState(null);
    const [preview, setPreview] = useState(null);
    const token = localStorage.getItem('token');
    const storedUser = JSON.parse(localStorage.getItem("user"));
    const [drawer, toggleDrawer] = useState(false);
    const [loading, toggleLoading] = useState(false);
    const [validation, setValidation] = useState(false);
    const [error, setError] = useState(false);
    const {logout} = useContext(AuthContext);

    // useEffect(() => {}, [])

    function handleChange(e) {
        const file = e.target.files[0];
        if (!file) return;
        setUpload(file);
    }

    function handleSubmit(e) {
        e.preventDefault();
        setError(false);
        setValidation(false);

        const validationResult = validateFileUpload(upload);
        setValidation(validationResult);

        if (validationResult === false) {
            setValidation(validationResult);
        } else {
            uploadFile();
        }
    }

    async function uploadFile() {
        const formData = new FormData();
        formData.append("file", upload);

        try { const response = await axios.post(`http://localhost:8080/users/${storedUser.id}/avatar`, formData,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "multipart/form-data",
            }
        })
            toggleDrawer(false);
            setPreview(URL.createObjectURL(upload));
        } catch (error) {
            setError(true);
            console.log(error);
        } finally {
            toggleLoading(false);
        }
    }

    return (
        <div className="profile-page">
            <div className="menu-wrapper"><SideMenu /></div>
            <div className="content">
                <PageBar pageTitle={"Profiel"}/>
                <div className="cards-wrapper">
                    {loading && <LoadingState/>}
                    {error && <Snackbar variant={"error"} message={"Er is iets misgegaan, controleer of je verbonden bent met het internet"}/>}
                    {!loading &&
                        <>
                        <Card
                            title={`Profielfoto`}
                            buttons={<Button
                                variant={"secondary"}
                                buttonText="wijzigen"
                                onClick={() => {toggleDrawer(true)}
                            }
                            >
                            </Button>
                            }
                        >
                            <div className="profile-picture">
                                {preview ? <img src={preview} alt="avatar"/> : <img src={placeholder} alt="avatar"/>}
                            </div>
                        </Card>
                        <Card title={`Persoonsgegevens`}>
                            <form className="personal-details">
                                <label className="subtitle">Emailadres
                                <p className="default-body-text">emailaddress here</p>
                                </label>
                                <label className="subtitle">Naam
                                    <p className="default-body-text">full name here</p>
                                </label>
                            </form>
                        </Card>
                        <Card
                            title={`Uitloggen`}
                            buttons={<Button
                                variant={"primary"}
                                buttonText="Uitloggen"
                                onClick={() => {logout()}
                                }
                            >
                            </Button>
                            }
                        />
                        </>
                    }
                </div>
            </div>
            <div className="upload-drawer">
                {drawer === true && <Drawer
                    title="profielfoto wijzigen"
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
                            form="file-upload-form"
                         />
                    </>
                    }
                >
                    <form id="file-upload-form" onSubmit={handleSubmit}>
                        <Input
                            theme={"dark"}
                            type="file"
                            label={"Bestand uploaden"}
                            name="file"
                            placeholderText={"Nog geen bestand gekozen"}
                            onChange={handleChange}
                            hasError={validation}
                            errorMessage={"Kies .jpg/.png/.gif/.tiff/.svg van max. 5MB"}
                            accept="image/*"
                        />
                    </form>
                </Drawer>}
            </div>
        </div>
    )
}

export default Profile;