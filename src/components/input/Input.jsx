import "./Input.css";

function Input({
    theme = "light",
    hasError = false,
    errorMessage = "",
    label,
    type,
    value,
    name,
    placeholderText,
    onChange
               })
    {

    const labelClass = `subtitle ${theme}`;
    const inputClass = `default-body-text ${theme} ${hasError ? "error" : ""}`;

    return (
        <div>
        <label className={labelClass}>
            {label}
            <input
                className={inputClass}
                type={type}
                value={value}
                name={name}
                placeholder={placeholderText}
                onChange={onChange}
            ></input>
        </label>
            {hasError && <p className={"input-error-text"}>{errorMessage}</p>}
        </div>
    )
}

export default Input;
