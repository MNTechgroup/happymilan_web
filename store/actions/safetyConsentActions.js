import { getCookie } from 'cookies-next';
import { FETCH_SAFETY_CONSENT_FAILURE, FETCH_SAFETY_CONSENT_REQUEST, FETCH_SAFETY_CONSENT_SUCCESS, POST_SAFETY_CONSENT_FAILURE, POST_SAFETY_CONSENT_REQUEST, POST_SAFETY_CONSENT_SUCCESS } from '../type';

export const SafetyConsentAction = (ReceiverID) => {
    
    return async (dispatch) => {
        dispatch({ type: FETCH_SAFETY_CONSENT_REQUEST })
        const axios = require('axios');
        // const currentuserId = getCookie("userid")
        const token = getCookie("authtoken")

        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `${process.env.NEXT_PUBLIC_API_URL}/v1/user/message-consent/get-message-consent/${ReceiverID}`,
            headers: {
                'Authorization': `Bearer ${token}`
            }
        };

        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
                dispatch({ type: FETCH_SAFETY_CONSENT_SUCCESS, payload: response.data })
            })
            .catch((error) => {
                console.log(error);
                dispatch({ type: FETCH_SAFETY_CONSENT_FAILURE })
            });


    }
}

export const UpdateMessageConsentStatus = (ReceivedData) => {
   
    return async (dispatch) => {
        dispatch({type : POST_SAFETY_CONSENT_REQUEST})

        const axios = require('axios');
        const token = getCookie("authtoken")
        let data = JSON.stringify(ReceivedData);

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: `${process.env.NEXT_PUBLIC_API_URL}/v1/user/message-consent/create-message-consent`,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            data: data
        };

        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
                dispatch({ type: POST_SAFETY_CONSENT_SUCCESS  , payload : response.data})

            })
            .catch((error) => {
                console.log(error);
                dispatch({ type: POST_SAFETY_CONSENT_FAILURE })

            });

    }
}