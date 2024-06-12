// validation.js
const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
};

const validatePassword = (password) => {
    // Your password validation logic here
    return password.length >= 6; // Example: Password should be at least 6 characters long
};

const validatePhoneNumber = (phoneNumber) => {
    // This regex covers various international formats.
    const regex = /^\+?(\d{1,3})?[-.\s]?((\d{3}[-.\s]?){1,2}\d{4}|\d{10})$/;
    return regex.test(phoneNumber);
};

const validateFirstName = (firstName) => {
    if (!firstName) {
      return 'First name is required.';
    } else if (firstName.length < 1 || firstName.length > 50) {
      return 'First name must be between 1 and 50 characters.';
    } else if (!/^[a-zA-Z\s'-]+$/.test(firstName)) {
      return 'First name contains invalid characters.';
    } else if (firstName[0] !== firstName[0].toUpperCase()) {
      return 'First letter of first name should be capitalized.';
    }
    return null;
  };
const validateLastName = (lastName) => {
    if (!lastName) {
      return 'Last name is required.';
    } else if (lastName.length < 1 || lastName.length > 50) {
      return 'Last name must be between 1 and 50 characters.';
    } else if (!/^[a-zA-Z\s'-]+$/.test(lastName)) {
      return 'Last name contains invalid characters.';
    } else if (lastName[0] !== lastName[0].toUpperCase()) {
      return 'First letter of Last name should be capitalized.';
    }
    return null;
  };

export { validateEmail, validatePassword , validatePhoneNumber , validateFirstName , validateLastName };
