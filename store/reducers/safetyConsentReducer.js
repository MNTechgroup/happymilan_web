import { FETCH_SAFETY_CONSENT_FAILURE, FETCH_SAFETY_CONSENT_REQUEST, FETCH_SAFETY_CONSENT_SUCCESS, POST_SAFETY_CONSENT_FAILURE, POST_SAFETY_CONSENT_REQUEST, POST_SAFETY_CONSENT_SUCCESS } from "../type";

const initialState = {
    safetyConsent: null,
    loading: false,
    error: null
};

const SafetyConsentReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SAFETY_CONSENT_REQUEST:
            return {

                safetyConsent: null,
                loading: true,
                error: null
            };
        case FETCH_SAFETY_CONSENT_SUCCESS:
            return {

                safetyConsent: action.payload,
                loading: false,
                error: null
            };
        case FETCH_SAFETY_CONSENT_FAILURE:
            return {

                safetyConsent: null,
                loading: false,
                error: "Something went wrong!"
            };
        case POST_SAFETY_CONSENT_REQUEST:
            return {
                safetyConsent: null,
                loading: true,
                error: null
            }
        case POST_SAFETY_CONSENT_SUCCESS:
            return {
                safetyConsent: action.payload,
                loading: false,
                error: null
            }
        case POST_SAFETY_CONSENT_FAILURE:
            return {
                safetyConsent: null,
                loading: false,
                error: "Something went wrong!"
            }

        default:
            return state;
    }
};

export default SafetyConsentReducer;
