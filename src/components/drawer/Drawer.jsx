import './Drawer.css';

function Drawer({ title, children, buttons, footertext }) {
    return (
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
        </>
    )
}

export default Drawer;