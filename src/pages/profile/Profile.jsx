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

function Profile() {

    const [upload, setUpload] = useState(null);

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
                                onClick={() => {}}
                            >
                            </Button>
                            }
                        >
                            <div className="profile-picture">
                                {upload ? <img src={upload} alt="avatar"/> : <img src={placeholder} alt="avatar"/>}
                            </div>
                        </Card>
                    {/*}*/}
                </div>
            </div>
        </div>
    )
}

export default Profile;