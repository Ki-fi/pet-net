import './Button.css';
import Icon from "../icon/Icon.jsx";

function Button({ type, iconName, variant, isDisabled, hasIconLeft, hasIconRight, onClick, buttonText, form}) {
    return (
        <button
            type={type}
            className={variant}
            disabled={isDisabled}
            onClick={onClick}
            form={form}
        >
            {hasIconLeft && Icon({iconName})}
            {buttonText}
            {hasIconRight && Icon({iconName})}
        </button>
    );
}

export default Button;