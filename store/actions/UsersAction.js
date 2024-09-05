
import { deleteCookie, getCookie } from 'cookies-next';
import {
    SEND_REQUEST, REQUEST_SUCCESS, REQUEST_FAILURE,
    ACCEPT_REQUEST_SUCCESS, ACCEPT_REQUEST_FAILURE, REJECT_REQUEST,
    REJECT_REQUEST_SUCCESS, ACCEPT_REQUEST, REJECT_REQUEST_FAILURE, GET_EDUCATION_DATA_SUCCESS,
    GET_EDUCATION_DATA_FAILURE, GET_EDUCATION_DATA,
    GET_PROFESSIONAL_DATA_SUCCESS, GET_PROFESSIONAL_DATA_FAILURE, GET_PROFESSIONAL_DATA,
    GET_PARTNERPREFERENCE_DATA, GET_PARTNERPREFERENCE_DATA_SUCCESS,
    UPDATE_EDUCATION_DATA, UPDATE_EDUCATION_DATA_SUCCESS, UPDATE_EDUCATION_DATA_FAILURE, GET_ACCEPTED_REQUEST_DATA,
    GET_ACCEPTED_REQUEST_DATA_SUCCESS, GET_ACCEPTED_REQUEST_DATA_FAILURE, GET_SENTREQUEST_DATA_SUCCESS, GET_SENTREQUEST_DATA_FAILURE,
    GET_SENTREQUEST_DATA, LOGOUT_USER, GET_BLOCK_USERDATA, GET_BLOCK_USERDATA_SUCCESS, GET_BLOCK_USERDATA_FAILURE,
    SENT_BLOCK_REQUEST_SUCCESS, SENT_BLOCK_REQUEST_FAILURE, SENT_BLOCK_REQUEST, CANCEL_FRIEND_REQUEST_FAILURE,
    CANCEL_FRIEND_REQUEST_SUCCESS,
    CANCEL_FRIEND_REQUEST, UPDATE_PROFILE_IMAGE, UPDATE_PROFILE_IMAGE_SUCCESS, UPDATE_PROFILE_IMAGE_FAILURE, GET_CANCELREQUEST_DATA,
    GET_CANCELREQUEST_DATA_SUCCESS, GET_CANCELREQUEST_DATA_FAILURE, DELETE_IMAGE_SUCCESS, DELETE_IMAGE_FAILURE, DELETE_IMAGE,
    UPDATE_PROFILE_IMAGE_PROCESS, POST_RECENT_USERPROFILE_SUCCESS, POST_RECENT_USERPROFILE_FAILURE, POST_RECENT_USERPROFILE,
    GET_RECENT_USERPROFILE_DATA, GET_RECENT_USERPROFILE_DATA_FAILURE, GET_RECENT_USERPROFILE_DATA_SUCCESS, UPDATE_ADDRESS_DATA,
    UPDATE_ADDRESS_DATA_FAILURE, UPDATE_ADDRESS_DATA_SUCCESS, FETCH_GRID_USER_DATA_REQUEST, FETCH_GRID_USER_DATA_REQUEST_SUCCESS,
    LIKED_USERS_PROFILE_DATA, LIKED_USERS_PROFILE_DATA_SUCCESS, UPLOAD_MY_STORY, UPLOAD_MY_STORY_SUCCESS, UPLOAD_MY_STORY_FAILURE,
    GET_ALL_STATUS_SUCCESS, GET_ALL_STATUS, GET_ALL_STATUS_FAILURE, UPLOAD_MY_STORY_MODAL, DELETE_MY_STATUS_SUCCESS,
    DELETE_STATUS_MODAL,
    GET_MATCH_SCORE,
    GET_MATCH_SCORE_SUCCESS,
    GET_MATCH_SCORE_FAILURE
} from '../type';
import { GET_REQUEST, GET_REQUEST_SUCCESS, GET_REQUEST_FAILURE } from '../type';
import { fetchMyProfileData } from '../reducers/MyProfile';

export const sendRequest = (requestData) => {
    return async (dispatch) => {
        dispatch({ type: SEND_REQUEST });
        const currentUser = getCookie("userid")
        const token = getCookie("authtoken")
        const axios = require('axios');
        let data = JSON.stringify({
            "friend": requestData,
            "user": currentUser
        });

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: `${process.env.NEXT_PUBLIC_API_URL}/v1/user/friend/create-friend`,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            data: data
        };

        axios.request(config)
            .then((response) => {


                dispatch({ type: REQUEST_SUCCESS, payload: response.data });
            })
            .catch((error) => {
                console.log(error);
            });
    };
};

