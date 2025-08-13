import './Modal.css';
import Button from "../button/Button.jsx";

function Modal({ title, body, secondaryButtonText, primaryButtonText, onClickSecondaryButton, onClickPrimaryButton }) {
    return (
        <div className="modal-wrapper">
        <div className="modal">
            <p className="subheading">{title}</p>
            <p className="default-body-text">{body}</p>
            <div className="modal-buttons">
                <Button
                    type="button"
                    variant="secondary"
                    isDisabled={false}
                    onClick={onClickSecondaryButton}
                    buttonText={secondaryButtonText}
                />
                <Button
                    type="button"
                    variant="destructive"
                    isDisabled={false}
                    onClick={onClickPrimaryButton}
                    buttonText={primaryButtonText}
                />
            </div>
        </div>
        </div>
    )
}

export default Modal;