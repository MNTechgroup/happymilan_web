import { getCookie } from "cookies-next";
import { GET_PRIVACY_QUESTIONS, GET_PRIVACY_QUESTIONS_FAILURE, GET_PRIVACY_QUESTIONS_SUCCESS, HIDE_MY_PROFILE, HIDE_MY_PROFILE_CLOSEMODAL, HIDE_MY_PROFILE_FAILURE, HIDE_MY_PROFILE_SUCCESS, UPDATE_DISPLAY_NAME, UPDATE_DISPLAY_NAME_FAILURE, UPDATE_DISPLAY_NAME_SUCCESS, UPDATE_DISPLAY_STATUS, UPDATE_PRIVACY_QUESTIONS, UPDATE_PRIVACY_QUESTIONS_FAILURE, UPDATE_PRIVACY_QUESTIONS_SUCCESS } from "../type"
import { logoutuser } from "./UsersAction";

export const Hidemyprofile = (credetials) => {
    return (dispatch) => {


        dispatch({ type: HIDE_MY_PROFILE })

        const axios = require('axios');
        const token = getCookie("authtoken")
        const userID = getCookie("userid")

        let config = {
            method: 'delete',
            maxBodyLength: Infinity,
            url: `https://happymilan.tech/api/v1/user/user`,
            headers: {
                'Authorization': `Bearer ${token}`
            }
        };

        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
                dispatch({ type: HIDE_MY_PROFILE_SUCCESS, payload: response.data })
                dispatch(logoutuser())
            })
            .catch((error) => {
                dispatch({ type: HIDE_MY_PROFILE_FAILURE, payload: error })
                console.log(error);
            });



        // const Credentials = {
        //     "profileHideAndDelete": {
        //         "isProfileDelete": credetials?.isProfileDelete,
        //         "reasonForProfileDelete": credetials?.reasonForProfileDelete
        //     }
        // }

        // let config = {
        //     method: 'put',
        //     maxBodyLength: Infinity,
        //     url: `${process.env.NEXT_PUBLIC_API_URL}/v1/user/auth/update-user`,
        //     headers: {
        //         'Content-Type': 'application/json',
        //         'Authorization': `Bearer ${token}`
        //     },
        //     data: Credentials
        // };

        // axios.request(config)
        //     .then((response) => {
        //         console.log(JSON.stringify(response.data));
        //         dispatch({ type: HIDE_MY_PROFILE_SUCCESS, payload: response.data })
        //         dispatch(logoutuser())
        //     })
        //     .catch((error) => {
        //         dispatch({ type: HIDE_MY_PROFILE_FAILURE, payload: error })
        //         console.log(error);
        //     });


    }
}

export const Hidemyprofilesuccess = (response) => (
    {
        type: HIDE_MY_PROFILE_SUCCESS,
        payload: response
    }
)

export const Hidemyprofilefailure = (error) => (
    {
        type: HIDE_MY_PROFILE_FAILURE,
        payload: error
    }
)

export const Hidemyprofileclosemodel = () => ({
    type: HIDE_MY_PROFILE_CLOSEMODAL
})


export const Getprivacyquestions = () => {
    return (dispatch) => {
        dispatch({ type: GET_PRIVACY_QUESTIONS })
        const axios = require('axios');
        const token = getCookie("authtoken")

        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `${process.env.NEXT_PUBLIC_API_URL}/v1/user/privacy/get-privacy-for-current-user`,
            headers: {
                'Authorization': `Bearer ${token}`
            }
        };

        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
                dispatch({ type: GET_PRIVACY_QUESTIONS_SUCCESS, payload: response.data.data })
            })
            .catch((error) => {
                console.log(error);
            });

    }
}

export const Getprivacyquestionssuccess = (response) => ({
    type: GET_PRIVACY_QUESTIONS_SUCCESS,
    payload: response
})

export const Getprivacyquestionsfailure = (error) => ({
    type: GET_PRIVACY_QUESTIONS_FAILURE,
    payload: error
})

export const Updateprivacyquestions = () => {
    return (dispatch) => {
        dispatch({ type: UPDATE_PRIVACY_QUESTIONS })


    }
}

export const Updateprivacyquestionssuccess = (response) => ({
    type: UPDATE_PRIVACY_QUESTIONS_SUCCESS,
    payload: response
})

export const Updateprivacyquestionsfailure = (error) => ({
    type: UPDATE_PRIVACY_QUESTIONS_FAILURE,
    payload: error
})


export const UpdateDisplayName = (SelectedDisplayName) => {
    console.log("🚀 ~ UpdateDisplayName ~ SelectedDisplayName:", SelectedDisplayName)
    return (dispatch) => {
        dispatch({
            type: UPDATE_DISPLAY_NAME
        })

        const axios = require('axios');
        const Token = getCookie("authtoken")
        let data = JSON.stringify({
            "name": SelectedDisplayName
        });

        let config = {
            method: 'put',
            maxBodyLength: Infinity,
            url: `https://happymilan.tech/api/v1/user/auth/update-user/`,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${Token}`
            },
            data: data
        };

        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
                dispatch({
                    type: UPDATE_DISPLAY_NAME_SUCCESS,
                    payload: response.data
                })

                setTimeout(() => {
                    dispatch({ type: UPDATE_DISPLAY_STATUS })
                }, 500);
            })
            .catch((error) => {
                console.log(error);
                dispatch({
                    type: UPDATE_DISPLAY_NAME_FAILURE,
                    payload: error
                })
            });

    }
}