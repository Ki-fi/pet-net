import './PageBar.css';
import Icon from "../icon/Icon.jsx";
import {useNavigate} from "react-router-dom";

function PageBar({ pageTitle, iconName }) {
    const navigate = useNavigate();

    return (
        <nav className="page-bar">
            <h2 className="subheading">{pageTitle}</h2>
            <Icon iconName={iconName}
            onClick={() => navigate("/buurtgroep")}/>
        </nav>
    )
}

export default PageBar;