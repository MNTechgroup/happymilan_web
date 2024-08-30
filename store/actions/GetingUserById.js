import axios from 'axios';
import { getCookie } from 'cookies-next';

export const FETCH_USER_BY_ID_REQUEST = 'FETCH_USER_BY_ID_REQUEST';
export const FETCH_USER_BY_ID_SUCCESS = 'FETCH_USER_BY_ID_SUCCESS';
export const FETCH_USER_BY_ID_FAILURE = 'FETCH_USER_BY_ID_FAILURE';

export const fetchUserById = (id) => async (dispatch) => {

  dispatch({ type: FETCH_USER_BY_ID_REQUEST });

  const Token = getCookie("authtoken")
  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: `${process.env.NEXT_PUBLIC_API_URL}/v1/user/user/${id}`,
    headers: {
      'Authorization': `Bearer ${Token}`
    }
  };

  axios.request(config)
    .then((response) => {
      dispatch({
        type: FETCH_USER_BY_ID_SUCCESS,
        payload: response?.data?.data[0],
      });

    })
    .catch((error) => {
      dispatch({
        type: FETCH_USER_BY_ID_FAILURE,
        payload: error.message,
      });
    });

};



