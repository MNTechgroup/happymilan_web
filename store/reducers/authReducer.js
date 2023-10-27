// redux/authSlice.js

import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    error: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

// redux/authSlice.js

import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const verifyGoogleAccount = createAsyncThunk(
  'auth/verifyGoogleAccount',
  async (idToken, { dispatch }) => {
    try {
      const response = await axios.post(
        'http://62.72.59.23:3000/api/v1/user/auth/google',
        { access_token: idToken }
      );

      // Dispatch the response to setUser action
      dispatch(setUser(response.data));

      return response.data;
    } catch (error) {
      // Dispatch the error to setError action
      dispatch(setError(error.message));
      throw error;
    }
  }
);


export const { setUser, setError } = authSlice.actions;
export default authSlice.reducer;