export const requestSuccess = (response) => ({
    type: REQUEST_SUCCESS,
    payload: response,
});

export const requestFailure = (error) => ({
    type: REQUEST_FAILURE,
    payload: error,
});

export const getFriendsList = () => {
    return async (dispatch) => {
        dispatch({ type: GET_REQUEST });
        const axios = require('axios');
        const token = getCookie("authtoken")

        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `${process.env.NEXT_PUBLIC_API_URL}/v1/user/friend/get-frd-requests`,
            headers: {
                'Authorization': `Bearer ${token}`
            }
        };

        const response = await axios.request(config);

        response.data.data.forEach(async (element) => {
            const url = `${process.env.NEXT_PUBLIC_API_URL}/v1/user/user/${element.id}`;

            try {
                const fetchResponse = await fetch(url);
                if (!fetchResponse.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await fetchResponse.json();
            } catch (error) {
                console.error('There was a problem with your fetch operation:', error);
            }
        });


        dispatch({ type: GET_REQUEST_SUCCESS, payload: response.data });


    }
}

export const getRequestSuccess = (response) => ({
    type: GET_REQUEST_SUCCESS,
    payload: response,
})

export const getRequestFailure = (error) => ({
    type: GET_REQUEST_FAILURE,
    payload: error
})

export const acceptRequest = (requestData) => {
    return async (dispatch) => {

        dispatch({ type: ACCEPT_REQUEST })

        const axios = require('axios');
        const currentuserId = getCookie("userid")
        const token = getCookie("authtoken")
        let data = JSON.stringify({
            "user": currentuserId,
            "request": requestData.id,
            "status": "accepted"
        });

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: `${process.env.NEXT_PUBLIC_API_URL}/v1/user/friend/respond-friend-req`,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            data: data
        };

        axios.request(config)
            .then((response) => {

                dispatch({ type: ACCEPT_REQUEST_SUCCESS, payload: response.data })
            })
            .catch((error) => {
                console.log(error);
            });

    }
}

export const acceptRequestSuccess = (respsone) => ({
    type: ACCEPT_REQUEST_SUCCESS,
    payload: respsone
})

export const acceptRequestFailure = (error) => ({
    type: ACCEPT_REQUEST_FAILURE,
    payload: error
})
export const rejectRequest = (requestData) => {
    return async (dispatch) => {
        dispatch({ type: REJECT_REQUEST });

        console.log(requestData)

        const axios = require('axios');
        const currentuserId = getCookie("userid")
        const token = getCookie("authtoken")
        let data = JSON.stringify({
            "user": currentuserId,
            "request": requestData.id,
            "status": "rejected"
        });

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: `${process.env.NEXT_PUBLIC_API_URL}/v1/user/friend/respond-friend-req`,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            data: data
        };

        axios.request(config)
            .then((response) => {

                dispatch({ type: REJECT_REQUEST_SUCCESS, payload: response.data })
            })
            .catch((error) => {
                console.log(error);
            });

    }
}

export const rejectRequestSuccess = (respsone) => ({
    type: REJECT_REQUEST_SUCCESS,
    payload: respsone
})

export const rejectRequestFailure = (error) => ({
    type: REJECT_REQUEST_FAILURE,
    payload: error
})


export const getEducationData = (requestData) => {
    return async (dispatch) => {
        dispatch({ type: GET_EDUCATION_DATA });

        const axios = require('axios');
        const token = getCookie("authtoken")

        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `${process.env.NEXT_PUBLIC_API_URL}/v1/user/userEducation/${requestData}`,
            headers: {
                'Authorization': `Bearer ${token}`
            }
        };

        axios.request(config)
            .then((response) => {

                dispatch({ type: GET_EDUCATION_DATA_SUCCESS, payload: response.data })
            })
            .catch((error) => {
                console.log(error);
            });

    }
}

export const getEducationDataSuccess = (response) => ({
    type: GET_EDUCATION_DATA_SUCCESS,
    payload: response
})

