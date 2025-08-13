import './Signup.css';
import Card from "../../components/card/Card.jsx";
import Button from "../../components/button/Button.jsx";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import Input from "../../components/input/Input.jsx";
import Snackbar from "../../components/snackbar/Snackbar.jsx";
import axios from "axios";
import validateCredentials from "../../helpers/validateCredentials.js";

function Signup() {

    const [formState, setFormState] = useState({
        email: "",
        password: "",
        firstname: "",
        preposition: "",
        lastname: ""
    })

    const [error, setError] = useState("");
    const [validation, setValidation] = useState(false);
    const [loading, toggleLoading] = useState(false);
    const navigate = useNavigate();

    function handleChange(e) {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setError("");

        const validationResult = validateCredentials(formState);
        setValidation(validationResult);

        if (!validationResult.hasErrors) {

            try {
                const response = await axios.post(
                    "http://localhost:8080/signup",
                    {
                        "email": formState.email,
                        "password": formState.password,
                        "firstName": formState.firstname,
                        "preposition": formState.preposition,
                        "lastName": formState.lastname
                    },
                    {headers: {
                            "Content-Type": "application/json"
                        }});
                navigate("/signup/welcome", {
                    state: {
                        firstName: formState.firstname
                    }
                });
            } catch(e) {
                if (e.response) {
                    setError(e.response.data.error);
                } else {
                    setError("Account aanmaken niet gelukt, probeer nog een keer");
                }
            } finally {
                toggleLoading(false);
            }
        }
    }

    function backButton() {
        navigate("/login")
    }

    return (
            <section className="signup-section">
            <Card
                title="Nieuw account"
                contentClass="signup-form"
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
                        placeholderText={"Geef een veilig wachtwoord op"}
                        onChange={handleChange}
                        hasError={validation.password}
                        errorMessage={"Incorrect wachtwoord"}
                    />
                    <p>Aan welke naam kunnen groepsgenoten jou herkennen?</p>
                    <Input
                        theme={"light"}
                        type="firstname"
                        label={"Voornaam"}
                        value={formState.firstname}
                        name="firstname"
                        placeholderText={"Vul je voornaam in"}
                        onChange={handleChange}
                        hasError={validation.firstname}
                        errorMessage={"Vul je voornaam in"}
                    />
                    <Input
                        theme={"light"}
                        type="preposition"
                        label={"Tussenvoegsel (optioneel)"}
                        value={formState.preposition}
                        name="preposition"
                        placeholderText={"Vul een tussenvoegsel in"}
                        onChange={handleChange}
                    />
                    <Input
                        theme={"light"}
                        type="lastname"
                        label={"Achternaam"}
                        value={formState.lastname}
                        name="lastname"
                        placeholderText={"Vul je achternaam in"}
                        onChange={handleChange}
                        hasError={validation.lastname}
                        errorMessage={"Vul je achternaam in"}
                    />
                    {error && <Snackbar
                        variant={"error"}
                        message={error}/>}
                </form>
            </Card>
            </section>
    )
}

export default Signup;