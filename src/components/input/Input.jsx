import "./Input.css";

function Input({ variant, label, placeholderText }) {
    let colorScheme;
    switch (variant) {
        case "dark": colorScheme = "dark"; break;
        case "light": colorScheme = "light"; break;
        default: colorScheme = "light"; break;
    }

    return (
        <label className={`subtitle ${colorScheme}`}>
            {label}
            <input
                className={`default-body-text ${colorScheme}`}
                type="text"
                name={label}
                placeholder={placeholderText}
            ></input>
        </label>
    )
}

export default Input;