// utils/helpers/calculateAge.js

/**
 * Calculates the age based on the provided birthdate.
 * @param {string} birthdate - The birthdate in the format 'YYYY-MM-DD'.
 * @returns {number} - The calculated age.
 */
function calculateAge(birthdate) {
    const birthDate = new Date(birthdate);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();

    // Adjust age if the birth date hasn't occurred yet this year
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    return age;
}

export default calculateAge;
