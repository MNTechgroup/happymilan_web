// store/slices/authSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { getCookie, setCookie } from 'cookies-next';
// import { useSocket } from '../../ContextProvider/SocketContext';
import { io } from 'socket.io-client';

// Define an async thunk to handle the login request
export const loginAsync = createAsyncThunk('/dashboard/myprofile', async (credentials) => {

  const deviceToken = getCookie("fcmToken")
  const UserCredentials = {
    "email": credentials.email,
    "password": credentials.password,
    "deviceToken": deviceToken

  }

  const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/v1/user/auth/login`, UserCredentials);
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
    handleError: null,
    userId: null,
    ResetPassword: {
      email: "",
      otp: "",
      password: ""
    }
  },
  reducers: {
    resetError(state) {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.pending, (state) => {
        state.status = STATUSES.LOADING;
        state.handleError = null
        state.error = null; // Clear any previous errors
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
        state.status = STATUSES.IDLE;
        state.handleError = null

        const data = action.payload.data;
        console.log("🚀 ~ .addCase ~ data:", data)

        // Store user data in state
        state.user = data.user.name;
        state.userId = data.user.id;

        // Set cookies and local storage data (consider moving this logic outside of the reducer)
        setCookiesAndLocalStorage(data);
        SocketConnect(data);



        // You might want to reset the error state upon successful login
        state.error = null;
      })
      .addCase(loginAsync.rejected, (state, action) => {
        state.status = STATUSES.ERROR;
        state.handleError = STATUSES.ERROR
        // Provide more descriptive error messages based on different rejection reasons
        state.error = action.error.message || "Authentication Error: Please check your email and password and try again.";
      });

  },


});


function SocketConnect(data) {
  // const socket = useSocket();


  const socket = io.connect(`https://happymilan.tech`, {
    path: '/api/socket.io',
    query: { token: data.tokens.refresh.token }
  });

  socket.on('connect', () => {
    console.log('Connected to socket');
  });

  socket?.on("onlineUser", (data) => {
    console.log("Data from socket : ", data)
  })
  socket?.emit("userActive")
}

function setCookiesAndLocalStorage(data) {


  console.log("🚀 ~ setCookiesAndLocalStorage ~ data:", data)
  localStorage.setItem("personal", JSON.stringify(data?.user))
  const objectData = {
    userid: data.user.id,
    token: data.tokens.access.token,
    refreshToken: data.tokens.refresh.token,
    user: data.user.email,
    email: data.user.email,
    fullName: `${data.user.firstName} ${data.user.lastName}`,
    tokens: data.tokens
  }

  localStorage.setItem("authdata", JSON.stringify(objectData));

  setCookie('userid', data.user.id, { secure: true });
  localStorage.setItem("token", data.tokens.access.token);
  localStorage.setItem("refoken", data.tokens.refresh.token);
  localStorage.setItem('user', data.user.email, { secure: true });
  localStorage.setItem('email', data.user.email);
  localStorage.setItem('mobilenumber', data.user.mobileNumber)
  localStorage.setItem('flName', `${data.user.firstName} ${data.user.lastName}`);
  setCookie('jwtToken', data.tokens.access.token, { secure: true });
  setCookie('authtoken', data.tokens.refresh.token, { secure: true });
  setCookie('email', data.user.email, { secure: true });
  setCookie('userName', data.user.name, { secure: true });
  setCookie('data', JSON.stringify(data.tokens), { secure: true });





}

export default loginAuth.reducer;
// Export the login action
export const { login, resetError } = loginAuth.actions;
