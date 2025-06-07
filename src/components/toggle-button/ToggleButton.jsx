import './ToggleButton.css';

function ToggleButton({ buttonNameLeft, buttonNameRight, onClick }) {
    return (
        <div className="button-wrapper">
            <button className="button toggle-button left" onClick={onClick}>{buttonNameLeft}</button>
            <button className="button toggle-button right" onClick={onClick}>{buttonNameRight}</button>
        </div>
    )
}

export default ToggleButton;