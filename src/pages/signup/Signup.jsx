import './Signup.css';
import Card from "../../components/card/Card.jsx";
import Button from "../../components/button/Button.jsx";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import Input from "../../components/input/Input.jsx";
import Snackbar from "../../components/snackbar/Snackbar.jsx";

function Signup() {

    const [formState, setFormState] = useState({
        email: "",
        password: "",
        firstname: "",
        preposition: "",
        lastname: ""
    })

    const [error, setError] = useState(false);
    const [validation, setValidation] = useState(false);
    const [loading, toggleLoading] = useState(false);
    const navigate = useNavigate();

    function handleChange(e) {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        setError(false);
    }

    function backButton() {
        navigate("/login")
    }


    return (
        <>
            <section className="signup-section">
            <Card
                title="Nieuw account"
                buttons={
                <>
                    <Button
                        type={"button"}
                        variant={"secondary"}
                        isDisabled={loading === true}
                        buttonText={"Terug"}
                        form={"signup-form"}
                        onClick={backButton}
                    />
                    <Button
                        type={"submit"}
                        variant={"primary"}
                        isDisabled={loading === true}
                        buttonText={"Volgende"}
                        form={"signup-form"}
                    />
                    </>
                }
            >
                <form id="signup-form" onSubmit={handleSubmit}>
                    <Input
                        theme={"light"}
                        label={"E-mailadres"}
                        value={formState.email}
                        name="email"
                        placeholderText={"Vul je e-mailadres in"}
                        onChange={handleChange}
                        hasError={validation.email}
                        errorMessage={"Dit is geen geldig e-mail adres"}
                    />
                    <Input
                        theme={"light"}
                        type="password"
                        label={"Wachtwoord"}
                        value={formState.password}
                        name="password"
                        placeholderText={"Vul een veilig wachtwoord in"}
                        onChange={handleChange}
                        hasError={validation.password}
                        errorMessage={"Incorrect wachtwoord"}
                    />
                    {error && <Snackbar
                        variant={"error"}
                        message={"Iets is er misgegaan, probeer het nog eens"}/>}
                </form>
            </Card>
            </section>
        </>
    )
}

export default Signup;