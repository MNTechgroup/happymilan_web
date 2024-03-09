// store/slices/authSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { setCookie } from 'cookies-next';

// Define an async thunk to handle the login request
export const loginAsync = createAsyncThunk('/dashboard/myprofile', async (credentials) => {
  const response = await axios.post('https://happymilan.tech/api/v1/user/auth/login', credentials);
  return response.data;
  //  return console.log(response.data)
});

// Create the authentication slice

const STATUSES = Object.freeze({
  IDLE: "idle",
  ERROR: "error",
  LOADING: "loading"
})

const loginAuth = createSlice({
  name: 'auth',
  initialState: { 
    user: null, 
    token: null, 
    status: STATUSES.IDLE, 
    error: null, 
    userId : null ,
    ResetPassword : {
      email : "",
      otp : "",
      password : ""
    }
  },
  reducers: {
    // resetError(state) {
    //   state.error = null;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.pending, (state) => {
        state.status = STATUSES.LOADING;
        state.error = null; // Clear any previous errors
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
        state.status = STATUSES.IDLE;

        const data = action.payload.data;

        // Store user data in state
        state.user = data.user.name;
        state.userId = data.user.id;

        // Set cookies and local storage data (consider moving this logic outside of the reducer)
        setCookiesAndLocalStorage(data);

        // You might want to reset the error state upon successful login
        state.error = null;
      })
      .addCase(loginAsync.rejected, (state, action) => {
        state.status = STATUSES.ERROR;
        // Provide more descriptive error messages based on different rejection reasons
        state.error = action.error.message || "Authentication Error: Please check your email and password and try again.";
      });
  },

});

function setCookiesAndLocalStorage(data) {
  setCookie('userid', data.user.id, { secure: true });
  localStorage.setItem("token", data.tokens.access.token);
  localStorage.setItem("refoken", data.tokens.refresh.token);
  localStorage.setItem('user', data.user.email);
  localStorage.setItem('flName', `${data.user.firstName} ${data.user.lastName}`);
  setCookie('jwtToken', data.tokens.access.token, { secure: true });
  setCookie('authtoken', data.tokens.refresh.token, { secure: true });
  setCookie('email', data.user.email, { secure: true });
  setCookie('userName', data.user.name, { secure: true });
  setCookie('data', JSON.stringify(data.tokens), { secure: true });
}

export default loginAuth.reducer;
// Export the login action
export const { login } = loginAuth.actions;
