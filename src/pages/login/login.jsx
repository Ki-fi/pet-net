import BottomSheet from "./components/drawer/Drawer.jsx";
import Input from "./components/input/Input.jsx";
import logo from "./assets/logo.png";
import Button from "../../components/button/Button.jsx";

function Login() {

    return (
        <>
            <div className="login-page">
                <div className="login-background">
                    <img src={logo} alt="logo"/>
                </div>
                <BottomSheet title="Inloggen">
                    <p>Er is een inlogcode verstuurd naar example@email.com</p>
                    <Input
                        variant={"dark"}
                        label={"Inlogcode"}
                        placeholderText={"Type something"}
                    />
                    buttons={<Button type="primary">Login</Button>}
                </BottomSheet>
            </div>
        </>
    )
}