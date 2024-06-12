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

        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/v1/user/auth/update-user`, requestOptions);

        if (response.ok) {
          const result = await response.json();
          // console.log("UPDATE :",result.userData.name)
          localStorage.setItem("userName", result.userData.name)
          setCookie("userName", result.userData.name)
          return result.data;

        } else if (response.status === 401) {

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





export const updateMyEducationData = createAsyncThunk(
  'myProfile/updateMyEducationData',
  async ({ EducationId, UpdatedDataforEducation }, thunkAPI) => {

    try {
      const token = getCookie("authtoken")

      const myHeaders = new Headers();
      myHeaders.append('Authorization', `Bearer ${token}`);
      myHeaders.append('Content-Type', 'application/json'); // Add content type for updating data

      const requestOptions = {
        method: 'PUT', // Use PUT method for updating data
        headers: myHeaders,
        body: JSON.stringify(UpdatedDataforEducation), // Convert updatedData to JSON and send in the body
        redirect: 'follow',
      };

      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/v1/user/userEducation/${EducationId}`, requestOptions);

      if (response.ok) {
        const result = await response.json();
        console.log("🚀 ~ result after env edu:", result)
        return result.data;

      } else if (response.status === 401) {

        throw new Error('Unauthorized');
      } else {
        console.error('API request failed:', response.statusText);
        throw new Error('API request failed');
      }
    } catch (error) {
      console.error('Error updating data:', error);
      throw error;
    }
  }
);

export const updateMyAddressData = createAsyncThunk(
  'myProfile/UpdateMyAdress',
  async ({ AdressID, UpdatedDataforAddress }, thunkAPI) => {

    try {
      const token = getCookie("authtoken")

      const myHeaders = new Headers();
      myHeaders.append('Authorization', `Bearer ${token}`);
      myHeaders.append('Content-Type', 'application/json'); // Add content type for updating data

      const requestOptions = {
        method: 'PUT', // Use PUT method for updating data
        headers: myHeaders,
        body: JSON.stringify(UpdatedDataforAddress), // Convert updatedData to JSON and send in the body
        redirect: 'follow',
      };

      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/v1/user/address/${AdressID}`, requestOptions);

      if (response.ok) {
        const result = await response.json();
        return result.data;

      } else if (response.status === 401) {

        throw new Error('Unauthorized');
      } else {
        console.error('API request failed:', response.statusText);
        throw new Error('API request failed');
      }
    } catch (error) {
      console.error('Error updating data:', error);
      throw error;
    }
  }
);


export const updateMyProfessionalData = createAsyncThunk(
  'myProfile/updateMyProfessionalData',
  async ({ ProfessionalId, UpdatedDataforProfessional }, thunkAPI) => {

    try {
      const token = getCookie("authtoken")

      const myHeaders = new Headers();
      myHeaders.append('Authorization', `Bearer ${token}`);
      myHeaders.append('Content-Type', 'application/json'); // Add content type for updating data

      const requestOptions = {
        method: 'PUT', // Use PUT method for updating data
        headers: myHeaders,
        body: JSON.stringify(UpdatedDataforProfessional), // Convert updatedData to JSON and send in the body
        redirect: 'follow',
      };

      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/v1/user/userProfessionalDetail/${ProfessionalId}`, requestOptions);

      if (response.ok) {
        const result = await response.json();
        return result.data;

      } else if (response.status === 401) {

        throw new Error('Unauthorized');
      } else {
        console.error('API request failed:', response.statusText);
        throw new Error('API request failed');
      }
    } catch (error) {
      console.error('Error updating data:', error);
      throw error;
    }
  }
);

