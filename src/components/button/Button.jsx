import './Button.css';

function Button({ variant, isDisabled, hasIconLeft, hasIconRight, onClick, buttonText}) {
    if(hasIconLeft) {
        return <button>`${Icon} ${buttonText}`</button>;
    }

    if(hasIconRight) {
        return <button>`${buttonText} ${Icon}`</button>;
    }

    else {
        return (
            <button
                className={variant}
                disabled={isDisabled}
                onClick={onClick}
            >{buttonText}</button>
        )
    }
}

export default Button;