import './Button.css';
import Icon from "../icon/Icon.jsx";

function Button({ iconName, variant, isDisabled, hasIconLeft, hasIconRight, onClick, buttonText}) {
    if(hasIconLeft) {
        return <button
                    type="button"
                    className={variant}
                    disabled={isDisabled}
                    onClick={onClick}
                >{Icon({iconName})}{buttonText}</button>;
    }
    else if(hasIconRight) {
        return <button
                    type="button"
                    className={variant}
                    disabled={isDisabled}
                    onClick={onClick}
                >{buttonText}{Icon({iconName})}</button>;
    }
    else {
        return (
            <button
                type="button"
                className={variant}
                disabled={isDisabled}
                onClick={onClick}
            >{buttonText}</button>
        )
    }
}

export default Button;