export const getEducationDataFailure = (error) => ({
    type: GET_EDUCATION_DATA_FAILURE,
    payload: error
})
export const updateEducationData = (userid, alldata) => {
    return async (dispatch) => {
        dispatch({ type: UPDATE_EDUCATION_DATA });


        const axios = require('axios');
        const token = getCookie("authtoken")
        let data = JSON.stringify(alldata);

        let config = {
            method: 'put',
            maxBodyLength: Infinity,
            url: `${process.env.NEXT_PUBLIC_API_URL}/v1/user/userEducation/${userid}`,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            data: data
        };

        axios.request(config)
            .then((response) => {

                dispatch({ type: UPDATE_EDUCATION_DATA_SUCCESS, payload: response.data });
            })
            .catch((error) => {
                console.log(error);
            });

    }
}

export const updateEducationDataSuccess = (response) => ({
    type: UPDATE_EDUCATION_DATA_SUCCESS,
    payload: response
})

export const updateEducationDataFailure = (error) => ({
    type: UPDATE_EDUCATION_DATA_FAILURE,
    payload: error
})


export const getProfessionalData = (requestData) => {
    return async (dispatch) => {
        dispatch({ type: GET_PROFESSIONAL_DATA });

        const axios = require('axios');
        const token = getCookie("authtoken")

        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `${process.env.NEXT_PUBLIC_API_URL}/v1/user/userProfessionalDetail/getbyid/${requestData}`,
            headers: {
                'Authorization': `Bearer ${token}`
            }
        };

        axios.request(config)
            .then((response) => {

                dispatch({ type: GET_PROFESSIONAL_DATA_SUCCESS, payload: response.data })
            })
            .catch((error) => {
                console.log(error);
            });

    }
}




export const getProfessionalSuccess = (response) => ({
    type: GET_PROFESSIONAL_DATA_SUCCESS,
    payload: response
})

export const getProfessionalFailure = (error) => ({
    type: GET_PROFESSIONAL_DATA_FAILURE,
    payload: error
})


export const getPartnerpreferencedata = (requestData) => {
    return async (dispatch) => {
        dispatch({ type: GET_PARTNERPREFERENCE_DATA });

        const axios = require('axios');
        const token = getCookie("authtoken")

        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `${process.env.NEXT_PUBLIC_API_URL}/user/partner/${requestData}`,
            headers: {
                'Authorization': `Bearer ${token}`
            }
        };

        axios.request(config)
            .then((response) => {

                dispatch({ type: GET_PARTNERPREFERENCE_DATA_SUCCESS, payload: response.data.data })
            })
            .catch((error) => {
                console.log(error);
            });

    }
}



export const getPartnerpreferenceSuccess = (response) => ({
    type: GET_PROFESSIONAL_DATA_SUCCESS,
    payload: response
})

export const getPartnerpreferenceFailure = (error) => ({
    type: GET_PROFESSIONAL_DATA_FAILURE,
    payload: error
})


export const getAcceptedRequestData = () => {
    return async (dispatch) => {
        dispatch({ type: GET_ACCEPTED_REQUEST_DATA });

        try {
            const axios = require('axios');
            const token = getCookie("authtoken");


            if (!token) {
                throw new Error('Authentication token is missing.');
            }

            const config = {
                method: 'get',
                url: `${process.env.NEXT_PUBLIC_API_URL}/v1/user/friend/get-frds`,
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            };

            const response = await axios(config);
            const currentUser = getCookie("userid");

            if (!currentUser) {
                throw new Error('User ID is missing.');
            }

            const friendRequests = response.data.data
                .map((res) => {
                    if (res?.user?.id && res?.friend?.id) {
                        return currentUser === res.friend.id ? res.user : res.friend;
                    }
                    return null;
                })
                .filter((user) => user !== null); // Filter out any null values

            dispatch({
                type: GET_ACCEPTED_REQUEST_DATA_SUCCESS,
                payload: {
                    data: response.data,
                    acceptedUsers: friendRequests
                }
            });
        } catch (error) {
            console.error('Error fetching accepted request data:', error);
            dispatch({ type: GET_ACCEPTED_REQUEST_DATA_FAILURE, payload: error.message });
        }
    };
};


const fetchUserDataBatch = async (batchIds) => {
    const fetchPromises = batchIds.map(id => FetchUserDataById(id));
    return Promise.all(fetchPromises);
};



export const getAcceptedRequestDataSuccess = (response) => ({
    type: GET_ACCEPTED_REQUEST_DATA_SUCCESS,
    payload: response
})

export const getAcceptedRequestDataFailure = (error) => ({
    type: GET_ACCEPTED_REQUEST_DATA_FAILURE,
    payload: error
})

