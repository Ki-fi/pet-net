import './Drawer.css';
import Button from "../button/Button.jsx";


function Drawer({ title, children, buttons}) {
    return (
        <div className="drawer">
            <div className="content">
            <h2 className="subheading">{title}</h2>
            {children}
            </div>
            <div className="buttons">
                {buttons}
            </div>
        </div>
    )
}

export default Drawer;