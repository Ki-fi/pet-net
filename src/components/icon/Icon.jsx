import './Icon.css';

function Icon({ iconName, onClick }) {

    return (
        <span
            className={`icon ${['material-symbols-outlined']}`}
            onClick={onClick}
        >{iconName}</span>
    )
}

export default Icon;