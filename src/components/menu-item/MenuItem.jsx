import './MenuItem.css';

function MenuItem({ icon, name }) {
    return (
        <div className="menu-item subtitle">
            {icon} <span>{name}</span>
        </div>
    )
}

export default MenuItem;