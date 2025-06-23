import SideMenu from "../../components/side-menu/SideMenu.jsx";
import PageBar from "../../components/page-bar/PageBar.jsx";
import ToggleButton from "../../components/toggle-button/ToggleButton.jsx";
import Card from "../../components/card/Card.jsx";
import Avatar from "../../components/avatar/Avatar.jsx";
import Button from "../../components/button/Button.jsx";
import Chip from "../../components/chip/Chip.jsx";
import './Buurtgroep.css';
import {useNavigate} from "react-router-dom";


function Buurtgroep() {

    const navigate = useNavigate();

    return (
        <>
            <div className="buurtgroep-page">
            <div className="menu-wrapper"><SideMenu /></div>
            <div className="content">
                <PageBar pageTitle={"Buurtgroep"}/>
                <div className="cards-wrapper">
                    <ToggleButton
                        buttonNameLeft={"Alle posts"}
                        buttonNameRight={"Mijn posts"}
                    />
                    <Card
                        avatar={<Avatar />}
                        title={"Adison George"}
                        hasSubtitle={true}
                        subtitle={"Dit is een ondertitel"}
                        buttons={<Button
                            variant={"primary"}
                            buttonText="reageren"
                        ></Button>
                        }
                    >
                        <Chip chipText={"Water verversen"}/>
                    </Card>
                    <Card
                        avatar={<Avatar />}
                        title={"Chap Workman"}
                        hasSubtitle={true}
                        subtitle={"Dit is een ondertitel"}
                        buttons={<Button
                            variant={"primary"}
                            buttonText="reageren"
                        />}
                    >
                        <Chip chipText={"Water verversen"}/>
                    </Card>
                </div>
                <div className="footer">
                    <Button
                        variant="fab"
                        hasIconLeft={true}
                        iconName={"add"}
                        onClick={() => {navigate("/buurtgroep/new")}}
                    />
                </div>
            </div>
            </div>
        </>
    )
}

export default Buurtgroep
