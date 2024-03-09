
import { deleteCookie, getCookie } from 'cookies-next';
import {
    SEND_REQUEST, REQUEST_SUCCESS, REQUEST_FAILURE,
    ACCEPT_REQUEST_SUCCESS, ACCEPT_REQUEST_FAILURE, REJECT_REQUEST,
    REJECT_REQUEST_SUCCESS, ACCEPT_REQUEST, REJECT_REQUEST_FAILURE, GET_EDUCATION_DATA_SUCCESS,
    GET_EDUCATION_DATA_FAILURE, GET_EDUCATION_DATA, GET_ADDRESS_DATA_SUCCESS, GET_ADDRESS_DATA_FAILURE,
    GET_ADDRESS_DATA, GET_PROFESSIONAL_DATA_SUCCESS, GET_PROFESSIONAL_DATA_FAILURE, GET_PROFESSIONAL_DATA,
    GET_PARTNERPREFERENCE_DATA, GET_PARTNERPREFERENCE_DATA_FAILURE, GET_PARTNERPREFERENCE_DATA_SUCCESS,
    UPDATE_EDUCATION_DATA, UPDATE_EDUCATION_DATA_SUCCESS, UPDATE_EDUCATION_DATA_FAILURE, GET_ACCEPTED_REQUEST_DATA, GET_ACCEPTED_REQUEST_DATA_SUCCESS, GET_ACCEPTED_REQUEST_DATA_FAILURE, GET_SENTREQUEST_DATA_SUCCESS, GET_SENTREQUEST_DATA_FAILURE, GET_SENTREQUEST_DATA, LOGOUT_USER, LOGOUT_USER_SUCCESS, GET_BLOCK_USERDATA, GET_BLOCK_USERDATA_SUCCESS, GET_BLOCK_USERDATA_FAILURE, SENT_BLOCK_REQUEST_SUCCESS, SENT_BLOCK_REQUEST_FAILURE, SENT_BLOCK_REQUEST, CANCEL_FRIEND_REQUEST_FAILURE, CANCEL_FRIEND_REQUEST_SUCCESS, CANCEL_FRIEND_REQUEST
} from '../type';
import { GET_REQUEST, GET_REQUEST_SUCCESS, GET_REQUEST_FAILURE } from '../type';
import { useRouter } from 'next/router';

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
            url: 'https://happymilan.tech/api/v1/user/friend/create-friend',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            data: data
        };

        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));

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
            url: 'https://happymilan.tech/api/v1/user/friend/get-frd-requests',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        };

        const response = await axios.request(config);

        response.data.data.forEach(async (element) => {
            const url = `https://happymilan.tech/api/v1/user/user/${element.id}`;

            try {
                const fetchResponse = await fetch(url);
                if (!fetchResponse.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await fetchResponse.json();
                console.log(JSON.stringify(data));
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

        console.log(requestData)
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
            url: 'https://happymilan.tech/api/v1/user/friend/respond-friend-req',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            data: data
        };

        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
                dispatch({ type: ACCEPT_REQUEST_SUCCESS, payload: response.data })
                // dispatch({type : GET_REQUEST })
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
            url: 'https://happymilan.tech/api/v1/user/friend/respond-friend-req',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            data: data
        };

        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
                dispatch({ type: REJECT_REQUEST_SUCCESS, payload: response.data })
                // dispatch({type : GET_REQUEST })
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
            url: `https://happymilan.tech/api/v1/user/userEducation/${requestData}`,
            headers: {
                'Authorization': `Bearer ${token}`
            }
        };

        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
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
            url: `https://happymilan.tech/api/v1/user/userEducation/${userid}`,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            data: data
        };

        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
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


export const getAddressData = (requestData) => {
    return async (dispatch) => {
        dispatch({ type: GET_ADDRESS_DATA });

        const axios = require('axios');
        const token = getCookie("authtoken")

        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `https://happymilan.tech/api/v1/user/userEducation/${requestData}`,
            headers: {
                'Authorization': `Bearer ${token}`
            }
        };

        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
                dispatch({ type: GET_ADDRESS_DATA_SUCCESS, payload: response.data })
            })
            .catch((error) => {
                console.log(error);
            });

    }
}

export const getAddressSuccess = (response) => ({
    type: GET_ADDRESS_DATA_SUCCESS,
    payload: response
})

