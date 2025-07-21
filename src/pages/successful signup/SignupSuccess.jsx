import './SignupSuccess.css';
import Card from "../../components/card/Card.jsx";
import {useLocation, useNavigate} from "react-router-dom";
import Button from "../../components/button/Button.jsx";
import Wave from '../../assets/wave.png';

function SignupSuccess() {
    const location = useLocation();
    const navigate = useNavigate();
    const { firstName } = location.state || {};

    function loginButton() {
        navigate("/login")
    }

    return (
        <>
            <section className="welcome-page">
                <Card
                    title={"Welkom, " + firstName + "!"}
                    hasSubtitle={true}
                    subtitle="Account aangemaakt! Log in om direct aan de slag te gaan"
                    buttons={
                        <Button
                            type={"button"}
                            variant={"primary"}
                            buttonText={"Inloggen"}
                            onClick={loginButton}
                        />
                    }
                >
                    <img src={Wave} alt="image of cat paw waving"/>
                </Card>
            </section>
        </>
    )
}

export default SignupSuccess;