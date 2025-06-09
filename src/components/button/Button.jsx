import './Button.css';
import Icon from "../icon/Icon.jsx";

function Button({ iconName, variant, isDisabled, hasIconLeft, hasIconRight, onClick, buttonText}) {
    return (
        <button
            type="button"
            className={variant}
            disabled={isDisabled}
            onClick={onClick}
        >
            {hasIconLeft && Icon({iconName})}
            {buttonText}
            {hasIconRight && Icon({iconName})}
        </button>
    );
}

export default Button;