import Drawer from "/src/components/drawer/Drawer.jsx";
import Input from "/src/components/input/Input.jsx";
import logo from "/src/assets/logo.png";
import Button from "../../components/button/Button.jsx";
import './Login.css';
import {Link, useNavigate} from "react-router-dom";
import {useContext, useState} from "react";
import axios from "axios";
import Snackbar from "../../components/snackbar/Snackbar.jsx";
import validateCredentialsOnLogin from "../../helpers/validateCredentialsOnLogin.js";
import {AuthContext} from "../../components/AuthContext.jsx";

function Login() {

    const {signin} = useContext(AuthContext);
    const [formState, setFormState] = useState({
        email: "",
        password: "",
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

        const validationResult = validateCredentialsOnLogin(formState);
        setValidation(validationResult);

        if (!validationResult.hasErrors) {
            login();
        }
    }

    async function login() {
        toggleLoading(true);

        try { const response = await axios.post("http://localhost:8080/auth", {
            email: formState.email,
            password: formState.password,
        },{
            headers: {
                "Content-Type": "application/json",
            }
        })
            signin(response.data);
        } catch (error) {
            setError(true)
            console.log(error);
        } finally {
            toggleLoading(false);
        }
    }

    return (
        <>
            <div className="login-page">
                <div className="login-background">
                    <img src={logo} alt="logo"/>
                </div>
                <Drawer
                    title="Inloggen"
                    buttons={
                        <Button
                            type="submit"
                            variant="primary"
                            buttonText={"Inloggen"}
                            isDisabled={loading === true}
                            form="login-form"
                        />
                    }
                    footertext={
                        <p>
                            Nog geen account? <Link to="/signup">Account aanmaken</Link>
                        </p>
                    }
                >
                    <form id="login-form" onSubmit={handleSubmit}>
                        <Input
                            theme={"dark"}
                            label={"E-mailadres"}
                            value={formState.email}
                            name="email"
                            placeholderText={"Vul je e-mailadres in"}
                            onChange={handleChange}
                            hasError={validation.email}
                            errorMessage={"Dit is geen geldig e-mail adres"}
                        />
                        <Input
                            theme={"dark"}
                            type="password"
                            label={"Wachtwoord"}
                            value={formState.password}
                            name="password"
                            placeholderText={"Geef je wachtwoord op"}
                            onChange={handleChange}
                            hasError={validation.password}
                            errorMessage={"Incorrect wachtwoord"}
                        />
                        {error && <Snackbar
                            variant={"error"}
                            message={"Inloggen niet gelukt, probeer nog een keer"}/>}
                    </form>
                </Drawer>
            </div>
        </>
    )
}

export default Login;