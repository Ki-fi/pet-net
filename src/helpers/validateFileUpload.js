
function validateFileUpload(upload) {

    if (!upload || !upload.type) return false;

    const fileTypes = [
        "image/gif",
        "image/jpeg",
        "image/pjpeg",
        "image/png",
        "image/svg+xml",
        "image/tiff",
        "image/webp"
    ];

    const maxSizeMB = 5;
    const isValidType = fileTypes.includes(upload.type);
    const isValidSize = upload.size <= maxSizeMB * 1024 * 1024;

    return isValidType && isValidSize;
}

export default validateFileUpload;

