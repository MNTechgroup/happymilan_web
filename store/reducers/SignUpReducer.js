import {
    RESEND_OTP,
    RESET_EMAIL_PASSWORD_FAILURE_FIRST_STEP,
    RESET_EMAIL_PASSWORD_FAILURE_SECOND_STEP,
    RESET_EMAIL_PASSWORD_FAILURE_THIRD_STEP,
    RESET_EMAIL_PASSWORD_FIRST_STEP, RESET_EMAIL_PASSWORD_SECOND_STEP, RESET_EMAIL_PASSWORD_SUCCESS_FIRST_STEP,
    RESET_EMAIL_PASSWORD_SUCCESS_SECOND_STEP,
    RESET_EMAIL_PASSWORD_SUCCESS_THIRD_STEP,
    RESET_EMAIL_PASSWORD_THIRD_STEP,
    RESET_PASSWORD_STEP,
    RESET_STEPS, SIGNUP_FIRST_STEP, SIGNUP_FIRST_STEP_FAILURE, SIGNUP_FIRST_STEP_SUCCESS, SIGNUP_SECOND_STEP, SIGNUP_SECOND_STEP_FAILURE, SIGNUP_SECOND_STEP_SUCCESS, SIGNUP_THIRD_STEP, SIGNUP_THIRD_STEP_FAILURE, SIGNUP_THIRD_STEP_SUCCESS
} from '../type';

const initialState = {
    step: 0, // Initial step
    loading: false,
    message: '',
    userData: {
        name: '',
        email: '',
        otp: '',
        password: '',
    },
    ResetPassword: {
        step: 0,
        loading: false,
        error: "",
        message: ""
    }
};



const SignupReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGNUP_FIRST_STEP: {
            return {
                ...state,
                loading: true
            }
        }
        case SIGNUP_FIRST_STEP_SUCCESS: {
            return {
                ...state,
                loading: false,
                step: 1,
                message: action.payload.message
            }
        }
        case SIGNUP_FIRST_STEP_FAILURE: {
            return {
                ...state,
                loading: false,
                message: "Something Went Wrong !"
            }
        }
        case SIGNUP_SECOND_STEP: {
            return {
                ...state,
                loading: true,
            }
        }
        case SIGNUP_SECOND_STEP_SUCCESS: {
            return {
                ...state,
                step: 2,
                loading: false,
                message: action.payload.message

            }
        }
        case SIGNUP_SECOND_STEP_FAILURE: {
            return {
                ...state,
                loading: false,
                message: "Something Went Wrong !"
            }
        }
        case SIGNUP_THIRD_STEP: {
            return {
                ...state,
                loading: true
            }
        }
        case SIGNUP_THIRD_STEP_SUCCESS: {
            return {
                ...state,
                step: 3,
                loading: false,
                message: action.payload.message
            }
        }
        case SIGNUP_THIRD_STEP_FAILURE: {
            return {
                ...state,
                loading: false,
                message: "Something Went Wrong !"
            }
        }
        case RESET_STEPS: {
            return {
                ...state,
                step: 0,
            }
        }
        case RESET_EMAIL_PASSWORD_FIRST_STEP: {
            return {
                ...state,
                ResetPassword: {
                    ...state.ResetPassword,
                    loading: true
                }
            };
        }
        case RESET_EMAIL_PASSWORD_SUCCESS_FIRST_STEP: {
            return {
                ...state,
                ResetPassword: {
                    ...state.ResetPassword,
                    loading: false,
                    step: 1
                }
            }
        }
        case RESET_EMAIL_PASSWORD_FAILURE_FIRST_STEP: {
            return {
                ...state,
                ResetPassword: {
                    ...state.ResetPassword,
                    loading: false,
                    error: "Something Went Wrong"
                }
            }
        }
        case RESET_EMAIL_PASSWORD_SECOND_STEP: {
            return {
                ...state,
                loading: true,
            }
        }
        case RESET_EMAIL_PASSWORD_SUCCESS_SECOND_STEP: {
            return {
                ...state,
                ResetPassword: {
                    ...state.ResetPassword,
                    loading: false,
                    step: 2
                }
            }
        }
        case RESET_EMAIL_PASSWORD_FAILURE_SECOND_STEP: {
            return {
                ...state,
                ResetPassword: {
                    ...state.ResetPassword,
                    loading: false,
                    error: "Something Went Wrong !"
                }
            }
        }
        case RESET_EMAIL_PASSWORD_THIRD_STEP: {
            return {
                ...state,
                ResetPassword: {
                    ...state.ResetPassword,
                    loading: true,

                }
            }
        }
        case RESET_EMAIL_PASSWORD_SUCCESS_THIRD_STEP: {
            return {
                ...state,
                ResetPassword: {
                    ...state.ResetPassword,
                    loading: false,
                    step: 3

                }
            }
        }
        case RESET_EMAIL_PASSWORD_FAILURE_THIRD_STEP: {
            return {
                ...state,
                ResetPassword: {
                    ...state.ResetPassword,
                    loading: false,
                    error: "Something Went Wrong !"
                }
            }
        }
        case RESET_PASSWORD_STEP: {
            return {
                step: 0, // Initial step
                loading: false,
                message: '',
                userData: {
                    name: '',
                    email: '',
                    otp: '',
                    password: '',
                },
                ResetPassword: {
                    step: 0,
                    loading: false,
                    error: "",
                    message: ""
                }
            }
        }
        default: return state;
    }
}

export default SignupReducer