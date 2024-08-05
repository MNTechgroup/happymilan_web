// reducers/userReducer.js
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
    CANCEL_FRIEND_REQUEST_SUCCESS,
    UPDATE_PROFILE_IMAGE,
    UPDATE_PROFILE_IMAGE_SUCCESS,
    UPDATE_PROFILE_IMAGE_FAILURE,
    GET_CANCELREQUEST_DATA,
    GET_CANCELREQUEST_DATA_SUCCESS,
    GET_CANCELREQUEST_DATA_FAILURE,
    DELETE_IMAGE,
    DELETE_IMAGE_SUCCESS,
    DELETE_IMAGE_FAILURE,
    UPDATE_PROFILE_IMAGE_PROCESS,
    POST_RECENT_USERPROFILE,
    POST_RECENT_USERPROFILE_SUCCESS,
    POST_RECENT_USERPROFILE_FAILURE,
    GET_RECENT_USERPROFILE_DATA,
    GET_RECENT_USERPROFILE_DATA_SUCCESS,
    GET_RECENT_USERPROFILE_DATA_FAILURE,
    GET_SEARCHUSERS_DATA,
    GET_SEARCHUSERS_DATA_SUCCESS,
    GET_SEARCHUSERS_DATA_FAILURE,
    FETCH_GRID_USER_DATA_REQUEST,
    FETCH_GRID_USER_DATA_REQUEST_SUCCESS,
    FETCH_GRID_USER_DATA_REQUEST_FAILURE,
    LIKED_USERS_PROFILE_DATA,
    LIKED_USERS_PROFILE_DATA_SUCCESS,
    GET_ALL_STATUS,
    GET_ALL_STATUS_SUCCESS,
    GET_ALL_STATUS_FAILURE,
    UPLOAD_MY_STORY,
    UPLOAD_MY_STORY_SUCCESS,
    UPLOAD_MY_STORY_FAILURE,
    UPLOAD_MY_STORY_MODAL,
    DELETE_STATUS_MODAL,
    DELETE_MY_STATUS,
    DELETE_MY_STATUS_SUCCESS,
    GET_MATCH_SCORE,
    GET_MATCH_SCORE_SUCCESS,
    GET_MATCH_SCORE_FAILURE
} from '../type';
import { STATUSES } from './MyProfile';
import { LIKE_USER } from '../actions/GetingAlluser';

