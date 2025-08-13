
function isDeletingAllowed(details, storedUser) {

    if (!storedUser || !details) return false;

    else if (details.creator === storedUser.id || storedUser.role === 'ADMIN') {
        return true;
    }

    return false;
}

export default isDeletingAllowed;