export const getSentrequestData = () => {
    return async (dispatch) => {
        dispatch({ type: GET_SENTREQUEST_DATA });


        const axios = require('axios');
        const Token = getCookie("authtoken")
        const CurrentUserID = getCookie("userid")

        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `${process.env.NEXT_PUBLIC_API_URL}/v1/user/friend/get-request-sentv2`,
            headers: {
                'Authorization': `Bearer ${Token}`
            }
        };

        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
                dispatch({
                    type: GET_SENTREQUEST_DATA_SUCCESS, payload: {
                        data: response.data,
                        // sentUsersdata: userDataArray  //Pending--v2
                    }
                });
            })
            .catch((error) => {
                console.log(error);
                dispatch({ type: GET_SENTREQUEST_DATA_FAILURE, payload: error.message });
            });


        //     try {
        //         const axios = require('axios');
        //         const token = getCookie("authtoken");

        //         const config = {
        //             method: 'get',
        //             url: `${process.env.NEXT_PUBLIC_API_URL}/v1/user/friend/get-request-sent`,
        //             headers: {
        //                 'Authorization': `Bearer ${token}`
        //             }
        //         };

        //         const response = await axios(config);

        //         const friendRequests = response.data.data.map((res) => res.friend);
        //         const friendIds = friendRequests.reduce((ids, friendArray) => {
        //             // Ensure friendArray is an object with id property before extracting id
        //             if (friendArray && friendArray.id) {
        //                 ids.push(friendArray.id);
        //             } else {
        //                 console.error('Friend array is not in the expected format:', friendArray);
        //             }
        //             return ids;
        //         }, []);


        //         // Define the batch size for fetching user data
        //         const batchSize = 50;
        //         const numBatches = Math.ceil(friendIds.length / batchSize);

        //         const userDataArray = [];

        //         // Fetch user data in batches
        //         for (let i = 0; i < numBatches; i++) {
        //             const start = i * batchSize;
        //             const end = Math.min((i + 1) * batchSize, friendIds.length);
        //             const batchIds = friendIds.slice(start, end);

        //             const batchUserData = await fetchUserDataBatch(batchIds);
        //             userDataArray.push(...batchUserData);
        //         }

        //         console.log("User data for accepted friends:", userDataArray);


        //         // dispatch({ type: GET_ACCEPTED_REQUEST_DATA_SUCCESS, payload: response.data });
        //         dispatch({
        //             type: GET_SENTREQUEST_DATA_SUCCESS, payload: {
        //                 data: response.data,
        //                 // sentUsersdata: userDataArray  //Pending--v2
        //             }
        //         });
        //     } catch (error) {
        //         console.error('Error fetching accepted request data:', error);
        //         dispatch({ type: GET_SENTREQUEST_DATA_FAILURE, payload: error.message });
        //     }


    }
}


export const getSentrequestDataSuccess = (response) => ({
    type: GET_SENTREQUEST_DATA_SUCCESS,
    payload: response

})
export const getSentrequestDataFailure = (error) => ({
    type: GET_SENTREQUEST_DATA_FAILURE,
    payload: error
})

export const logoutuser = () => {
    console.log("Logout from Redux...")



    // const socket = useSocket();


    // const router = useRouter();
    return async (dispatch) => {

        dispatch({
            type: LOGOUT_USER
        });
        // Get the authentication token from cookies

        try {
            // Clear cookies
            deleteCookie('authtoken', { path: '/' });
            deleteCookie('email', { path: '/' });
            deleteCookie('jwtToken', { path: '/' });
            deleteCookie('userName', { path: '/' });
            deleteCookie('data', { path: '/' });
            deleteCookie('userid', { path: '/' });
            deleteCookie('fcmToken', { path: '/' });
            localStorage.clear(); // Clear local storage

        } catch (error) {
            console.error('Error logging out:', error);
        }

        // router.push("/")
    }

}


export const getblockuserdata = () => {
    return async (dispatch) => {
        dispatch({ type: GET_BLOCK_USERDATA });

        const axios = require('axios');
        const token = getCookie("authtoken")

        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `${process.env.NEXT_PUBLIC_API_URL}/v1/user/friend/get-block-list`,
            headers: {
                'Authorization': `Bearer ${token}`
            }
        };

        axios.request(config)
            .then((response) => {

                dispatch({ type: GET_BLOCK_USERDATA_SUCCESS, payload: response.data })
            })
            .catch((error) => {
                console.log(error);
            });


    }
}

