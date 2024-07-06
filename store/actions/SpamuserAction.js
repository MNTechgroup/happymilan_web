import { getCookie } from "cookies-next";
import { POST_SPAM_REPORT_USER, POST_SPAM_REPORT_USER_FAILURE, POST_SPAM_REPORT_USER_SUCCESS } from "../type";

export const UpdateSpamUser = (data) => ({
    type: 'UPDATE_SPAM_USER',
    payload: data,
});


export const PostSpamUser = (spamdetails) => {

    console.log("🚀 ~ GetSearchUsersData ~ spamdetails:", spamdetails)

    return async (dispatch) => {
        dispatch({ type: POST_SPAM_REPORT_USER })

        const axios = require('axios');
        const token = getCookie("authtoken")
        const data = {
            "spamUserId": spamdetails?.spamUserId,
            "reason": spamdetails?.reason
        };
    
        if (spamdetails?.remark) {
            data.remark = spamdetails.remark;
        }

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'https://happymilan.tech/api/v1/user/spam/create-spam',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            data: data
        };

        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
                dispatch({ type: POST_SPAM_REPORT_USER_SUCCESS })
            })
            .catch((error) => {
                console.log(error);
                dispatch({ type: POST_SPAM_REPORT_USER_FAILURE })
            });

    }
}