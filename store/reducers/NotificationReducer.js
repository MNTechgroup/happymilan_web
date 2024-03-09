import { ADD_NEW_SHORTLIST, MARK_SHORTLISTS_AS_SEEN } from "../actions/GetingAlluser";
export const markshortlistseen = () =>({
    type :MARK_SHORTLISTS_AS_SEEN
  })
const initialState = {
    newShortlists: 0,
    // ... other initial state properties
  };
  
  const NotificationReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_NEW_SHORTLIST:
        return {
          ...state,
          newShortlists: state.newShortlists + 1,
        };
      case MARK_SHORTLISTS_AS_SEEN:
        return {
          ...state,
          newShortlists: 0,
        };
      // ... handle other action types as needed
      default:
        return state;
    }
  };

  

  export default NotificationReducer
  