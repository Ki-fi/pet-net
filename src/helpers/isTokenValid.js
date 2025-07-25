
function isTokenValid(token) {
    if (!token) return false;

    try {
        const payload = JSON.parse(atob(token.split('.')[1]));
        const expiry = payload.exp;

        if (!expiry) return false;

        const now = Math.floor(Date.now() / 1000);
        return expiry > now;

    } catch (error) {
        console.error(error);
        return false;
    }
}

export default isTokenValid;