export const updateMyPartnerPrefdata = createAsyncThunk(
  'myProfile/updatePartnerPrefdata',
  async ({ partnerPrefId, UpdatedDataforPartnerPrefdata }, thunkAPI) => {
    console.log("🚀 ~ UpdatedDataforPartnerPrefdata:", UpdatedDataforPartnerPrefdata)
    console.log("🚀 ~ partnerPrefId:", partnerPrefId)

    try {
      const token = getCookie("authtoken")

      const myHeaders = new Headers();
      myHeaders.append('Authorization', `Bearer ${token}`);
      myHeaders.append('Content-Type', 'application/json'); // Add content type for updating data

      const requestOptions = {
        method: 'PUT', // Use PUT method for updating data
        headers: myHeaders,
        body: JSON.stringify(UpdatedDataforPartnerPrefdata), // Convert updatedData to JSON and send in the body
        redirect: 'follow',
      };

      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/v1/user/partner/${partnerPrefId}`, requestOptions);

      if (response.ok) {
        const result = await response.json();
        return result.data;

      } else if (response.status === 401) {

        throw new Error('Unauthorized');
      } else {
        console.error('API request failed:', response.statusText);
        throw new Error('API request failed');
      }
    } catch (error) {
      console.error('Error updating data:', error);
      throw error;
    }
  }
);

// url: `${process.env.NEXT_PUBLIC_API_URL}/v1/user/auth/update-user`,


export const updateMyHobbies = createAsyncThunk(
  'register/updatemyhobbies',
  async (hobbiesInfo, thunkAPI) => {
    try {
      const token = getCookie("authtoken")

      const myHeaders = new Headers();
      myHeaders.append('Authorization', `Bearer ${token}`);
      myHeaders.append('Content-Type', 'application/json'); // Add content type for updating data

      const requestOptions = {
        method: 'PUT', // Use PUT method for updating data
        headers: myHeaders,
        body: JSON.stringify(hobbiesInfo), // Convert updatedData to JSON and send in the body
        redirect: 'follow',
      };

      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/v1/user/auth/update-user`, requestOptions);

      if (response.ok) {
        const result = await response.json();
        console.log("🚀 ~ result:", result)
        return result.userData.hobbies;

      } else if (response.status === 401) {

        throw new Error('Unauthorized');
      } else {
        console.error('API request failed:', response.statusText);
        throw new Error('API request failed');
      }
    } catch (error) {
      console.error('Error updating data:', error);
      throw error;
    }
  }
);

const initialState = {
  status: STATUSES.IDLE,
  data: null,
  totalLikes: 0,
  error: null,
  profileData: {
    adressData: {
      loading: false,
      data: null,
      error: null
    },
    EducationData: {
      loading: false,
      data: null,
      error: null
    },
    ProfessionalData: {
      loading: false,
      data: null,
      error: null
    },
    PartnerPrefData: {
      loading: false,
      data: null,
      error: null
    },
    HobbiesData:{
      loading : false,
      data : null,
      error : null
    }
  }
}

