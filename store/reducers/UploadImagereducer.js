export const UPLOAD_IMAGE = 'UPLOAD_IMAGE';

// Action creator
export const uploadImage = (imageData) => ({
  type: UPLOAD_IMAGE,
  payload: imageData,
});

// Reducer
const initialState = {
  imageData: null,
};

export const imageReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPLOAD_IMAGE:
      return {
        ...state,
        imageData: action.payload,
      };
    default:
      return state;
  }
};