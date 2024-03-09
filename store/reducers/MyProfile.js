import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCookie, setCookie } from "cookies-next";

export const STATUSES = Object.freeze({
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading',
})


export const updateMyProfileData = createAsyncThunk(
  'myProfile/updateData',
  async (updatedData, thunkAPI) => {
    try {
      const token = getCookie("authtoken");

      if (token) {
        const myHeaders = new Headers();
        myHeaders.append('Authorization', `Bearer ${token}`);
        myHeaders.append('Content-Type', 'application/json'); // Add content type for updating data

        const requestOptions = {
          method: 'PUT', // Use PUT method for updating data
          headers: myHeaders,
          body: JSON.stringify(updatedData), // Convert updatedData to JSON and send in the body
          redirect: 'follow',
        };

        const response = await fetch('https://happymilan.tech/api/v1/user/auth/update-user', requestOptions);

        if (response.ok) {
          const result = await response.json();
          // console.log("UPDATE :",result.userData.name)
          localStorage.setItem("userName",result.userData.name)
         setCookie("userName",result.userData.name)
          return result.data;

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
      console.error('Error updating data:', error);
      throw error;
    }
  }
);

const MyPofileData = createSlice({
  name: "myProfile",
  initialState: {
    status: STATUSES.IDLE,
    data: null,
    error: null,
    proffesionalData : null,
    proffStatus: STATUSES.IDLE
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMyProfileData.pending, (state) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(fetchMyProfileData.fulfilled, (state, action) => {
        state.status = STATUSES.IDLE;
        state.data = action.payload;
      })
      .addCase(fetchMyProfileData.rejected, (state, action) => {
        state.status = STATUSES.ERROR;
        state.error = action.error.message;
      })
      .addCase(fetchMyProfileProffessionaldata.pending, (state) => {
        state.proffStatus = STATUSES.LOADING;
      })
      .addCase(fetchMyProfileProffessionaldata.fulfilled, (state, action) => {
        state.proffStatus = STATUSES.IDLE;
        state.proffesionalData = action.payload;
      })
      .addCase(fetchMyProfileProffessionaldata.rejected, (state, action) => {
        state.proffStatus = STATUSES.ERROR;
        state.error = action.error.message;
      })
      .addCase(updateMyProfileData.pending, (state) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(updateMyProfileData.fulfilled, (state, action) => {
        state.status = STATUSES.IDLE;
        console.log("action :",action.payload)
      })
      
      .addCase(updateMyProfileData.rejected, (state, action) => {
        state.status = STATUSES.ERROR;
        state.error = action.error.message;
      });
  },
});

export const fetchMyProfileData = createAsyncThunk('myProfile/fetchData', async () => {
    try {
        const token = getCookie('authtoken');

        if (token) {
            const myHeaders = new Headers();
            myHeaders.append('Authorization', `Bearer ${token}`);

            const requestOptions = {
                method: 'GET',
                headers: myHeaders,
                redirect: 'follow',
            };

            const response = await fetch(`https://happymilan.tech/api/v1/user/auth/me`, requestOptions);

            if (response.ok) {
                const result = await response.json();
                return result.data.user;
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
export const fetchMyProfileProffessionaldata = createAsyncThunk('myProfile/fetchproffessionalData', async () => {
    try {
        const token = getCookie('authtoken');

        if (token) {
            const myHeaders = new Headers();
            myHeaders.append('Authorization', `Bearer ${token}`);

            const requestOptions = {
                method: 'GET',
                headers: myHeaders,
                redirect: 'follow',
            };

            const response = await fetch(`https://happymilan.tech/api/v1/user/userProfessionalDetail`, requestOptions);

            if (response.ok) {
                const result = await response.json();
                return result.data.user;
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

export default MyPofileData.reducer;
