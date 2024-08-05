import axios from 'axios';
import { getCookie } from 'cookies-next';

export const FETCH_USER_BY_ID_REQUEST = 'FETCH_USER_BY_ID_REQUEST';
export const FETCH_USER_BY_ID_SUCCESS = 'FETCH_USER_BY_ID_SUCCESS';
export const FETCH_USER_BY_ID_FAILURE = 'FETCH_USER_BY_ID_FAILURE';

export const fetchUserById = (id) => async (dispatch) => {
console.log("🚀 ~ fetchUserById ~ id:", id)


  
  dispatch({ type: FETCH_USER_BY_ID_REQUEST });

  // try {

  //   // const userid = "659bb6ebcc4b4bb29364a569"
  //   const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/v1/user/user/${id}`);
  //   dispatch({
  //     type: FETCH_USER_BY_ID_SUCCESS,
  //     payload: response.data.data,
  //   });
  //   return response.data.data;
  // } catch (error) {
  //   dispatch({
  //     type: FETCH_USER_BY_ID_FAILURE,
  //     payload: error.message,
  //   });
  // }

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



