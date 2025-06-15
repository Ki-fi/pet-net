import './Snackbar.css';

function Snackbar({ variant, message }) {
    let color;
    switch (variant) {
        case "default":
            color = "default";
            break;
        case "error":
            color = "error";
            break;
        default:
            color = "default";
            break;
    }

    return (
        <div className={`snackbar ${color}`}>
            <p>{message}</p>
        </div>
    )
}

export default Snackbar;