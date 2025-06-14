import Drawer from "/src/components/drawer/Drawer.jsx";
import Input from "/src/components/input/Input.jsx";
import logo from "/src/assets/logo.png";
import Button from "../../components/button/Button.jsx";
import './Login.css';
import {Link} from "react-router-dom";

function Login() {

    return (
        <>
            <div className="login-page">
                <div className="login-background">
                    <img src={logo} alt="logo"/>
                </div>
                <Drawer
                    title="Inloggen"
                    buttons={
                        <Button variant="primary" buttonText={"Inloggen"}/>
                    }
                    footertext={
                        <p>
                            Nog geen account? <Link to="/signup">Account aanmaken</Link>
                        </p>
                    }
                >
                    <Input
                        variant={"dark"}
                        label={"E-mailadres"}
                        placeholderText={"Type something"}
                    />
                    <Input
                        variant={"dark"}
                        label={"Wachtwoord"}
                        placeholderText={"Type something"}
                    />
                </Drawer>
            </div>
        </>
    )
}

export default Login;