export const getAddressFailure = (error) => ({
    type: GET_ADDRESS_DATA_FAILURE,
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
            url: `${process.env.NEXT_PUBLIC_API_URL}/api/v1/user/userProfessionalDetail/getbyid/${requestData}`,
            headers: {
                'Authorization': `Bearer ${token}`
            }
        };

        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
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
            url: `${process.env.NEXT_PUBLIC_API_URL}/api/v1/user/partner/${requestData}`,
            headers: {
                'Authorization': `Bearer ${token}`
            }
        };

        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
                dispatch({ type: GET_PARTNERPREFERENCE_DATA_SUCCESS, payload: response.data })
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

            const config = {
                method: 'get',
                url: 'https://happymilan.tech/api/v1/user/friend/get-frds',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            };

            const response = await axios(config);
            const currentUser = getCookie("userid")

            const friendRequests = response.data.data.map((res) => currentUser == res.friend.id ? res.user : res.friend);
            const friendIds = friendRequests.reduce((ids, friendArray) => {
                // Ensure friendArray is an object with id property before extracting id
                if (friendArray && friendArray.id) {
                    ids.push(friendArray.id);
                } else {
                    console.error('Friend array is not in the expected format:', friendArray);
                }
                return ids;
            }, []);


            console.log("<== friendRequests ==>",friendRequests)
            console.log("<== friendIds ==>",friendIds)


            // Define the batch size for fetching user data
            const batchSize = 50;
            const numBatches = Math.ceil(friendIds.length / batchSize);

            const userDataArray = [];

            // Fetch user data in batches
            for (let i = 0; i < numBatches; i++) {
                const start = i * batchSize;
                const end = Math.min((i + 1) * batchSize, friendIds.length);
                const batchIds = friendIds.slice(start, end);

                const batchUserData = await fetchUserDataBatch(batchIds);
                userDataArray.push(...batchUserData);
            }

            console.log("User data for accepted friends:", userDataArray);


            // dispatch({ type: GET_ACCEPTED_REQUEST_DATA_SUCCESS, payload: response.data });
            dispatch({
                type: GET_ACCEPTED_REQUEST_DATA_SUCCESS, payload: {
                    data: response.data,
                    acceptedUsers: userDataArray
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

        // New 

        try {
            const axios = require('axios');
            const token = getCookie("authtoken");

            const config = {
                method: 'get',
                url: 'https://happymilan.tech/api/v1/user/friend/get-request-sent',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            };

            const response = await axios(config);

            const friendRequests = response.data.data.map((res) => res.friend);
            const friendIds = friendRequests.reduce((ids, friendArray) => {
                // Ensure friendArray is an object with id property before extracting id
                if (friendArray && friendArray.id) {
                    ids.push(friendArray.id);
                } else {
                    console.error('Friend array is not in the expected format:', friendArray);
                }
                return ids;
            }, []);


            // Define the batch size for fetching user data
            const batchSize = 50;
            const numBatches = Math.ceil(friendIds.length / batchSize);

            const userDataArray = [];

            // Fetch user data in batches
            for (let i = 0; i < numBatches; i++) {
                const start = i * batchSize;
                const end = Math.min((i + 1) * batchSize, friendIds.length);
                const batchIds = friendIds.slice(start, end);

                const batchUserData = await fetchUserDataBatch(batchIds);
                userDataArray.push(...batchUserData);
            }

            console.log("User data for accepted friends:", userDataArray);


            // dispatch({ type: GET_ACCEPTED_REQUEST_DATA_SUCCESS, payload: response.data });
            dispatch({
                type: GET_SENTREQUEST_DATA_SUCCESS, payload: {
                    data: response.data,
                    sentUsersdata: userDataArray
                }
            });
        } catch (error) {
            console.error('Error fetching accepted request data:', error);
            dispatch({ type: GET_SENTREQUEST_DATA_FAILURE, payload: error.message });
        }


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
    return async (dispatch) => {

        dispatch({
            type: LOGOUT_USER
        });

        try {
            // Clear cookies
            deleteCookie('authtoken', { path: '/' });
            deleteCookie('email', { path: '/' });
            deleteCookie('jwtToken', { path: '/' });
            deleteCookie('userName', { path: '/' });
            deleteCookie('data', { path: '/' });
            deleteCookie('userid', { path: '/' });
            localStorage.clear(); // Clear local storage

        } catch (error) {
            console.error('Error logging out:', error);
        }
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
            url: 'https://happymilan.tech/api/v1/user/friend/get-block-list',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        };

        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
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
        const token = localStorage.getItem('refoken');

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

        const response = await fetch(`https://happymilan.tech/api/v1/user/user/${userId}`, requestOptions);

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

export const Sentblockrequest = (requestData,OtherUserId) => {

    return async (dispatch) => {
        dispatch({ type: SENT_BLOCK_REQUEST });

        
        const axios = require('axios');
        const currentuserId = getCookie("userid")
        const token = getCookie("authtoken")
        let data = JSON.stringify({
            "user": OtherUserId,
            "request": requestData,
            "status": "blocked"


        });

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'https://happymilan.tech/api/v1/user/friend/respond-friend-req',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            data: data
        };

        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
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


export const Cancelfriendrequest = (requestData,curUser) =>{
    return async (dispatch) =>{
        dispatch ({type : CANCEL_FRIEND_REQUEST})

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
            url: 'https://happymilan.tech/api/v1/user/friend/respond-friend-req',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            data: data
        };

        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
                dispatch({ type: CANCEL_FRIEND_REQUEST_SUCCESS, payload: response.data })
             })
            .catch((error) => {
                console.log(error);
            });

    }

}

export const Cancelfriendrequestsuccess = (response) =>(
    {
    type : CANCEL_FRIEND_REQUEST_SUCCESS,
    payload : response
    }
 )

export const Cancelfriendrequestfailure = (error) =>(
    {
        type : CANCEL_FRIEND_REQUEST_FAILURE,
        payload : error
    }
)