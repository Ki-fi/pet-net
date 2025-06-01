import "./Input.css";

function Input({ label, placeholderText }) {
    return (
        <label className="subtitle">
            {label}
            <input
                className="default-body-text"
                type="text"
                name={label}
                placeholder={placeholderText}
            ></input>
        </label>
    )
}

export default Input;