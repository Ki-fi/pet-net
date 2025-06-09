import SideMenu from "../../components/side-menu/SideMenu.jsx";
import PageBar from "../../components/page-bar/PageBar.jsx";
import ToggleButton from "../../components/toggle-button/ToggleButton.jsx";
import Card from "../../components/card/Card.jsx";
import Avatar from "../../components/avatar/Avatar.jsx";
import Button from "../../components/button/Button.jsx";
import CardContent from "../../components/card-content/CardContent.jsx";
import Chip from "../../components/chip/Chip.jsx";
import './Buurtgroep.css';


function Buurtgroep() {

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
                        <CardContent>
                            <Chip chipText={"Kattenbak verschonen"}/>
                        </CardContent>
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
                        <CardContent>
                            <Chip chipText={"Water verversen"}/>
                        </CardContent>
                    </Card>
                </div>
                <div className="footer">
                    <Button
                        variant="fab"
                        hasIconLeft={true}
                        iconName={"add"}
                    />
                </div>
            </div>
            </div>
        </>
    )
}

export default Buurtgroep
