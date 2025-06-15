import Drawer from "/src/components/drawer/Drawer.jsx";
import Input from "/src/components/input/Input.jsx";
import logo from "/src/assets/logo.png";
import Button from "../../components/button/Button.jsx";
import './Login.css';
import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";
import axios from "axios";
import Snackbar from "../../components/snackbar/Snackbar.jsx";

function Login() {

    const [formState, setFormState] = useState({
        email: "",
        password: "",
    })

    const [error, setError] = useState(false);
    const [loading, toggleLoading] = useState(false);
    const navigate = useNavigate();

    function handleChange(e) {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        login(formState)
        console.log(formState.email, formState.password);
    }

    async function login() {
        setError(false);
        toggleLoading(true);

        try { const response = await axios.post("/login", formState)
            if (response.status === 200) {
                navigate("/buurtgroep");
            }
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
                            variant={"dark"}
                            label={"E-mailadres"}
                            value={formState.email}
                            name="email"
                            placeholderText={"Vul je e-mailadres in"}
                            onChange={handleChange}
                        />
                        <Input
                            variant={"dark"}
                            type="password"
                            label={"Wachtwoord"}
                            value={formState.password}
                            name="password"
                            placeholderText={"Geef je wachtwoord op"}
                            onChange={handleChange}
                        />
                        {error && <Snackbar
                            variant={"error"}
                            message={"Inloggen niet gelukt, probeer het eens opnieuw"}/>}

                    </form>
                </Drawer>
            </div>
        </>
    )

}

export default Login;