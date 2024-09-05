import { createSlice } from '@reduxjs/toolkit';
import { getCookie } from 'cookies-next';
import axios from 'axios';

// Thunk for fetching friends
export const fetchFriends = (View, Pages) => async (dispatch, getState) => {
    dispatch(fetchFriendsRequest());

    try {
        const token = getCookie("authtoken");

        const config = {
            method: 'get',
            url: `${process.env.NEXT_PUBLIC_API_URL}/v1/user/friend/get-request-sentv2?page=${Pages?.currentPage}&limit=10`,
            headers: {
                'Authorization': `Bearer ${token}`
            }
        };

        const response = await axios.request(config);
        const data = response.data;

        dispatch(fetchFriendsSuccess({
            userData: data.data.results,
            totalPages: data.data.totalPages,
            currentPage: data.data.page,
            limit: data.data.limit,
            pagesdata: data.data
        }));
    } catch (error) {
        dispatch(fetchFriendsFailure(error.message));
    }
};

// Slice
const friendsSlice = createSlice({
    name: 'friends',
    initialState: {
        userData: [],
        totalPages: 1,
        currentPage: 1,
        limit: 0,
        pagesdata: '',
        loading: false,
        error: null,
        status: 'idle',
    },
    reducers: {
        incrementPage: (state) => {
            state.currentPage += 1;
        },
        resetFriends: (state) => {
            state.userData = [];
            state.currentPage = 1;
            state.pagesdata = '';
            state.totalPages = 1;
        },
        fetchFriendsRequest: (state) => {
            state.status = 'loading';
            state.loading = true;
        },
        fetchFriendsSuccess: (state, action) => {
            state.status = 'succeeded';
            state.loading = false;
            state.userData = action.payload.userData;  // Append only new data
            state.totalPages = action.payload.totalPages;
            state.currentPage = action.payload.currentPage;
            state.limit = action.payload.limit;
            state.pagesdata = action.payload.pagesdata;
        },
        fetchFriendsFailure: (state, action) => {
            state.status = 'failed';
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const { incrementPage, resetFriends, fetchFriendsRequest, fetchFriendsSuccess, fetchFriendsFailure } = friendsSlice.actions;

export default friendsSlice.reducer;
