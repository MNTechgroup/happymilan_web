import { getCookie } from "cookies-next"
import { GET_STORY_VIEWS_DETAILS, GET_STORY_VIEWS_DETAILS_FAILURE, GET_STORY_VIEWS_DETAILS_SUCCESS, VIEW_STORY_POST, VIEW_STORY_POST_FAILURE, VIEW_STORY_POST_SUCCESS } from "../type"

export const ViewstoryPost = (Viewrdata) => {

    return async (dispatch) => {
        dispatch({ type: VIEW_STORY_POST })
        const currentUser = getCookie("userid")
        const token = getCookie("authtoken")
        const axios = require('axios');

        let data = JSON.stringify({
            "statusId": Viewrdata?.id,
            "viewerId": currentUser
        });

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'https://happymilan.tech/api/v1/user/story-view/create-view',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            data: data
        };

        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
                dispatch({ type: VIEW_STORY_POST_SUCCESS })
            })
            .catch((error) => {
                dispatch({ type: VIEW_STORY_POST_FAILURE })

                console.log(error);
            });



    }
}


export const Getstoryviewsdata = (storyID) => {

    return async (dispatch) => {
        dispatch({ type: GET_STORY_VIEWS_DETAILS })
        const axios = require('axios');
        const token = getCookie("authtoken")

        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `https://happymilan.tech/api/v1/user/story-view/paginated/${storyID}`,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        };

        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
                dispatch({ type: GET_STORY_VIEWS_DETAILS_SUCCESS, payload: response.data.data })
            })
            .catch((error) => {
                console.log(error);
                dispatch({ type: GET_STORY_VIEWS_DETAILS_FAILURE })
            });

    }
}