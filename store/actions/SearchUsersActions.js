import { getCookie } from 'cookies-next';
import { GET_SEARCHUSERS_DATA, GET_SEARCHUSERS_DATA_FAILURE, GET_SEARCHUSERS_DATA_SUCCESS } from '../type';
import { data } from 'autoprefixer';

export const updateSearchData = (data) => ({
    type: 'UPDATE_SEARCH_DATA',
    payload: data,
});

export const GetSearchUsersData = (searchData) => {

console.log("🚀 ~ GetSearchUsersData ~ searchData:", searchData)

    
    return async (dispatch) => {
        dispatch({type : GET_SEARCHUSERS_DATA})

        const axios = require('axios');
        const authToken = getCookie("authtoken")
        let data = {
            "minAge": 0,
            "maxAge": 0,
            "maritalStatus": [
                ...searchData.maritalStatus
                // 'single'
            ],
            "religion": [
                ...searchData.religion
            ],
            "community": [
                ...searchData.community
            ],
            "motherTongue": [
                ...searchData.motherTongue
            ],
            "currentCountry": []
        };



        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: `${process.env.NEXT_PUBLIC_API_URL}/v1/user/search/search-user`,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${authToken}`
            },
            data: data
        };

        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
                dispatch({type : GET_SEARCHUSERS_DATA_SUCCESS , payload : response.data.data })
            })
            .catch((error) => {
                console.log(error);
            });


    }

}

export const GetSearchUsersDataSuccess = (response) => (
    {
        type : GET_SEARCHUSERS_DATA_SUCCESS,
        payload : response
        
    }
)

export const GetSearchUsersDataFailure = (error) => (
    {
        type : GET_SEARCHUSERS_DATA_FAILURE,
        payload : error
        
    }
)

