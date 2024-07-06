// slices/authSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { getCookie, setCookie } from 'cookies-next';
// import { setCookie, getCookie } from 'cookie-next';

export const checkUserPlan = createAsyncThunk('auth/checkUserPlan', async () => {
  const token = getCookie('authtoken');

  if (!token) {
    return { success: false, message: 'No token found' };
  }

  const config = {
    method: 'get',
    url: 'https://happymilan.tech/api/v1/user/user/checkPlan',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios(config);
  console.log("data-- ", response.data.data)
  const obj = {message : "No subscription found for the user" ,success : false}
  return obj;
});

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: getCookie('token') || null,
    hasPlan: false,
    status: 'idle',
    error: null,
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
      setCookie('token', action.payload);
    },
    logout: (state) => {
      state.token = null;
      state.hasPlan = false;
      state.status = 'idle';
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(checkUserPlan.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(checkUserPlan.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.hasPlan = action.payload.success;
      })
      .addCase(checkUserPlan.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { setToken, logout } = authSlice.actions;

export default authSlice.reducer;