const initialState = {
    loading: false,
    data: null,
    requestdata: {
        loading: false,
        data: null
    },
    error: null,
    educationdata: null,
    addressdata: {
        loading: false,
        data: null,
        error: null

    },
    professionaldata: null,
    partnerprefferencedata: {
        loading: false,
        data: null,
        error: null
    },
    acceptedrequestdata: {
        loading: false,
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
    cancelrequestdata: {
        data: null
    },
    profileimageupdate: {
        loading: false,
        process: false,
        data: null
    },
    cancelusersdata: {
        loading: false,
        data: null
    },
    deleteimagedata: {
        loading: false,
        error: null
    },
    recentusersdata: {
        data: null,
        loading: false,
        error: null
    },
    searchusersprofiledata: {
        data: null,
        loading: false,
        error: null
    },
    UserGridData: {
        userData: null,
        totalPages: 1,
        currentPage: 1,
        pagesdata: '',
        loading: false,
        error: null
    },
    LikedUsersData: {
        data: null,
        likeloading: false,
        error: null
    },
    UsersStorydata: {
        data: [],
        mystory: [],
        loading: false,
        mystorydeleted: false,
        CloseModal: false,
        error: null
    },
    StoryUpload: {
        loading: false,
        error: null,
        modalClose: false
    },
    MatchScore: {
        loading: false,
        matchScore: null,
        error: ""
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
                // loading: true,
                requestdata: {
                    loading: true,
                    data: null
                },
                error: null
            }
        case GET_REQUEST_SUCCESS:
            return {
                ...state,
                // loading: false,
                requestdata: {
                    loading: false,
                    data: action.payload
                },
                error: null
            }
        case GET_REQUEST_FAILURE:
            return {
                ...state,
                // loading: false,
                requestdata: {
                    loading: false,
                    data: null
                },
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
                // loading: true,
                // error: null
                partnerprefferencedata: {
                    loading: true,
                    data: null,
                    error: null
                },
            }
        }
        case GET_PARTNERPREFERENCE_DATA_SUCCESS: {
            return {
                ...state,
                // loading: false,
                // error: null
                partnerprefferencedata: {
                    loading: false,
                    data: action.payload,
                    error: null
                },

            }
        }
        case GET_PARTNERPREFERENCE_DATA_FAILURE: {
            return {
                ...state,
                loading: false,
                error: action.payload,
                partnerprefferencedata: {
                    loading: false,
                    data: null,
                    error: action.payload
                },
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
                acceptedrequestdata: {
                    ...state.acceptedrequestdata,
                    loading: true,
                },
                error: null
            }
        }
        case GET_ACCEPTED_REQUEST_DATA_SUCCESS: {
            return {
                ...state,
                loading: false,
                acceptedrequestdata: {
                    data: action.payload.data,
                    acceptedUsers: action.payload.acceptedUsers,
                    loading: false
                },
                error: null

            }
        }
        case GET_ACCEPTED_REQUEST_DATA_FAILURE: {
            return {
                ...state,
                loading: false,
                acceptedrequestdata: {
                    ...state.acceptedrequestdata,
                    loading: false,
                },
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
        case SENT_BLOCK_REQUEST: {
            return {
                ...state,
                loading: true,
                error: null,
            }
        }
        case SENT_BLOCK_REQUEST_SUCCESS: {
            return {
                ...state,
                loading: false,
                blockuserdata: {
                    data: action.payload,
                    blockusersdata: action.payload,
                },
                error: null
            }
        }

        case SENT_BLOCK_REQUEST_FAILURE: {
            return {
                ...state,
                loading: false,
                blockedusersdata: null,
                error: action.payload
            }
        }
        case CANCEL_FRIEND_REQUEST: {
            return {
                ...state,
                loading: true,
                cancelrequestdata: null,
                error: null
            }
        }
        case CANCEL_FRIEND_REQUEST_SUCCESS: {
            return {
                ...state,
                loading: false,
                cancelrequestdata: { data: action.payload },
                error: null
            }
        }
        case CANCEL_FRIEND_REQUEST_FAILURE: {
            return {
                ...state,
                loading: false,
                cancelrequestdata: null,
                error: action.payload

            }
        }
        case UPDATE_PROFILE_IMAGE: {
            return {
                ...state,
                profileimageupdate: {
                    ...state.profileimageupdate,
                    loading: true,
                    process: false,
                    data: null
                },
            }
        }
        case UPDATE_PROFILE_IMAGE_SUCCESS: {
            return {
                ...state,
                profileimageupdate: {
                    ...state.profileimageupdate,
                    loading: false,
                    process: true,
                    data: action.payload
                },
            }
        }
        case UPDATE_PROFILE_IMAGE_PROCESS:
            return {
                ...state,
                profileimageupdate: {
                    ...state.profileimageupdate,
                    process: false,

                },
            };
        case UPDATE_PROFILE_IMAGE_FAILURE: {
            return {
                ...state,
                profileimageupdate: {
                    ...state.profileimageupdate,
                    loading: false,
                    process: false,
                    data: null
                },
                error: action.payload
            }
        }
        case GET_CANCELREQUEST_DATA: {
            return {
                ...state,
                cancelusersdata: {
                    loading: true,
                    data: null
                },
            }
        }
        case GET_CANCELREQUEST_DATA_SUCCESS: {
            return {
                ...state,
                cancelusersdata: {
                    loading: false,
                    data: action.payload
                },
            }
        }
        case GET_CANCELREQUEST_DATA_FAILURE: {
            return {
                ...state,
                cancelusersdata: {
                    loading: false,
                    data: null
                },
                error: action.payload
            }
        }
        case DELETE_IMAGE: {
            return {
                ...state,
                deleteimagedata: {
                    loading: true
                }
            }
        }
        case DELETE_IMAGE_SUCCESS: {
            return {
                ...state,
                deleteimagedata: {
                    loading: false
                }
            }
        }
        case DELETE_IMAGE_FAILURE: {
            return {
                ...state,
                deleteimagedata: {
                    loading: false,
                    error: action.payload
                }

            }
        }
        case POST_RECENT_USERPROFILE: {
            return {
                ...state
            }
        }
        case POST_RECENT_USERPROFILE_SUCCESS: {
            return {
                ...state
            }
        }
        case POST_RECENT_USERPROFILE_FAILURE: {
            return {
                ...state
            }
        }
        case GET_RECENT_USERPROFILE_DATA: {
            return {
                ...state,
                recentusersdata: {
                    data: null,
                    loading: true,
                    error: null
                }
            }
        }
        case GET_RECENT_USERPROFILE_DATA_SUCCESS: {
            return {
                ...state,
                recentusersdata: {
                    data: action.payload,
                    loading: false,
                    error: null
                }
            }
        }
        case GET_RECENT_USERPROFILE_DATA_FAILURE: {
            return {
                ...state,
                recentusersdata: {
                    data: null,
                    loading: false,
                    error: action.payload
                }
            }
        }
        case GET_SEARCHUSERS_DATA: {
            return {
                ...state,
                searchusersprofiledata: {
                    data: null,
                    loading: true,
                    error: null
                }
            }
        }
        case GET_SEARCHUSERS_DATA_SUCCESS: {
            return {
                ...state,
                searchusersprofiledata: {
                    data: action.payload,
                    loading: false,
                    error: null
                }
            }
        }
        case GET_SEARCHUSERS_DATA_FAILURE: {
            return {
                ...state,
                searchusersprofiledata: {
                    data: null,
                    loading: false,
                    error: action.payload
                }
            }
        }
        case LIKE_USER: {

        }
        case FETCH_GRID_USER_DATA_REQUEST: {
            return {
                ...state,
                UserGridData: {
                    data: null,
                    currentPage: 0,
                    totalPages: 0,
                    pagesdata: '',
                    loading: true,
                    error: null
                }
            }
        }
        case FETCH_GRID_USER_DATA_REQUEST_SUCCESS: {
            return {
                ...state,
                UserGridData: {
                    data: action.payload.userData,
                    totalPages: action.payload.totalPages,
                    currentPage: action.payload.currentPage,
                    pagesdata: action.payload.pagesdata,
                    loading: false,
                    error: null
                }
            }
        }
        case FETCH_GRID_USER_DATA_REQUEST_FAILURE: {
            return {
                ...state,
                UserGridData: {
                    data: null,
                    totalPages: 0,
                    currentPage: 0,
                    pagesdata: '',
                    loading: false,
                    error: action.payload
                }
            }
        }
        case LIKED_USERS_PROFILE_DATA: {
            return {
                ...state,
                LikedUsersData: {
                    data: null,
                    likeloading: true,
                    error: null
                }
            }
        }
        case LIKED_USERS_PROFILE_DATA_SUCCESS: {
            return {
                ...state,
                LikedUsersData: {
                    data: action.payload,
                    likeloading: false,
                    error: null
                }
            }
        }
        case LIKED_USERS_PROFILE_DATA: {
            return {
                ...state,
                LikedUsersData: {
                    data: null,
                    likeloading: false,
                    error: action.payload
                }
            }
        }
        case GET_ALL_STATUS: {
            return {
                ...state,
                UsersStorydata: {
                    data: null,
                    mystory: null,
                    mystorydeleted: false,
                    CloseModal: false,
                    loading: true,
                    error: null

                }
            }
        }
        case GET_ALL_STATUS_SUCCESS: {
            return {
                ...state,
                UsersStorydata: {
                    data: action.payload.allstatus,
                    mystory: action.payload.mystory,
                    mystorydeleted: false,
                    CloseModal: true,
                    loading: false,
                    error: null
                }
            }
        }
        case GET_ALL_STATUS_FAILURE: {
            return {
                ...state,
                UsersStorydata: {
                    data: null,
                    mystory: null,
                    loading: false,
                    CloseModal: true,
                    error: action.payload
                }
            }
        }
        case DELETE_MY_STATUS: {

        }
        case DELETE_MY_STATUS_SUCCESS: {
            return {
                ...state,
                UsersStorydata: {
                    ...state.UsersStorydata,
                    mystorydeleted: true
                }
            }
        }
        case DELETE_STATUS_MODAL: {
            return {
                ...state,
                UsersStorydata: {
                    ...state.UsersStorydata,
                    mystorydeleted: false
                }
            }
        }
        case UPLOAD_MY_STORY: {
            return {
                ...state,
                StoryUpload: {
                    loading: true,
                    error: null,
                    modalClose: false
                }
            }
        }
        case UPLOAD_MY_STORY_SUCCESS: {
            return {
                ...state,
                StoryUpload: {
                    loading: false,
                    error: null,
                    modalClose: true
                }
            }
        }
        case UPLOAD_MY_STORY_FAILURE: {
            return {
                ...state,
                StoryUpload: {
                    loading: false,
                    error: action.payload,
                    modalClose: false
                }
            }
        }
        case UPLOAD_MY_STORY_MODAL: {
            return {
                ...state,
                StoryUpload: {
                    loading: false,
                    error: null,
                    modalClose: false
                }
            }
        }
        case GET_MATCH_SCORE: {
            return {
                ...state,
                MatchScore: {
                    loading: true
                }
            }
        }
        case GET_MATCH_SCORE_SUCCESS: {
            return {
                ...state,
                MatchScore: {
                    loading: false,
                    matchScore: action.payload
                }
            }
        }
        case GET_MATCH_SCORE_FAILURE: {
            return {
                ...state,
                MatchScore: {
                    error: action.payload
                }
            }
        }

        default:
            return state;
    }
};



export default userReducer;