export const getblockuserdatasuccess = (response) => (
    {
        type: GET_BLOCK_USERDATA_SUCCESS,
        payload: response
    }
)

export const getblockuserdatafailure = (error) => (
    {
        type: GET_BLOCK_USERDATA_FAILURE,
        payload: error
    }
)


export const FetchUserDataById = async (userId) => {

    try {
        const token = getCookie("authtoken")

        if (!token) {
            throw new Error('Token not found');
        }

        const myHeaders = new Headers();
        myHeaders.append('Authorization', `Bearer ${token}`);

        const requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow',
        };

        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/v1/user/user/${userId}`, requestOptions);

        if (response.ok) {
            const result = await response.json();
            return result.data;
        } else if (response.status === 401) {
            // Handle unauthorized access (e.g., redirect to login page or refresh token)
            throw new Error('Unauthorized');
        } else {
            console.error('API request failed:', response.statusText);
            throw new Error('API request failed');
        }
    } catch (error) {
        console.error('Error fetching user data:', error.message);
        throw error;
    }

}

export const Sentblockrequest = (requestData, OtherUserId) => {

    return async (dispatch) => {
        dispatch({ type: SENT_BLOCK_REQUEST });


        const axios = require('axios');

        const token = getCookie("authtoken")
        let data = JSON.stringify({
            "user": OtherUserId,
            "request": requestData,
            "status": "blocked"


        });

        let config = {
            method: 'PUT',
            maxBodyLength: Infinity,
            url: `${process.env.NEXT_PUBLIC_API_URL}/v1/user/friend/respond-friend-req`,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            data: data
        };

        axios.request(config)
            .then((response) => {

                dispatch({ type: SENT_BLOCK_REQUEST_SUCCESS, payload: response.data })
                // dispatch({type : GET_REQUEST })
            })
            .catch((error) => {
                console.log(error);
            });

    }

}

export const Sentblockrequestsuccess = (response) => (
    {
        type: SENT_BLOCK_REQUEST_SUCCESS,
        payload: response
    }
)

export const Sentblockrequestfailure = (error) => (
    {
        type: SENT_BLOCK_REQUEST_FAILURE,
        payload: error
    }
)


export const Cancelfriendrequest = (requestData, curUser) => {
    return async (dispatch) => {
        dispatch({ type: CANCEL_FRIEND_REQUEST })

        const axios = require('axios');
        const currentuserId = getCookie("userid")
        const token = getCookie("authtoken")
        let data = JSON.stringify({
            "user": curUser,
            "request": requestData,
            "status": "removed"


        });

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: `${process.env.NEXT_PUBLIC_API_URL}/v1/user/friend/respond-friend-req`,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            data: data
        };

        axios.request(config)
            .then((response) => {

                dispatch({ type: CANCEL_FRIEND_REQUEST_SUCCESS, payload: response.data })
            })
            .catch((error) => {
                console.log(error);
            });

    }

}

export const Cancelfriendrequestsuccess = (response) => (
    {
        type: CANCEL_FRIEND_REQUEST_SUCCESS,
        payload: response
    }
)

export const Cancelfriendrequestfailure = (error) => (
    {
        type: CANCEL_FRIEND_REQUEST_FAILURE,
        payload: error
    }
)


export const Updateprofileimage = (requestdata, seconddata) => {
    // console.log("🚀 ~ Updateprofileimage ~ seconddata:", seconddata)
    // console.log("🚀 ~ Updateprofileimage ~ requestdata:", requestdata)

    return async (dispatch) => {
        dispatch({ type: UPDATE_PROFILE_IMAGE })

        try {
            const authToken = getCookie("authtoken");
            // Assuming requestdata is the image data you want to send in the request
            const data = {
                "key": requestdata.key,
                "contentType": requestdata.contentType,
                "isProfilePic": true,
                "profileType": "profileImage"
            }

            // Construct the fetch options
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${authToken}`
                },
                body: JSON.stringify(data)
            };

            // Make the fetch request
            fetch(`${process.env.NEXT_PUBLIC_API_URL}/v1/s3/presignedurl/`, options)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {
                    // Handle the response data here (e.g., update UI, etc.)
                    console.log('Response from server:', data);
                    const alldata = data.data.url
                    console.log("🚀 ~ return ~ alldata:", alldata)

                    fetch(seconddata.blob)
                        .then(response => response.blob())
                        .then(blobData => {

                            console.log("🚀 ~ blobData:", blobData)


                            const axios = require('axios');
                            let config = {
                                method: 'put',
                                maxBodyLength: Infinity,
                                url: data.data.url,
                                headers: {
                                    'Content-Type': 'image/jpeg',
                                    'x-amz-acl': 'public-read',
                                },
                                data: blobData
                            };

                            axios.request(config)
                                .then((response) => {

                                    dispatch({ type: UPDATE_PROFILE_IMAGE_SUCCESS })
                                    dispatch(fetchMyProfileData())
                                })
                                .catch((error) => {
                                    console.log(error);
                                });
                        })
                })
            console.log("🚀 ~ return ~ data:", data)
                .catch(error => {
                    console.error('There was a problem with your fetch operation:', error);
                });
            // })
            // console.log("🚀 ~ blobData:", blobData)



        } catch (error) {
            // Handle any errors that occurred outside of the fetch
            console.error('Error:', error);
        }
    }

}

