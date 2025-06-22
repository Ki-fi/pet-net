
function validateCredentialsOnSignup({email, password}) {
    const errors = {};

    if (!email || !email.includes("@")) {
        errors.email = true;
    }

    if (!password || password.length < 6) {
        errors.password = true;
    }

    errors.hasErrors = Object.values(errors).some(Boolean);

    return errors;
}

export default validateCredentialsOnSignup;