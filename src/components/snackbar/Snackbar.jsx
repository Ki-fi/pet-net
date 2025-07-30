import './Snackbar.css';

function Snackbar({
    variant = "default",
    message,
    link,
    linkText
})

{

    return (
        <div className={`snackbar ${variant}`}>
            <p>{message}</p>
            <a className="snackbar-link" href={link}>{linkText}</a>
        </div>
    )
}

export default Snackbar;