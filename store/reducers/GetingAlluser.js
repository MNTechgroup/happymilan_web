// reducers/allUsersReducer.js
import {
    FETCH_ALL_USERS_REQUEST,
    FETCH_ALL_USERS_SUCCESS,
    FETCH_ALL_USERS_FAILURE,
    ADD_TO_SHORTLIST,
    LIKE_USER,
    UNLIKE_USER,
    SEND_REQUEST,
    REMOVE_REQUEST,
  } from '../actions/GetingAlluser';
  
  const initialState = {
    users: [],
    loading: false,
    error: null,
  };
  
  const allUsersReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_ALL_USERS_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case FETCH_ALL_USERS_SUCCESS:
        return {
          ...state,
          loading: false,
          users: action.payload,
        };
      case FETCH_ALL_USERS_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
        case ADD_TO_SHORTLIST:
          // Logic to add user to shortlist
          return {
            ...state,
            // Update state with new shortlisted user
          };
        case LIKE_USER:
          // Logic to like a user
          return {
            ...state,
            // Update state with user liked
          };
        case UNLIKE_USER:
          // Logic to unlike a user
          return {
            ...state,
            // Update state with user unliked
          };
        case SEND_REQUEST:
          // Logic to send a request to a user
          return {
            ...state,
            // Update state with user request sent
          };
        case REMOVE_REQUEST:
          // Logic to remove a request sent to a user
          return {
            ...state,
            // Update state with request removed
          };
      default:
        return state;
    }
  };
  
  export default allUsersReducer;
  