const MyPofileData = createSlice({
  name: "myProfile",
  initialState,
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
      .addCase(fetchTotalLikes.pending, (state) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(fetchTotalLikes.fulfilled, (state, action) => {
        state.status = STATUSES.IDLE,
          state.totalLikes = action.payload
      })
      .addCase(fetchTotalLikes.rejected, (state, action) => {
        state.status = STATUSES.ERROR,
          state.error = action.payload
      })
      .addCase(updateMyProfileData.pending, (state) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(updateMyProfileData.fulfilled, (state, action) => {
        state.status = STATUSES.IDLE;
        console.log("action :", action.payload)
      })
      .addCase(updateMyProfileData.rejected, (state, action) => {
        state.status = STATUSES.ERROR;
        state.error = action.error.message;
      })
      .addCase(FetchMyEducationData.pending, (state, action) => ({
        ...state,
        profileData: {
          ...state.profileData,
          EducationData: {
            ...state.profileData.EducationData,
            loading: STATUSES.LOADING,
            data: null,
            error: null
          }
        }
      }))
      .addCase(FetchMyEducationData.fulfilled, (state, action) => ({
        ...state,
        profileData: {
          ...state.profileData,
          EducationData: {
            ...state.profileData.EducationData,
            loading: STATUSES.IDLE,
            data: action.payload,
            error: null
          }
        }
      }))
      .addCase(FetchMyEducationData.rejected, (state, action) => ({
        ...state,
        profileData: {
          ...state.profileData,
          EducationData: {
            ...state.profileData.EducationData,
            loading: STATUSES.ERROR,
            data: null,
            error: action.payload
          }
        }
      }))
      .addCase(updateMyEducationData.pending, (state, action) => ({
        ...state,
        profileData: {
          ...state.profileData,
          EducationData: {
            ...state.profileData.EducationData,
            loading: STATUSES.LOADING,
            error: null
          }
        }
      }))
      .addCase(updateMyEducationData.fulfilled, (state, action) => ({
        ...state,
        profileData: {
          ...state.profileData,
          EducationData: {
            ...state.profileData.EducationData,
            loading: STATUSES.IDLE,
            data: action.payload,
            error: null
          }
        }
      }))
      .addCase(updateMyEducationData.rejected, (state, action) => ({
        ...state,
        profileData: {
          ...state.profileData,
          EducationData: {
            ...state.profileData.EducationData,
            loading: STATUSES.ERROR,
            error: action.payload
          }
        }
      }))

      .addCase(fetchproffessionalData.pending, (state, action) => ({
        ...state,
        profileData: {
          ...state.profileData,
          ProfessionalData: {
            ...state.profileData.ProfessionalData,
            loading: STATUSES.LOADING,
            data: null,
            error: null
          }
        }
      }))
      .addCase(fetchproffessionalData.fulfilled, (state, action) => ({
        ...state,
        profileData: {
          ...state.profileData,
          ProfessionalData: {
            ...state.profileData.ProfessionalData,
            loading: STATUSES.IDLE,
            data: action.payload,
            error: null
          }
        }
      }))
      .addCase(fetchproffessionalData.rejected, (state, action) => ({
        ...state,
        profileData: {
          ...state.profileData,
          ProfessionalData: {
            ...state.profileData.ProfessionalData,
            loading: STATUSES.ERROR,
            data: null,
            error: action.payload
          }
        }
      }))
      .addCase(updateMyProfessionalData.pending, (state, action) => ({
        ...state,
        profileData: {
          ...state.profileData,
          ProfessionalData: {
            ...state.profileData.ProfessionalData,
            loading: STATUSES.LOADING,
            data: null,
            error: null
          }
        }
      }))
      .addCase(updateMyProfessionalData.fulfilled, (state, action) => ({
        ...state,
        profileData: {
          ...state.profileData,
          ProfessionalData: {
            ...state.profileData.ProfessionalData,
            loading: STATUSES.IDLE,
            data: action.payload,
          }
        }
      }))
      .addCase(updateMyAddressData.pending, (state, action) => (({
        ...state,
        profileData: {
          ...state.profileData,
          adressData: {
            ...state.profileData.adressData,
            loading: STATUSES.LOADING,
            data: null,
            error: null
          }
        }

      })))
      .addCase(updateMyAddressData.fulfilled, (state, action) => (({
        ...state,
        profileData: {
          ...state.profileData,
          adressData: {
            ...state.profileData.adressData,
            loading: STATUSES.IDLE,
            data: action.payload,
            error: null
          }
        }

      })))
      .addCase(updateMyAddressData.rejected, (state, action) => (({
        ...state,
        profileData: {
          ...state.profileData,
          adressData: {
            ...state.profileData.adressData,
            loading: STATUSES.ERROR,
            data: null,
            error: action.payload
          }
        }

      })))
      .addCase(fetchAdressData.pending, (state, action) => (({
        ...state,
        profileData: {
          ...state.profileData,
          adressData: {
            ...state.profileData.adressData,
            loading: STATUSES.LOADING,
            data: null,
            error: null
          }
        }

      })))
      .addCase(fetchAdressData.fulfilled, (state, action) => (({
        ...state,
        profileData: {
          ...state.profileData,
          adressData: {
            ...state.profileData.adressData,
            loading: STATUSES.IDLE,
            data: action.payload,
            error: null
          }
        }

      })))
      .addCase(fetchAdressData.rejected, (state, action) => (({
        ...state,
        profileData: {
          ...state.profileData,
          adressData: {
            ...state.profileData.adressData,
            loading: STATUSES.ERROR,
            data: null,
            error: action.payload
          }
        }

      })))
      .addCase(fetchPartnerPrefdata.pending, (state, action) => (({
        ...state,
        profileData: {
          ...state.profileData,
          PartnerPrefData: {
            ...state.profileData.PartnerPrefData,
            loading: STATUSES.LOADING,
            data: null,
            error: null
          }
        }

      })))
      .addCase(fetchPartnerPrefdata.fulfilled, (state, action) => (({
        ...state,
        profileData: {
          ...state.profileData,
          PartnerPrefData: {
            ...state.profileData.PartnerPrefData,
            loading: STATUSES.IDLE,
            data: action.payload,
            error: null,
          }
        }

      })))
      .addCase(fetchPartnerPrefdata.rejected, (state, action) => (({
        ...state,
        profileData: {
          ...state.profileData,
          PartnerPrefData: {
            ...state.profileData.PartnerPrefData,
            loading: STATUSES.ERROR,
            data: null,
            error: action.payload
          }
        }

      })))
      .addCase(updateMyPartnerPrefdata.pending, (state, action) => (({
        ...state,
        profileData: {
          ...state.profileData,
          PartnerPrefData: {
            ...state.profileData.PartnerPrefData,
            loading: STATUSES.LOADING,
            data: null,
            error: null
          }
        }

      })))
      .addCase(updateMyPartnerPrefdata.fulfilled, (state, action) => (({
        ...state,
        profileData: {
          ...state.profileData,
          PartnerPrefData: {
            ...state.profileData.PartnerPrefData,
            loading: STATUSES.IDLE,
            data: action.payload,
            error: null
          }
        }

      })))
      .addCase(updateMyPartnerPrefdata.rejected, (state, action) => (({
        ...state,
        profileData: {
          ...state.profileData,
          PartnerPrefData: {
            ...state.profileData.PartnerPrefData,
            loading: STATUSES.ERROR,
            data: null,
            error: action.payload
          }
        }

      })))
      .addCase(fetchMyhoobies.pending, (state, action) => (({
        ...state,
        profileData: {
          ...state.profileData,
          HobbiesData: {
            ...state.profileData.HobbiesData,
            loading: STATUSES.LOADING,
            data: null,
            error:null
          }
        }

      })))
      .addCase(fetchMyhoobies.fulfilled, (state, action) => (({
        ...state,
        profileData: {
          ...state.profileData,
          HobbiesData: {
            ...state.profileData.HobbiesData,
            loading: STATUSES.IDLE,
            data: action.payload,
            error:null
          }
        }

      })))
      .addCase(fetchMyhoobies.rejected, (state, action) => (({
        ...state,
        profileData: {
          ...state.profileData,
          HobbiesData: {
            ...state.profileData.HobbiesData,
            loading: STATUSES.ERROR,
            data: null,
            error:action.payload
          }
        }

      })))
      .addCase(updateMyHobbies.pending, (state, action) => (({
        ...state,
        profileData: {
          ...state.profileData,
          HobbiesData: {
            ...state.profileData.HobbiesData,
            loading: STATUSES.LOADING,
            data: null,
            error:null
          }
        }

      })))
      .addCase(updateMyHobbies.fulfilled, (state, action) => (({
        ...state,
        profileData: {
          ...state.profileData,
          HobbiesData: {
            ...state.profileData.HobbiesData,
            loading: STATUSES.IDLE,
            data: action.payload,
            error:null
          }
        }

      })))
      .addCase(updateMyHobbies.rejected, (state, action) => (({
        ...state,
        profileData: {
          ...state.profileData,
          HobbiesData: {
            ...state.profileData.HobbiesData,
            loading: STATUSES.ERROR,
            data: null,
            error:action.payload
          }
        }

      })))
  },
});


export const fetchMyhoobies = createAsyncThunk('myProfile/fetchmyhobbies', async () => {
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

      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/v1/user/auth/me`, requestOptions);

      if (response.ok) {
        const result = await response.json();
        console.log("🚀 ~ fetchMyhoobies ~ result:", result)
        return result.data?.user?.hobbies;
      } else if (response.status === 401) {

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

      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/v1/user/auth/me`, requestOptions);

      if (response.ok) {
        const result = await response.json();
        return result.data.user;
      } else if (response.status === 401) {

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

export const fetchTotalLikes = createAsyncThunk('myProfile/fetchLikes', async () => {
  try {
    const token = getCookie('authtoken');
    const currentUserID = getCookie("userid")

    if (token) {
      const myHeaders = new Headers();
      myHeaders.append('Authorization', `Bearer ${token}`);

      const requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow',
      };

      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/v1/user/like/get-user-likes-paginated/${currentUserID}`, requestOptions);

      if (response.ok) {
        const result = await response.json();
        console.log(result.data)
        return result.data.totalResults;
      } else if (response.status === 401) {

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





//MyProfile - Education Tab


export const FetchMyEducationData = createAsyncThunk('myProfile/FetchMyEducationData', async () => {
  try {
    const token = getCookie('authtoken');
    const CurrentUserID = getCookie("userid")

    if (token) {
      const myHeaders = new Headers();
      myHeaders.append('Authorization', `Bearer ${token}`);

      const requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow',
      };

      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/v1/user/userEducation/${CurrentUserID}`, requestOptions);

      if (response.ok) {
        const result = await response.json();
        return result.data;
      } else if (response.status === 401) {

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

//MyProfile - Professional Tab

export const fetchproffessionalData = createAsyncThunk('myProfile/ProfessionalTab', async () => {
  try {
    const token = getCookie('authtoken');
    const CurrentUserID = getCookie("userid")

    if (token) {
      const myHeaders = new Headers();
      myHeaders.append('Authorization', `Bearer ${token}`);

      const requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow',
      };

      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/v1/user/userProfessionalDetail/getbyid/${CurrentUserID}`, requestOptions);

      if (response.ok) {
        const result = await response.json();
        return result.data;
      } else if (response.status === 401) {

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

export const fetchAdressData = createAsyncThunk('myProfile/AddressTab', async (addressID, thunkAPI) => {
  try {
    const token = getCookie('authtoken');
    const CurrentUserID = getCookie("userid")

    if (token) {
      const myHeaders = new Headers();
      myHeaders.append('Authorization', `Bearer ${token}`);

      const requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow',
      };

      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/v1/user/address/${addressID}`, requestOptions);

      if (response.ok) {
        const result = await response.json();
        return result.data;
      } else if (response.status === 401) {

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

export const fetchPartnerPrefdata = createAsyncThunk('myProfile/PartnerprefData', async (partnerId, thunkAPI) => {
  try {
    const token = getCookie('authtoken');
    const CurrentUserID = getCookie("userid")

    if (token) {
      const myHeaders = new Headers();
      myHeaders.append('Authorization', `Bearer ${token}`);

      const requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow',
      };

      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/v1/user/partner/getByUser/${CurrentUserID}`, requestOptions);

      if (response.ok) {
        const result = await response.json();
        return result.data;
      } else if (response.status === 401) {

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