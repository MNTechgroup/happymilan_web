// reducers/UserStoryView.js

import { GET_STORY_VIEWS_DETAILS, GET_STORY_VIEWS_DETAILS_FAILURE, GET_STORY_VIEWS_DETAILS_SUCCESS, VIEW_STORY_POST, VIEW_STORY_POST_FAILURE, VIEW_STORY_POST_SUCCESS } from "../type";

const initialState = {
    StoryViews: {
        data: null,
        loading: false,
        error: null,
    },
};

const UserStoryView = (state = initialState, action) => {
    switch (action.type) {
        case VIEW_STORY_POST:
            return {
                ...state.StoryViews,
                loading: true,
                error: null,
            };
        case VIEW_STORY_POST_SUCCESS:
            return {
                ...state.StoryViews,
                loading: false,
                data: action.payload,
                error: null,
            };
        case VIEW_STORY_POST_FAILURE:
            return {
                ...state.StoryViews,
                loading: false,
                data: null,
                error: action.payload,
            };
        case GET_STORY_VIEWS_DETAILS:
            return {
                ...state.StoryViews,
                loading: true,
                error: null
            }
        case GET_STORY_VIEWS_DETAILS_SUCCESS:
            return {
                ...state.StoryViews,
                loading: false,
                data: action.payload,
                error: null
            }
        case GET_STORY_VIEWS_DETAILS_FAILURE:
            return {
                ...state.StoryViews,
                loading: false,
                data: null,
                error: "error..."
            }


        default:
            return state;
    }
};



export default UserStoryView;
