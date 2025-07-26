import './ToggleButton.css';
import React from "react";

function ToggleButton({ buttonNameLeft, buttonNameRight, selected, handleToggle }) {

    return (
        <div className="button-wrapper">
            <button
                className={`button toggle-button left ${selected === 'left' ? 'active' : ''}`}
                onClick={() => handleToggle("left")}>{buttonNameLeft}
            </button>
            <button
                className={`button toggle-button right ${selected === 'right' ? 'active' : ''}`}
                onClick={() => handleToggle("right")}>{buttonNameRight}
            </button>
        </div>
    )
}

export default ToggleButton;