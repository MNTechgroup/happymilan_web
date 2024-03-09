// reducers/userReducer.js
import { data } from 'autoprefixer';
import {
    SEND_REQUEST, REQUEST_SUCCESS, REQUEST_FAILURE, GET_REQUEST, GET_REQUEST_SUCCESS,
    GET_REQUEST_FAILURE, ACCEPT_REQUEST, ACCEPT_REQUEST_SUCCESS, ACCEPT_REQUEST_FAILURE,
    REJECT_REQUEST, REJECT_REQUEST_SUCCESS, REJECT_REQUEST_FAILURE, GET_EDUCATION_DATA,
    GET_EDUCATION_DATA_SUCCESS, GET_EDUCATION_DATA_FAILURE, GET_ADDRESS_DATA,
    GET_ADDRESS_DATA_SUCCESS, GET_ADDRESS_DATA_FAILURE, GET_PROFESSIONAL_DATA_FAILURE,
    GET_PROFESSIONAL_DATA_SUCCESS, GET_PROFESSIONAL_DATA, GET_PARTNERPREFERENCE_DATA,
    GET_PARTNERPREFERENCE_DATA_SUCCESS, GET_PARTNERPREFERENCE_DATA_FAILURE, UPDATE_EDUCATION_DATA,
    UPDATE_EDUCATION_DATA_SUCCESS, UPDATE_EDUCATION_DATA_FAILURE, UPDATE_PROFESSIONAL_DATA,
    UPDATE_PROFESSIONAL_DATA_SUCCESS, UPDATE_PROFESSIONAL_DATA_FAILURE,
    UPDATE_PARTNERPREFERENCE_DATA, UPDATE_PARTNERPREFERENCE_DATA_SUCCESS,
    UPDATE_PARTNERPREFERENCE_DATA_FAILURE,
    GET_ACCEPTED_REQUEST_DATA,
    GET_ACCEPTED_REQUEST_DATA_SUCCESS,
    GET_ACCEPTED_REQUEST_DATA_FAILURE,
    GET_SENTREQUEST_DATA,
    GET_SENTREQUEST_DATA_SUCCESS,
    GET_SENTREQUEST_DATA_FAILURE,
    LOGOUT_USER,
    GET_BLOCK_USERDATA,
    GET_BLOCK_USERDATA_SUCCESS,
    GET_BLOCK_USERDATA_FAILURE,
    SENT_BLOCK_REQUEST,
    SENT_BLOCK_REQUEST_SUCCESS,
    SENT_BLOCK_REQUEST_FAILURE,
    CANCEL_FRIEND_REQUEST,
    CANCEL_FRIEND_REQUEST_FAILURE,
    CANCEL_FRIEND_REQUEST_SUCCESS
} from '../type';

