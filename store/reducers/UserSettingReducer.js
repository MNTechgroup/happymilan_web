import { GET_PRIVACY_QUESTIONS, GET_PRIVACY_QUESTIONS_FAILURE, GET_PRIVACY_QUESTIONS_SUCCESS, HIDE_MY_PROFILE, HIDE_MY_PROFILE_CLOSEMODAL, HIDE_MY_PROFILE_FAILURE, HIDE_MY_PROFILE_SUCCESS } from "../type";

const initialState = {
    loading: false,
    data: null,
    error: null,
    Profilehide: {
        loading: false,
        error: null,
        data: null,
        closemodal: false
    },
    privacyquestions: {
        loading: false,
        error: null,
        data: null
    }

};



const Userseting = (state = initialState, action) => {
    switch (action.type) {
        case HIDE_MY_PROFILE:
            return {
                ...state,
                Profilehide: {
                    loading: true,
                    error: null,
                    data: null,
                    closemodal: false
                }
            };
        case HIDE_MY_PROFILE_SUCCESS: {
            return {

                ...state,
                Profilehide: {
                    loading: false,
                    error: null,
                    closemodal: true,
                    data: action.payload
                }
            }
        }
        case HIDE_MY_PROFILE_FAILURE: {
            return {

                // loading: false,
                // error: action.payload
                ...state,
                Profilehide: {
                    loading: false,
                    error: action.payload,
                    data: null
                }
            }
        }
        case HIDE_MY_PROFILE_CLOSEMODAL: {
            return {
                ...state,
                Profilehide: {
                    ...state.Profilehide,
                    closemodal: false
                }
            }
        }
        case GET_PRIVACY_QUESTIONS: {
            return {
                ...state,
                privacyquestions: {
                    loading: true,
                    error: null,
                    data: null
                }
            }
        }
        case GET_PRIVACY_QUESTIONS_SUCCESS: {
            return {
                ...state,
                privacyquestions: {
                    loading: false,
                    error: null,
                    data: action.payload
                }
            }
        }
        case GET_PRIVACY_QUESTIONS_FAILURE: {
            return {
                ...state,
                privacyquestions: {
                    loading: false,
                    error: action.payload,
                    data: null
                }
            }
        }
        default:
            return state;
    }
}

export default Userseting;