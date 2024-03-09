import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { STATUSES } from "./MyProfile";
import { getCookie } from "cookies-next";
import { RemoveShortlist } from "../actions/GetingAlluser";


const ShortlistData = createSlice({
    name: "shortlist",
    initialState: {
        status: STATUSES.IDLE,
        data: null,
        shortlistUserdata: [],
        error: ""
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchshortlistdata.pending, (state, action) => {
                state.status = STATUSES.LOADING
            })
            .addCase(fetchshortlistdata.fulfilled, (state, action) => {
                state.data = action.payload.filterUsers;
                state.shortlistUserdata = action.payload.userDataArray
                state.status = STATUSES.IDLE;
            })
            .addCase(fetchshortlistdata.rejected, (state, action) => {
                state.status = STATUSES.ERROR;
            })
            .addCase(RemoveShortlist.pending,(state,action)=>{
                state.status = STATUSES.LOADING
            })
            .addCase(RemoveShortlist.fulfilled,(state,action)=>{
                state.status = STATUSES.IDLE
                
            })
            .addCase(RemoveShortlist.rejected,(state,action)=>{
                state.status = STATUSES.ERROR
            })

    },

})

//Thunk 
export const fetchshortlistdata = createAsyncThunk('shortlist/fetchData', async () => {
    try {
        const token = localStorage.getItem('refoken');
        const currentuser = getCookie('userid')
        if (token) {
            const myHeaders = new Headers();
            myHeaders.append('Authorization', `Bearer ${token}`);

            const requestOptions = {
                method: 'GET',
                headers: myHeaders,
                redirect: 'follow',
            };

            const response = await fetch(`https://happymilan.tech/api/v1/user/shortlist/get-short-list`, requestOptions);

            if (response.ok) {
                const result = await response.json();

                const filterUsers = result.data.filter(user => user.userId == currentuser)

                const fetchPromises = filterUsers.map(element => FetchshortlistdatausingID(element.shortlistId));

                // Use Promise.all() to wait for all promises to resolve
                const userDataArray = await Promise.all(fetchPromises);

                console.log("data array : ", userDataArray)
           
                return { userDataArray, filterUsers };
            } else if (response.status === 401) {
                // Handle token expiration or invalid token here
                // You may need to refresh the token using the refresh token
                throw new Error('Unauthorized');
            } else {
                console.error('API request failed:', response.statusText);
                throw new Error('API request failed');
            }
        } else {
            throw new Error('Token not found');
        }
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
});



export const FetchshortlistdatausingID = async (userId) => {

    try {
        const token = localStorage.getItem('refoken');

        if (!token) {
            throw new Error('Token not found');
        }

        const myHeaders = new Headers();
        myHeaders.append('Authorization', `Bearer ${token}`);

        const requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow',
        };

        const response = await fetch(`https://happymilan.tech/api/v1/user/user/${userId}`, requestOptions);

        if (response.ok) {
            const result = await response.json();
            return result.data;
        } else if (response.status === 401) {
            // Handle unauthorized access (e.g., redirect to login page or refresh token)
            throw new Error('Unauthorized');
        } else {
            console.error('API request failed:', response.statusText);
            throw new Error('API request failed');
        }
    } catch (error) {
        console.error('Error fetching user data:', error.message);
        throw error;
    }

}

export default ShortlistData.reducer;