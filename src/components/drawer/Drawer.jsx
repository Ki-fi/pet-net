import './Drawer.css';
import ReactDOM from 'react-dom';

function Drawer({ title, children, buttons, footertext }) {


    return ReactDOM.createPortal (
        <>
            <div className="drawer">
                <div className="drawer-content">
                    <h2 className="subheading">{title}</h2>
                    {children}
                </div>
                <div className="drawer-footer">
                    {footertext}
                    <div className="drawer-buttons">
                    {buttons}
                    </div>
                </div>
            </div>
        </>,
    document.getElementById('drawer-root')
    )
}

export default Drawer;