export const Updateprofileimagesuccess = (response) => (
    {
        type: UPDATE_PROFILE_IMAGE_SUCCESS,
        payload: response
    }
)

export const Updateprofileimagefailure = (error) => (
    {
        type: UPDATE_PROFILE_IMAGE_FAILURE,
        payload: error
    }
)

export const Getcancelrequestdata = () => {

    return async (dispatch) => {
        dispatch({ type: GET_CANCELREQUEST_DATA })

        const axios = require('axios');
        const authToken = getCookie("authtoken");

        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `${process.env.NEXT_PUBLIC_API_URL}/v1/user/friend/get-rejected-frds`,
            headers: {
                'Authorization': `Bearer ${authToken}`
            }
        };

        axios.request(config)
            .then((response) => {
                dispatch({ type: GET_CANCELREQUEST_DATA_SUCCESS, payload: response.data })

                console.log("🚀 ~ .then ~ response:", response.data)
            })

            .catch((error) => {
                console.log(error);
            });

    }
}

export const Getcancelrequestdatasuccess = (response) => (
    {
        type: GET_CANCELREQUEST_DATA_SUCCESS,
        payload: response
    }
)

export const Getcancelrequestdatafailure = (error) => (
    {
        type: GET_CANCELREQUEST_DATA_FAILURE,
        payload: error
    }
)

export const Deleteimage = (imagedata) => {
    console.log("🚀 ~ Deleteimage ~ imagedata:", imagedata)

    return async (dispatch) => {
        dispatch({ type: DELETE_IMAGE })

        const axios = require('axios');
        const currentuserId = getCookie("userid")
        let data = JSON.stringify({
            "profileImageUrl": imagedata.url,
            "name": imagedata.name
        });

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: `${process.env.NEXT_PUBLIC_API_URL}/v1/user/user/delete-profile-image/${currentuserId}`,
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios.request(config)
            .then((response) => {

                dispatch({ type: DELETE_IMAGE_SUCCESS })
                dispatch(fetchMyProfileData())
            })
            .catch((error) => {
                console.log(error);
            });



    }
}

export const Deleteimagesuccess = (response) => (
    {
        type: DELETE_IMAGE_SUCCESS,
        payload: response
    }
)

export const Deleteimagefailure = (error) => (
    {
        type: DELETE_IMAGE_FAILURE,
        payload: error
    }
)

export const Updateprofileimageprocess = () => (
    {
        type: UPDATE_PROFILE_IMAGE_PROCESS,
    }
)


