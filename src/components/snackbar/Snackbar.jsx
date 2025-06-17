import './Snackbar.css';

function Snackbar({
    variant = "default",
    message
})

{

    return (
        <div className={`snackbar ${variant}`}>
            <p>{message}</p>
        </div>
    )
}

export default Snackbar;