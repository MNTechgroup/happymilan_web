import { GET_PRIVACY_QUESTIONS, GET_PRIVACY_QUESTIONS_FAILURE, GET_PRIVACY_QUESTIONS_SUCCESS, HIDE_MY_PROFILE, HIDE_MY_PROFILE_CLOSEMODAL, HIDE_MY_PROFILE_FAILURE, HIDE_MY_PROFILE_SUCCESS, UPDATE_DISPLAY_NAME, UPDATE_DISPLAY_NAME_FAILURE, UPDATE_DISPLAY_NAME_SUCCESS, UPDATE_DISPLAY_STATUS } from "../type";

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
    },
    DisplayName: {
        NameChangeloading: false,
        error: null,
        status: ""
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
        case UPDATE_DISPLAY_NAME: {
            return {
                ...state,
                DisplayName: {
                    NameChangeloading: true,
                }
            }
        }
        case UPDATE_DISPLAY_NAME_SUCCESS: {
            return {
                ...state,
                DisplayName: {
                    NameChangeloading: false,
                    status: "Success"
                }
            }
        }
        case UPDATE_DISPLAY_NAME_FAILURE: {
            return {
                ...state,
                DisplayName: {
                    NameChangeloading: false,
                    error: action.payload
                }
            }
        }
        case UPDATE_DISPLAY_STATUS: {
            return {
                ...state,
                DisplayName: {
                    // NameChangeloading: false,
                    status: ""
                    // error: action.payload
                }
            }
        }

        default:
            return state;
    }
}

export default Userseting;