
import "./Textarea.css";

function Textarea({
                   theme = "light",
                   hasError = false,
                   errorMessage = "",
                   label,
                   value,
                   name,
                   placeholderText,
                   onChange
               })
{

    const labelClass = `subtitle ${theme}`;
    const textareaClass = `default-body-text ${theme} ${hasError ? "error" : ""}`;

    return (
        <div>
            <label className={labelClass}>
                {label}
                <textarea
                    className={textareaClass}
                    value={value}
                    name={name}
                    id={name}
                    cols="20"
                    rows="5"
                    placeholder={placeholderText}
                    onChange={onChange}
                ></textarea>
            </label>
            {hasError && <p className={"textarea-error-text"}>{errorMessage}</p>}
        </div>
    )
}

export default Textarea;
