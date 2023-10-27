// store/slices/authSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Define an async thunk to handle the login request
export const loginAsync = createAsyncThunk('auth/login', async (credentials) => {
  const response = await axios.post('http://62.72.59.23:3000/api/v1/user/auth/login', credentials);
  return response.data;
//  return console.log(response.data)
});

// Create the authentication slice
const loginAuth = createSlice({
  name: 'auth',
  initialState: { user: null, token: null, status: 'idle', error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
        state.status = 'succeeded';
       console.log(`the action = `,action.payload)
        // state.token = action.payload.token;
      })
      .addCase(loginAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default loginAuth.reducer;

// Export the login action
export const { login } = loginAuth.actions;
