import './PageBar.css';
import Icon from "../icon/Icon.jsx";

function PageBar({ pageTitle }) {
    return (
        <nav className="page-bar">
            <h2 className="subheading">{pageTitle}</h2>
            <Icon iconName={"notifications"}/>
        </nav>
    )
}

export default PageBar;