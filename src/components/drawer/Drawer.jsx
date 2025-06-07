<meta name="viewport" content="width=device-width, initial-scale=1.0" />

import './Drawer.css';
import Button from "../button/Button.jsx";


function Drawer({ title, children, buttons}) {
    return (
        <div className="bottom-sheet">
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