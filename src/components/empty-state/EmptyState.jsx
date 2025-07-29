import './EmptyState.css';
import box from '/src/assets/Empty_State.png';
import Button from "../button/Button.jsx";
import React from "react";

function EmptyState({ message, hasButton, buttonText, onClick }) {


    return(
        <article className="empty-state">
            <img src={box} alt="image for empty state"/>
            <p className="subtitle">{message}</p>
            {hasButton && <Button
                variant={"primary"}
                buttonText={buttonText}
                onClick={onClick}
            />}
        </article>
    )
}

export default EmptyState;