import {
    FETCH_USER_BY_ID_REQUEST,
    FETCH_USER_BY_ID_SUCCESS,
    FETCH_USER_BY_ID_FAILURE,
  } from '../actions/GetingUserById';
  
  const initialState = {
    user: null,
    loading: false,
    error: "",
  };
  
  const userByIdReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_USER_BY_ID_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case FETCH_USER_BY_ID_SUCCESS:
        return {
          ...state,
          loading: false,
          user: action.payload,
          error : ""
        };
      case FETCH_USER_BY_ID_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default userByIdReducer;
  