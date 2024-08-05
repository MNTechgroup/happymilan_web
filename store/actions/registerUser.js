import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCookie } from "cookies-next";
import { UPDATE_HOBBIES_VALUES, UPDATE_PARTNER_PREF } from "../type";

export const updateFormData = (data) => ({
  type: 'UPDATE_FORM_DATA',
  payload: data,
});

export const removeUploadData = () => ({
  type: 'REMOVE_UPLOAD_DATA'
});



export const REGISTER_USER = 'REGISTER_USER';
export const VERIFY_OTP = 'VERIFY_OTP';
export const SET_PASSWORD = 'SET_PASSWORD';
export const REGISTRATION_SUCCESS = 'REGISTRATION_SUCCESS';
export const REGISTRATION_FAILURE = 'REGISTRATION_FAILURE';

export const updateGeneralInfo = createAsyncThunk(
  'register/updateGeneralInfo',
  async (generalData, thunkAPI) => {
    try {
      const authToken = getCookie("authtoken");

      if (!authToken) {
        throw new Error('Token not found');
      }
      const updatedGeneralData = {
        ...generalData,
        userProfileCompleted: true
    };
      const requestOptions = {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${authToken}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedGeneralData)
      };

      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/v1/user/auth/update-user`, requestOptions);

      if (!response.ok) {
        if (response.status === 401) {
          throw new Error('Unauthorized');
        } else {
          const errorMessage = await response.text();
          throw new Error(`API request failed: ${errorMessage}`);
        }
      }

      const result = await response.json();
      localStorage.setItem("flName", result.userData.firstName + " " + result.userData.lastName)
      return result.data;

    } catch (error) {
      console.error('Error updating data:', error);
      throw error;
    }
  }
);
export const updateAddressData = createAsyncThunk(
  'register/updateaddressInfo',
  async (addressData, thunkAPI) => {
    try {
      const authToken = getCookie("authtoken");

      if (!authToken) {
        throw new Error('Token not found');
      }

      const requestOptions = {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${authToken}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(addressData)
      };

      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/v1/user/address`, requestOptions);

      if (!response.ok) {
        if (response.status === 401) {
          throw new Error('Unauthorized');
        } else {
          const errorMessage = await response.text();
          throw new Error(`API request failed: ${errorMessage}`);
        }
      }

      const result = await response.json();
      return result.data;

    } catch (error) {
      console.error('Error updating data:', error);
      throw error;
    }
  }
);
export const updateEducationData = createAsyncThunk(
  'register/updateeducationInfo',
  async (edducationdata, thunkAPI) => {
    try {
      const authToken = getCookie("authtoken");

      if (!authToken) {
        throw new Error('Token not found');
      }

      const requestOptions = {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${authToken}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(edducationdata)
      };

      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/v1/user/userEducation`, requestOptions);

      if (!response.ok) {
        if (response.status === 401) {
          throw new Error('Unauthorized');
        } else {
          const errorMessage = await response.text();
          throw new Error(`API request failed: ${errorMessage}`);
        }
      }

      const result = await response.json();
     
      return result.data;

    } catch (error) {
      console.error('Error updating data:', error);
      throw error;
    }
  }
);
export const updateProffessionalData = createAsyncThunk(
  'register/updateProffessionalInfo',
  async (proffesionaldata, thunkAPI) => {
    try {
      const authToken = getCookie("authtoken");

      if (!authToken) {
        throw new Error('Token not found');
      }

      const requestOptions = {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${authToken}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(proffesionaldata)
      };

      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/v1/user/userProfessionalDetail`, requestOptions);

      if (!response.ok) {
        if (response.status === 401) {
          throw new Error('Unauthorized');
        } else {
          const errorMessage = await response.text();
          throw new Error(`API request failed: ${errorMessage}`);
        }
      }

      const result = await response.json();
      return result.data;

    } catch (error) {
      console.error('Error updating data:', error);
      throw error;
    }
  }
);
export const updatePartnerPrefData = createAsyncThunk(
  'register/updatepartnerpref',
  async (partnerpref, thunkAPI) => {
    try {
      const authToken = getCookie("authtoken");

      if (!authToken) {
        throw new Error('Token not found');
      }

      const requestOptions = {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${authToken}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(partnerpref)
      };

      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/v1/user/partner`, requestOptions);

      if (!response.ok) {
        if (response.status === 401) {
          throw new Error('Unauthorized');
        } else {
          const errorMessage = await response.text();
          throw new Error(`API request failed: ${errorMessage}`);
        }
      }

      const result = await response.json();
      return result.data;

    } catch (error) {
      console.error('Error updating data:', error);
      throw error;
    }
  }
);
export const updatehobbiesData = createAsyncThunk(
  'register/updatehobbiesInfo',
  async (hobbiesInfo, thunkAPI) => {
    const axios = require('axios');
    const authToken = getCookie('authtoken')
    let data = hobbiesInfo;

    let config = {
      method: 'put',
      maxBodyLength: Infinity,
      url: `${process.env.NEXT_PUBLIC_API_URL}/v1/user/auth/update-user`,
      headers: {
        'Authorization': `Bearer ${authToken}`,
        'Content-Type': 'application/json'
      },
      data: data
    };

    axios.request(config)
      .then((response) => {
        // console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        // console.log(error);
      });

  }
);

export const updateURLs = (urls) => ({
  type: 'register/updateURLs',
  payload: urls,
});

export const UploadImages3 = createAsyncThunk(
  'register/uploadimages3',
  async (theimageData, thunkAPI) => {

    // Iterate through the imageDataArray and make POST requests for each image
    theimageData.images.forEach(imageData => {

      const authToken = getCookie("authtoken");


      // Assuming imageData is the image data you want to send in the request
      const data = {
        "key": imageData.key,
        "contentType": imageData.contentType,
        "isProfilePic": imageData.isProfile
      }

      // Construct the fetch options
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authToken}`
        },
        body: JSON.stringify(data)
      };

      // Make the fetch request
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/v1/s3/presignedurl/`, options)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
    
          if (data.status === "Success") {
    
            const token = getCookie("authtoken");

            // Fetch the image data from the Blob URL
           
            fetch(imageData.data)
              .then(response => response.blob())
              .then(blobData => {

                // Now you have the binary image data in `blobData`
                // You can proceed to send it in your request
                const formData = new FormData();
                formData.append('image', blobData);

                // Make your request with Axios
                const axios = require('axios');
                let config = {
                  method: 'put',
                  maxBodyLength: Infinity,
                  url: data.data.url,
                  headers: {
                    'Content-Type': 'image/jpeg',
                    'x-amz-acl': 'public-read',
                  },
                  data: blobData
                };

                axios.request(config)
                  .then((response) => {
                    // console.log(JSON.stringify(response.data));
                  })
                  .catch((error) => {
                    // console.log(error);
                  });
              })
              .catch(error => {
                console.error('There was a problem with your fetch operation:', error);
              });
            // })
          } else {
            // console.log("ERROR");
          }
        })
        .catch(error => {
          console.error('There was a problem with your fetch operation:', error);
        });

    });

    // console.log("Waiting for images...")

  }
);

export const updateHobbies = (category, values) => ({
  type: UPDATE_HOBBIES_VALUES,
  payload: { category, values },
});

export const updatePartnerPref = (key, values) => ({
  type: UPDATE_PARTNER_PREF,
  payload: { key, values },
});