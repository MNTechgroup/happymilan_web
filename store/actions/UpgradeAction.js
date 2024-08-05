import { getCookie } from "cookies-next";
import { GET_UPGRADE_PLANS, GET_UPGRADE_PLANS_BY_ID, GET_UPGRADE_PLANS_BY_ID_FAILURE, GET_UPGRADE_PLANS_BY_ID_SUCCESS, GET_UPGRADE_PLANS_FAILURE, GET_UPGRADE_PLANS_SUCCESS } from "../type"

export const GetupgradePlans = (currentPage) => {
    return async (dispatch) => {
        dispatch({ type: GET_UPGRADE_PLANS })

        try {
            const axios = require('axios');
            const token = getCookie("authtoken")

            let config = {
                method: 'get',
                maxBodyLength: Infinity,
                url: `${process.env.NEXT_PUBLIC_API_URL}/v1/user/plan/get-plan`,
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'ngrok-skip-browser-warning': 'true',

                }
            };

            axios.request(config)
                .then((response) => {

                    dispatch({
                        type: GET_UPGRADE_PLANS_SUCCESS,
                        payload: response.data.data, // You can dispatch any relevant data received from the response
                    });

                    // console.log(JSON.stringify(response.data));
                })
                .catch((error) => {
                    dispatch({
                        type: GET_UPGRADE_PLANS_FAILURE,
                        payload: error.message, // You can pass any error message received from the API response
                    });
                });


        } catch (error) {
            // Dispatch failure action if there's an error
            dispatch({
                type: ADD_TO_SHORTLIST_FAILURE,
                payload: error.message, // You can pass any error message received from the API response
            });
        }


    }
}

export const getPlansByID = () => {
    return async (dispatch) => {
        dispatch({ type: GET_UPGRADE_PLANS_BY_ID })

        const axios = require('axios');
        const AuthToken = getCookie("authtoken")

        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `${process.env.NEXT_PUBLIC_API_URL}/v1/user/plan/get-plan/667a53da5f57120e070eeed7`,
            headers: {
                'Authorization': `Bearer ${AuthToken}`
            }
        };

        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
                dispatch({
                    type: GET_UPGRADE_PLANS_BY_ID_SUCCESS,
                    payload: response.data.data
                })
            })
            .catch((error) => {
                console.log(error);
                dispatch({
                    type: GET_UPGRADE_PLANS_BY_ID_FAILURE,
                    payload: error.message
                })
            });

    }
}