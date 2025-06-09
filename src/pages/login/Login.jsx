import Drawer from "/src/components/drawer/Drawer.jsx";
import Input from "/src/components/input/Input.jsx";
import logo from "/src/assets/logo.png";
import Button from "../../components/button/Button.jsx";
import './Login.css';

function Login() {

    return (
        <>
            <div className="login-page">
                <div className="login-background">
                    <img src={logo} alt="logo"/>
                </div>
                <Drawer title="Inloggen">
                    <p>Er is een inlogcode verstuurd naar example@email.com</p>
                    <Input
                        variant={"dark"}
                        label={"Inlogcode"}
                        placeholderText={"Type something"}
                    />
                    buttons={<Button type="primary">Login</Button>}
                </Drawer>
            </div>
        </>
    )
}

export default Login;