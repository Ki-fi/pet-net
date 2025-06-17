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
                    {buttons}
                </div>
            </div>
        </>
    )
}

export default Drawer;