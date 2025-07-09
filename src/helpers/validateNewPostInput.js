
function validateNewPostInput({ request, startDate, endDate}) {
    const errors = {};

    function isValidDate(value) {
        const date = new Date(value);
        return !isNaN(date.getTime());
    }

    if (!request || request.trim() === "") {
        errors.request = true;
    }

    if (!startDate || startDate.trim() === "" || !isValidDate(startDate)) {
        errors.startDate = true;
    }

    if (!endDate || endDate.trim() === "" || !isValidDate(endDate)) {
        errors.endDate = true;
    }

    if (endDate < startDate) {
        errors.endDate = true;
    }

    errors.hasErrors = Object.values(errors).some(Boolean);

    return errors;

}

export default validateNewPostInput;