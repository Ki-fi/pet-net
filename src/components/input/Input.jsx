import "./Input.css";

function Input({ variant, label, type, value, name, placeholderText, onChange }) {
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
                type={type}
                value={value}
                name={name}
                placeholder={placeholderText}
                onChange={onChange}
            ></input>
        </label>
    )
}

export default Input;