export const Postrecentuserprofile = (visitedUserId) => {


    return async (dispatch) => {
        dispatch({ type: POST_RECENT_USERPROFILE })

        const axios = require('axios');
        const authToken = getCookie("authtoken");


        let data = JSON.stringify({
            "viewerId": visitedUserId
        });

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: `${process.env.NEXT_PUBLIC_API_URL}/v1/user/profile-viewer/create-profile-viewer`,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${authToken}`
            },
            data: data
        };

        axios.request(config)
            .then((response) => {

                dispatch({ type: POST_RECENT_USERPROFILE_SUCCESS })
            })
            .catch((error) => {
                console.log(error);
                dispatch({ type: POST_RECENT_USERPROFILE_SUCCESS, payload: error });
            });


    }

}

export const Postrecentuserprofilesuccess = () => (
    {
        type: POST_RECENT_USERPROFILE_SUCCESS,
    }
)

export const Postrecentuserprofilefailure = (error) => (
    {
        type: POST_RECENT_USERPROFILE_FAILURE,
        payload: error
    }
)

export const GetrecentuserprofileData = () => {
    return async (dispatch) => {
        dispatch({ type: GET_RECENT_USERPROFILE_DATA })

        const axios = require('axios');
        const authToken = getCookie("authtoken");
        const currentUserId = getCookie("userid")

        let config = {
            method: 'GET',
            maxBodyLength: Infinity,
            url: `${process.env.NEXT_PUBLIC_API_URL}/v1/user/profile-viewer/get-profile-viewer/${currentUserId}`,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${authToken}`
            },
        };

        axios.request(config)
            .then((response) => {

                dispatch({ type: GET_RECENT_USERPROFILE_DATA_SUCCESS, payload: response.data.data })
            })
            .catch((error) => {
                console.log(error);
                dispatch({ type: GET_RECENT_USERPROFILE_DATA_FAILURE, payload: error });
            });
    }

}

export const GetrecentuserprofiledataSuccess = (response) => (
    {
        type: GET_RECENT_USERPROFILE_DATA_SUCCESS,
        payload: response
    }
)

export const GetrecentuserprofiledataFailure = (error) => (
    {
        type: GET_RECENT_USERPROFILE_DATA_FAILURE,
        payload: error
    }
)

export const Updateaddressdata = (addressDataId) => {
    return async (dispatch) => {
        dispatch({ type: UPDATE_ADDRESS_DATA })

    }

}

export const Updateaddressdatasuccess = (response) => ({
    type: UPDATE_ADDRESS_DATA_SUCCESS,
    payload: response
})

export const Updateaddressdatafailure = (response) => ({
    type: UPDATE_ADDRESS_DATA_FAILURE,
    payload: response
})

export const FetchGriduserdata = (currentPage) => {
    return async (dispatch) => {
        dispatch({ type: FETCH_GRID_USER_DATA_REQUEST })

        try {
            const axios = require('axios');
            const token = getCookie("authtoken")

            let config = {
                method: 'get',
                maxBodyLength: Infinity,
                url: `${process.env.NEXT_PUBLIC_API_URL}/v1/user/user/paginated?page=${currentPage}&limit=6`,
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            };

            axios.request(config)
                .then((response) => {
                    const data = response.data
                    dispatch({
                        type: FETCH_GRID_USER_DATA_REQUEST_SUCCESS,
                        payload: {
                            userData: data.data.results,
                            totalPages: data.data.totalPages,
                            currentPage: data.data.page,
                            pagesdata: data.data
                        }
                    })
                })
                .catch((error) => {
                    console.log(error);
                });


        } catch (error) {
            console.error('Error fetching data:', error);
        }

    }
}



export const Getlikeduserdata = () => {
    return async (dispatch) => {
        dispatch({ type: LIKED_USERS_PROFILE_DATA })
        const axios = require('axios');
        const token = getCookie("authtoken")
        const userId = getCookie("userid")
        let data = '';

        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            // url: `${process.env.NEXT_PUBLIC_API_URL}/v1/user/like/get-like/${userId}`,
            url: `${process.env.NEXT_PUBLIC_API_URL}/v1/user/like/getlike/${userId}?limit=50`,
            headers: {
                'Authorization': `Bearer ${token}`
            },
            data: data
        };

        axios.request(config)
            .then((response) => {

                dispatch({ type: LIKED_USERS_PROFILE_DATA_SUCCESS, payload: response.data.data })
            })
            .catch((error) => {
                console.log(error);
            });

    }
}

//For Story Upload 

