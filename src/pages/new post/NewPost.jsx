import './NewPost.css';
import SideMenu from "../../components/side-menu/SideMenu.jsx";
import PageBar from "../../components/page-bar/PageBar.jsx";
import ToggleButton from "../../components/toggle-button/ToggleButton.jsx";
import Card from "../../components/card/Card.jsx";
import Avatar from "../../components/avatar/Avatar.jsx";
import Button from "../../components/button/Button.jsx";
import Chip from "../../components/chip/Chip.jsx";
import Input from "../../components/input/Input.jsx";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import Textarea from "../../components/textarea/Textarea.jsx";

function NewPost() {


    const [formState, setFormState] = useState({
        request: "",
        startDate: "",
        endDate: "",
        remarks: ""
    })

    const [error, setError] = useState(false);
    const [validation, setValidation] = useState(false);
    const [loading, toggleLoading] = useState(false);
    const navigate = useNavigate();

    function handleChange(e) {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    }


    return (
        <>
            <div className="buurtgroep-page">
                <div className="menu-wrapper"><SideMenu /></div>
                <div className="content">
                    <PageBar pageTitle={"Nieuwe post"}/>
                    <form className="cards-wrapper" id="new-post-form">
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
                        <Card
                            title={"Datum"}
                            contentClass={"new-post-card"}
                            hasSubtitle={true}
                            subtitle={"Wanneer heb je het nodig?"}
                            buttons={<Button
                                variant={"secondary"}
                                buttonText="Volgende"
                                onClick={() => {}}
                            />}
                        >
                            <Input
                                hasError={validation.startDate}
                                errorMessage="Vul een startdatum in"
                                label="Van:"
                                value={formState.startDate}
                                name="startDate"
                                onChange={handleChange}
                                placeholderText="Vul een start datum in"
                            />
                            <Input
                                hasError={validation.endDate}
                                errorMessage="Vul een einddatum in"
                                label="Tot:"
                                value={formState.endDate}
                                name="endDate"
                                onChange={handleChange}
                                placeholderText="Vul een eind datum in"
                            />
                        </Card>
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
                                    onClick={() => {}}
                                />
                                <Button
                                    variant={"secondary"}
                                    buttonText="Volgende"
                                    onClick={() => {}}
                            />
                            </>}
                        >
                        </Card>
                        <Card
                            title={"Bijzonderheden"}
                            contentClass={"new-post-card"}
                            hasSubtitle={true}
                            subtitle={"Is er nog iets dat de ander moet weten?"}
                            buttons={<Button
                                variant={"secondary"}
                                buttonText="Volgende"
                                onClick={() => {}}
                            />}
                        >
                            <Textarea
                                value={formState.remarks}
                                name="remarks"
                                placeholderText="Vul bijzonderheden in"
                                onChange={handleChange}
                            ></Textarea>
                        </Card>
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
                        </Card>
                    </form>
                    <div className="footer">

                    </div>
                </div>
            </div>
        </>
    )
}

export default NewPost;