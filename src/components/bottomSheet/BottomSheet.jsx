import './BottomSheet.css';
import Button from "../button/Button.jsx";

function BottomSheet({ title, children}) {
    return (
        <div className="bottom-sheet">
            <div className="content">
            <h2 className="subheading">{title}</h2>
            {children}
            </div>
            <div className="buttons">
                <Button
                    variant={"secondary"}
                    isDisabled={false}
                    hasIconLeft={false}
                    hasIconRight={false}
                    iconName={"add"}
                    onClick={() => {}}
                    buttonText={"Annuleren"}
                />
                <Button
                    variant={"primary"}
                    isDisabled={false}
                    hasIconLeft={false}
                    hasIconRight={false}
                    iconName={"add"}
                    onClick={() => {}}
                    buttonText={"Inloggen"}
                />
            </div>
        </div>
    )
}

export default BottomSheet;