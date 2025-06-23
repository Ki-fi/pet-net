
import './NotFound.css';
import Mouse from '/src/assets/404.png'
import Button from "../../components/button/Button.jsx";
import {useNavigate} from "react-router-dom";

function NotFound() {
    const navigate = useNavigate();

    return (
        <>
            <div className="notfound-wrapper">
            <article className="notfound-snippet">
                <img src={Mouse} alt="mouse-not-found"/>
                <p className="subtitle">Pagina niet gevonden</p>
                <Button
                    type="button"
                    variant="primary"
                    buttonText={"Terug naar login"}
                    onClick={() => {navigate("/login")}}
                />
            </article>
            </div>
        </>
    )
}

export default NotFound;