export const Uploadmystory = (requestdata, seconddata, theblob, Caption) => {

    return async (dispatch) => {
        dispatch({ type: UPLOAD_MY_STORY })

        try {


            const authToken = getCookie("authtoken");
            // Assuming requestdata is the image data you want to send in the request
            const data = {
                "key": requestdata.imagesdata.key,
                "contentType": requestdata.imagesdata.contentType,
                "isProfilePic": false,
                // "caption": Caption ? Caption : "",
                "caption": Caption,
                "profileType": "statusImage"
            }

            const data2 = {
                "key": requestdata.imagesdata.key,
                "contentType": requestdata.imagesdata.contentType,
                "isProfilePic": false,
                // "caption": Caption ? Caption : "",
                "profileType": "statusImage"
            }

            // Construct the fetch options
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${authToken}`
                },
                body: JSON.stringify(Caption ? data : data2)
            };

            // Make the fetch request
            fetch(`${process.env.NEXT_PUBLIC_API_URL}/v1/s3/presignedurl/`, options)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {
                    // Handle the response data here (e.g., update UI, etc.)
                    console.log('Response from server:', data);

                    fetch(seconddata)
                        .then(response => response.blob())
                        .then(blobData => {

                            console.log("🚀 ~ blobData:", blobData)


                            const axios = require('axios');
                            let config = {
                                method: 'put',
                                maxBodyLength: Infinity,
                                url: data.data.url,
                                headers: {
                                    'Content-Type': 'image/jpeg',
                                    'x-amz-acl': 'public-read',
                                },
                                data: blobData
                            };

                            axios.request(config)
                                .then((response) => {

                                    dispatch({ type: UPLOAD_MY_STORY_SUCCESS })
                                    // dispatch({ type: UPLOAD_MY_STORY_MODAL })
                                    dispatch(Getallstatus())
                                    dispatch(fetchMyProfileData())
                                })
                                .catch((error) => {
                                    console.log(error);
                                });
                        })
                })

                .catch(error => {
                    console.error('There was a problem with your fetch operation:', error);
                });
            // })
            // console.log("🚀 ~ blobData:", blobData)



        } catch (error) {
            // Handle any errors that occurred outside of the fetch
            console.error('Error:', error);
        }
    }

}

export const Uploadmystorysuccess = (response) => (
    {
        type: UPLOAD_MY_STORY_SUCCESS,
        payload: response
    }
)


export const Uploadmystoryfailure = (error) => (
    {
        type: UPLOAD_MY_STORY_FAILURE,
        payload: error
    }
)

export const Uploadmystorymodal = () => ({
    type: UPLOAD_MY_STORY_MODAL
})

export const Getallstatus = () => {
    return async (dispatch) => {
        dispatch({ type: GET_ALL_STATUS })
        const axios = require('axios');
        const token = getCookie("authtoken");
        const currentUser = getCookie("userid")

        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `${process.env.NEXT_PUBLIC_API_URL}/v1/user/status/get-all-status`,
            headers: {
                'Authorization': `Bearer ${token}`
            }
        };

        axios.request(config)
            .then((response) => {

                const mystory = response.data.data.filter((item) => item.userId.id == currentUser)
                const allstatus = response.data.data.filter((item) => item.userId.id != currentUser)

                dispatch({ type: GET_ALL_STATUS_SUCCESS, payload: { mystory, allstatus } })
            })
            .catch((error) => {
                console.log(error);
            });

    }
}


export const Getallstatusfailure = (error) => ({
    type: GET_ALL_STATUS_FAILURE,
    payload: error
})

export const DeleteMystatus = (StatusID) => {
    return async (dispatch) => {
        const axios = require('axios');
        const token = getCookie("authtoken")
        let data = '';

        let config = {
            method: 'delete',
            maxBodyLength: Infinity,
            url: `${process.env.NEXT_PUBLIC_API_URL}/v1/user/status/delete-status/${StatusID}`,
            headers: {
                'Authorization': `Bearer ${token}`
            },
            data: data
        };

        axios.request(config)
            .then((response) => {

                dispatch(Getallstatus())
                dispatch({ type: DELETE_MY_STATUS_SUCCESS })
                dispatch({ type: DELETE_STATUS_MODAL })

            })
            .catch((error) => {
                console.log(error);
            });

    }
}
// GET_ALL_STATUS_SUCCESS


//Get match score 

export const GetMatchScore = (MatchID) => {
    console.log("🚀 ~ GetMatchScore ~ MatchID:", MatchID)
    return async (dispatch) => {

        dispatch({
            type: GET_MATCH_SCORE
        })

        const axios = require('axios');
        const token = getCookie("authtoken")

        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `https://happymilan.tech/api/v1/user/user/get-match-user/${MatchID}`,
            headers: {
                'Authorization': `Bearer ${token}`
            }
        };

        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
                dispatch({
                    type: GET_MATCH_SCORE_SUCCESS,
                    payload: response?.data?.data[0]
                })
            })
            .catch((error) => {
                console.log(error);
                dispatch({
                    type: GET_MATCH_SCORE_FAILURE
                })
            });

    }
}