const initialState = {
    loading: false,
    data: null,
    requestdata: null,
    error: null,
    educationdata: null,
    addressdata: null,
    professionaldata: null,
    partnerprefferencedata: null,
    acceptedrequestdata: {
        data: null,
        acceptedUsers: null
    },
    sentrequestdata: {
        data: null,
        sentUsersdata: null
    },
    blockuserdata: {
        data: null,
        blockusersdata: null
    },
    cancelrequestdata : {
        data : null
    }
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case REQUEST_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: null,
            };
        case REQUEST_FAILURE:
            return {
                ...state,
                loading: false,
                data: null,
                error: action.payload,
            };
        case GET_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            }
        case GET_REQUEST_SUCCESS:
            return {
                ...state,
                loading: false,
                requestdata: action.payload,
                error: null
            }
        case GET_REQUEST_FAILURE:
            return {
                ...state,
                loading: false,
                requestdata: null,
                error: action.payload
            }
        case ACCEPT_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            }
        case ACCEPT_REQUEST_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: null
            }
        case ACCEPT_REQUEST_FAILURE:
            return {
                ...state,
                loading: false,
                data: null,
                error: action.payload
            }
        case REJECT_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            }
        case REJECT_REQUEST_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: null
            }
        case REJECT_REQUEST_FAILURE:
            return {
                ...state,
                loading: false,
                data: null,
                error: action.payload
            }
        case GET_EDUCATION_DATA: {
            return {
                ...state,
                loading: true,
                error: null
            }
        }
        case GET_EDUCATION_DATA_SUCCESS: {
            return {
                ...state,
                loading: false,
                educationdata: action.payload,
                error: null
            }
        }
        case GET_EDUCATION_DATA_FAILURE: {
            return {
                ...state,
                loading: false,
                educationdata: null,
                error: action.payload
            }
        }
        case UPDATE_EDUCATION_DATA: {
            return {
                ...state,
                loading: true,
                error: null
            }
        }
        case UPDATE_EDUCATION_DATA_SUCCESS: {
            return {
                ...state,
                loading: false,
                // educationdata: action.payload,
                error: null
            }
        }
        case UPDATE_EDUCATION_DATA_FAILURE: {
            return {
                ...state,
                loading: false,
                educationdata: null,
                error: action.payload
            }
        }
        case GET_ADDRESS_DATA: {
            return {
                ...state,
                loading: true,
                error: null
            }
        }
        case GET_ADDRESS_DATA_SUCCESS: {
            return {
                ...state,
                loading: false,
                addressdata: action.payload,
                error: null
            }
        }
        case GET_ADDRESS_DATA_FAILURE: {
            return {
                ...state,
                loading: false,
                addressdata: null,
                error: action.payload
            }
        }
        case GET_PROFESSIONAL_DATA: {
            return {
                ...state,
                loading: true,
                error: null
            }
        }
        case GET_PROFESSIONAL_DATA_SUCCESS: {
            return {
                ...state,
                loading: false,
                professionaldata: action.payload,
                error: null
            }
        }
        case GET_PROFESSIONAL_DATA_FAILURE: {
            return {
                ...state,
                loading: false,
                professionaldata: null,
                error: action.payload
            }
        }
        case UPDATE_PROFESSIONAL_DATA: {
            return {
                ...state,
                loading: true,
                error: null
            }
        }
        case UPDATE_PROFESSIONAL_DATA_SUCCESS: {
            return {
                ...state,
                loading: false,
                professionaldata: action.payload,
                error: null
            }
        }
        case UPDATE_PROFESSIONAL_DATA_FAILURE: {
            return {
                ...state,
                loading: false,
                professionaldata: null,
                error: action.payload
            }
        }
        case GET_PARTNERPREFERENCE_DATA: {
            return {
                ...state,
                loading: true,
                error: null
            }
        }
        case GET_PARTNERPREFERENCE_DATA_SUCCESS: {
            return {
                ...state,
                loading: false,
                partnerprefferencedata: action.payload,
                error: null
            }
        }
        case GET_PARTNERPREFERENCE_DATA_FAILURE: {
            return {
                ...state,
                loading: false,
                partnerprefferencedata: null,
                error: action.payload
            }
        }
        case UPDATE_PARTNERPREFERENCE_DATA: {
            return {
                ...state,
                loading: true,
                error: null
            }
        }
        case UPDATE_PARTNERPREFERENCE_DATA_SUCCESS: {
            return {
                ...state,
                loading: false,
                partnerprefferencedata: action.payload,
                error: null
            }
        }
        case UPDATE_PARTNERPREFERENCE_DATA_FAILURE: {
            return {
                ...state,
                loading: false,
                partnerprefferencedata: null,
                error: action.payload
            }
        }
        case GET_ACCEPTED_REQUEST_DATA: {
            return {
                ...state,
                loading: true,
                error: null
            }
        }
        case GET_ACCEPTED_REQUEST_DATA_SUCCESS: {
            return {
                ...state,
                loading: false,
                acceptedrequestdata: {
                    data: action.payload.data,
                    acceptedUsers: action.payload.acceptedUsers
                },
                error: null

            }
        }
        case GET_ACCEPTED_REQUEST_DATA_FAILURE: {
            return {
                ...state,
                loading: false,
                partnerprefferencedata: null,
                error: action.payload
            }
        }
        case GET_SENTREQUEST_DATA: {
            return {
                ...state,
                loading: true,
                error: null
            }
        }
        case GET_SENTREQUEST_DATA_SUCCESS: {
            return {
                ...state,
                loading: false,
                sentrequestdata: {
                    data: action.payload.data,
                    sentUsersdata: action.payload.sentUsersdata
                },
                error: null
            }
        }
        case GET_SENTREQUEST_DATA_FAILURE: {
            return {
                ...state,
                loading: false,
                partnerprefferencedata: null,
                error: action.payload
            }
        }
        case GET_BLOCK_USERDATA: {
            return {
                ...state,
                loading: true,
                error: null
            }
        }
        case GET_BLOCK_USERDATA_SUCCESS: {
            return {
                ...state,
                loading: false,
                blockedusersdata: action.payload,
                error: null
            }
        }
        case GET_BLOCK_USERDATA_FAILURE: {
            return {
                ...state,
                loading: false,
                blockedusersdata: null,
                error: action.payload
            }
        }
        case SENT_BLOCK_REQUEST : {
            return {
                ...state,
                loading: true,
                error: null,
            }
        }
        case SENT_BLOCK_REQUEST_SUCCESS : {
            return {
                ...state,
                loading: false,
                blockuserdata:{
                    data : action.payload,
                    blockusersdata : action.payload,
                },
                error: null
            }
        }

        case SENT_BLOCK_REQUEST_FAILURE : {
            return {
                ...state,
                loading: false,
                blockedusersdata: null,
                error: action.payload
            }
        }
        case CANCEL_FRIEND_REQUEST : {
            return {
                ...state,
                loading : true,
                cancelrequestdata : null,
                error : null
            }
        }
        case CANCEL_FRIEND_REQUEST_SUCCESS : {
            return {
                ...state,
                loading : false,
                cancelrequestdata : { data : action.payload },
                error : null
            }
        }
        case CANCEL_FRIEND_REQUEST_FAILURE : {
            return {
                ...state,
                loading : false,
                cancelrequestdata : null,
                error : action.payload

            }
        }


        default:
            return state;
    }
};



export default userReducer;
