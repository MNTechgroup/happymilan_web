/**
 * Mask an email address by showing the first 3 and last 3 characters of the local part.
 * @param {string} email - The email address to be masked.
 * @returns {string} The masked email address.
 */
function maskEmail(email) {
    const [localPart, domain] = email?.split("@");

    // Determine how many characters to mask
    const visibleChars = 3;
    const maskedPartLength = localPart.length - 2 * visibleChars;

    if (maskedPartLength > 0) {
        const maskedPart = "*".repeat(maskedPartLength);
        const maskedEmail = `${localPart.substring(0, visibleChars)}${maskedPart}${localPart.substring(localPart.length - visibleChars)}@${domain}`;
        return maskedEmail;
    } else {
        // If the local part is too short to mask properly, return as is or handle differently
        return email;
    }
}

// Example usage
export default maskEmail