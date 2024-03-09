// redux/slices/imageSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  error: null,
};

const imageSlice = createSlice({
  name: 'images',
  initialState,
  reducers: {
    uploadImagesStart(state) {
      state.isLoading = true;
      state.error = null;
    },
    uploadImagesSuccess(state) {
      state.isLoading = false;
      state.error = null;
    },
    uploadImagesFailure(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { uploadImagesStart, uploadImagesSuccess, uploadImagesFailure } = imageSlice.actions;
export default imageSlice.reducer;
