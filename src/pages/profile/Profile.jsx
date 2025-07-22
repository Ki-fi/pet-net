import './Profile.css';
import {useEffect, useState} from "react";
import SideMenu from "../../components/side-menu/SideMenu.jsx";
import PageBar from "../../components/page-bar/PageBar.jsx";
import ToggleButton from "../../components/toggle-button/ToggleButton.jsx";
import LoadingState from "../../components/loading-state/LoadingState.jsx";
import Snackbar from "../../components/snackbar/Snackbar.jsx";
import EmptyState from "../../components/empty-state/EmptyState.jsx";
import Card from "../../components/card/Card.jsx";
import Avatar from "../../components/avatar/Avatar.jsx";
import Button from "../../components/button/Button.jsx";
import CardContent from "../../components/card-content/CardContent.jsx";
import formatDate from "../../helpers/formatDate.js";
import placeholder from '/src/assets/avatar_2.png';
import Drawer from "../../components/drawer/Drawer.jsx";

function Profile() {

    const [upload, setUpload] = useState(null);
    const [drawer, toggleDrawer] = useState(false);

    // useEffect(() => {}, [])

    return (
        <div className="profile-page">
            <div className="menu-wrapper"><SideMenu /></div>
            <div className="content">
                <PageBar pageTitle={"Profiel"}/>
                <div className="cards-wrapper">
                    {/*{loading && <LoadingState/>}*/}
                    {/*{error && <Snackbar variant={"error"} message={"Er is iets misgegaan, controleer of je verbonden bent met het internet"}/>}*/}
                    {/*{!loading &&*/}
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
                                {upload ? <img src={upload} alt="avatar"/> : <img src={placeholder} alt="avatar"/>}
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
                    {/*}*/}
                </div>
            </div>
            <div className="upload-drawer">
                {drawer === true && <Drawer/>}
            </div>
        </div>
    )
}

export default Profile;