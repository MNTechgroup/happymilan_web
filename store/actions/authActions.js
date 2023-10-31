export const loginUser = (userData) => ({
    type: 'LOGIN_USER',
    payload: userData,
  });
  
  export const logoutUser = () => ({
    type: 'LOGOUT_USER',
  });


  // store/actions/authActions.js
import axios from 'axios';

export const login = (credentials) => {
  return async (dispatch) => {
    try {
      // Make the login API request
      const response = await axios.post('https://happymilan.tech/api/v1/user/auth/login', credentials);

      // Assuming your API returns a JWT token upon successful login
      const jwtToken = "token";

      console.log('response',response)

      // Store the JWT token in Redux
      dispatch(setToken(jwtToken)); // Create a 'setToken' action

      // Store the JWT token in local storage
    //   localStorage.setItem('jwtToken', jwtToken);

      // Handle successful login (e.g., redirect the user)
    } catch (error) {
      // Handle login error (e.g., display an error message)
      console.error('Login error:', error);
    }
  };
};
