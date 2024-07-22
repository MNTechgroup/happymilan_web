// actions/allUsersActions.js
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { getCookie } from "cookies-next";
import { Getlikeduserdata } from './UsersAction';

export const FETCH_ALL_USERS_REQUEST = 'FETCH_ALL_USERS_REQUEST';
export const FETCH_ALL_USERS_SUCCESS = 'FETCH_ALL_USERS_SUCCESS';
export const FETCH_ALL_USERS_FAILURE = 'FETCH_ALL_USERS_FAILURE';


export const ADD_TO_SHORTLIST_REQUEST = 'ADD_TO_SHORTLIST_REQUEST';
export const ADD_TO_SHORTLIST_SUCCESS = 'ADD_TO_SHORTLIST_SUCCESS';
export const ADD_TO_SHORTLIST_FAILURE = 'ADD_TO_SHORTLIST_FAILURE';

export const ADD_NEW_SHORTLIST = 'ADD_NEW_SHORTLIST'
export const MARK_SHORTLISTS_AS_SEEN = 'MARK_SHORTLISTS_AS_SEEN'


export const ADD_TO_SHORTLIST = 'ADD_TO_SHORTLIST';
export const LIKE_USER = 'LIKE_USER';
export const UNLIKE_USER = 'UNLIKE_USER';
export const SEND_REQUEST = 'SEND_REQUEST';
export const REMOVE_REQUEST = 'REMOVE_REQUEST';




export const likeUser = (userId) => ({
  type: LIKE_USER,
  payload: userId,
});

export const CreateLikeUser = (user) => {
 
  return async (dispatch) => {

    const axios = require('axios');
    const token = getCookie("authtoken")
    let data = JSON.stringify({
      "likedUserId": user?.userId,
      "isLike": user?.status
    });

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: `${process.env.NEXT_PUBLIC_API_URL}/v1/user/like/create-like`,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      data: data
    };

    axios.request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        dispatch({ type: LIKE_USER, payload: response.data });


      })
      .catch((error) => {
        console.log(error);
      });


  }

}

export const UnlikeTheUser = (Postdata) => {
  return async (dispatch) => {


    const axios = require('axios');
    const token = getCookie("authtoken")
    let data = JSON.stringify({
      "likedUserId": Postdata.likedUserId,
      "isLike": false
    });

    let config = {
      method: 'put',
      maxBodyLength: Infinity,
      url: `${process.env.NEXT_PUBLIC_API_URL}/v1/user/like/update-like/${Postdata.id}`,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      data: data
    };

    axios.request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        dispatch({ type: LIKE_USER, payload: response.data })
        dispatch(Getlikeduserdata())
      })
      .catch((error) => {
        console.log(error);
      });


  }

}
export const unlikeUser = (userId) => ({
  type: UNLIKE_USER,
  payload: userId,
});

export const sendRequest = (userId) => ({
  type: SEND_REQUEST,
  payload: userId,
});

export const removeRequest = (userId) => ({
  type: REMOVE_REQUEST,
  payload: userId,
});

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}


export const fetchAllUsers = () => async (dispatch) => {
  dispatch({ type: FETCH_ALL_USERS_REQUEST });

  try {
    const token = getCookie("authtoken")
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/v1/user/user/getUserByGender`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const theuser = getCookie('email');
    const filterUsers = response.data.data.filter(user => user.email !== theuser)
    const shuffledata = shuffleArray(filterUsers);
    dispatch({
      type: FETCH_ALL_USERS_SUCCESS,
      payload: shuffledata,
    });
  } catch (error) {
    dispatch({
      type: FETCH_ALL_USERS_FAILURE,
      payload: error.message,
    });
  }
};


//Add Shortlist 

const addNewShortlist = () => ({
  type: ADD_NEW_SHORTLIST,

});


export const addToShortlist = (shortlistId) => async (dispatch) => {

  dispatch({ type: ADD_TO_SHORTLIST_REQUEST });

  try {
    const token = getCookie('authtoken');
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/v1/user/shortlist/create-shortlist`,
      { shortlistId },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }
    );

    // Dispatch success action if the request is successful
    dispatch({
      type: ADD_TO_SHORTLIST_SUCCESS,
      payload: response.data, // You can dispatch any relevant data received from the response
    });

    dispatch(addNewShortlist());

  } catch (error) {
    // Dispatch failure action if there's an error
    dispatch({
      type: ADD_TO_SHORTLIST_FAILURE,
      payload: error.message, // You can pass any error message received from the API response
    });
  }
};

export const RemoveShortlist = createAsyncThunk(
  'shortlist/removeshortlist',
  async (shortlistid, thunkAPI) => {

    const url = `${process.env.NEXT_PUBLIC_API_URL}/v1/user/shortlist/delete-short-list/${shortlistid}`;
    const token = getCookie("authtoken")

    const config = {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json', // Add any other required headers
      },
    };

    fetch(url, config)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        console.log(JSON.stringify(data));
      })
      .catch(error => {
        console.error('Fetch error:', error);
      });

  }
);