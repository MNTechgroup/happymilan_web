import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCookie } from "cookies-next";
import { UploadImages3, updateAddressData, updateEducationData, updateGeneralInfo, updateProffessionalData, updateURLs } from "../actions/registerUser";
import { STATUSES } from "./MyProfile";
import { ADD_NEW_SHORTLIST, MARK_SHORTLISTS_AS_SEEN } from "../actions/GetingAlluser";





const initialState = {
  newShortlists: 0,
  register: {
    email: '',
    name: '',
    otp: '',
    password: ''
  },
  formData: {
    // Initialize your form fields here

    userType: {
      appUsesType: ""
    },
    status: STATUSES.IDLE,
    general: {
      creatingProfileFor: "",
      firstName: "",
      lastName: "",
      motherTongue: "",
      gender: "",
      dateOfBirth: "",
      birthTime: "",
      religion: "",
      cast: "",
      // currentcity: "",
      // countryofliving: "",
      writeBoutYourSelf: "",
     
    },
    address: {
      currentResidenceAddress: "",
      currentCity: "",
      currentCountry: "",
      // originResidenceAddress: "",
      // originCity: "",
      // originCountry: ""
    },
    contact: {
      mobileCode: "",
      mobileNumber: "",
      homeCode: "",
      homeMobileNumber: "",
    },
    education: {

      degree: "",
      collage: "",
      city: "",
      state: "",
      country: ""
    },
    professional: {

      jobTitle: "",
      jobType: "",
      companyName: "",
      currentSalary: "",
      workCity: "",
      workCountry: "",
      //currentDesignation: ""

    },
    allhobbies: {
      hobbies: [],
    },
    upload: {
      images: [],
      bufferdata : []
    },
    partnerpref: {
      age: {
        min: "",
        max: ""
      },
      height: {
        min: "",
        max: ""
      },
      country: "",
      state: "",
      city: "",
      income: "",
      creative: "",
      fun: "",
      diet: ""
    },
    isFormValid: true
  },
};

export const ImagePreview = createAsyncThunk(
  'register/imagepreview',
  async (imgdata, thunkAPI) => {
    // console.log(imgdata);
    console.log(imgdata)
  }
);


export const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_FORM_DATA':
      return {
        ...state,
        formData: {
          ...state.formData,
          ...action.payload,
        },
      };
    default:
      return state;
  }
};

export const FormSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    updateFormData: (state, action) => {
      state.formData = { ...state.formData, ...action.payload };
    },
    setFormValidation: (state, action) => {
      state.isFormValid = action.payload;
    },
   
  },
  extraReducers: (builder) => {
    builder
      .addCase(updateGeneralInfo.pending, (state) => {
        // Handle pending state if needed
        state.formData.status = STATUSES.LOADING;

      });

    builder.addCase(updateGeneralInfo.rejected, (state, action) => {
      // Handle success state if needed
      state.formData.status = STATUSES.ERROR;
      console.log("Data pass : ", action.payload)
    });
    builder.addCase(updateGeneralInfo.fulfilled, (state, action) => {
      state.formData.status = STATUSES.IDLE;
    });
    builder.addCase(updateAddressData.pending, (state, action) => {
      state.formData.status = STATUSES.LOADING;
    });
    builder.addCase(updateAddressData.rejected, (state, action) => {
      state.formData.status = STATUSES.ERROR;
    });
    builder.addCase(updateAddressData.fulfilled, (state, action) => {
      state.formData.status = STATUSES.IDLE;
    });
    builder.addCase(updateEducationData.pending, (state, action) => {
      state.formData.status = STATUSES.LOADING;
    });
    builder.addCase(updateEducationData.rejected, (state, action) => {
      state.formData.status = STATUSES.ERROR;
    });
    builder.addCase(updateEducationData.fulfilled, (state, action) => {
      state.formData.status = STATUSES.IDLE;
    });
    builder.addCase(updateProffessionalData.pending, (state, action) => {
      state.formData.status = STATUSES.LOADING;
    });
    builder.addCase(updateProffessionalData.rejected, (state, action) => {
      state.formData.status = STATUSES.ERROR;
    });
    builder.addCase(updateProffessionalData.fulfilled, (state, action) => {
      state.formData.status = STATUSES.IDLE;
    });
    builder.addCase(UploadImages3.pending, (state, action) => {
      state.formData.status = STATUSES.LOADING;
    });
    builder.addCase(UploadImages3.rejected, (state, action) => {
      state.formData.status = STATUSES.ERROR;
    });
    builder.addCase(UploadImages3.fulfilled, (state, action) => {
      state.formData.status = STATUSES.IDLE;
    });

    builder.addCase(ImagePreview.fulfilled, (state, action) => {
      // Update the images array with the payload from the action
      state.formData.upload.images = action.payload;
    });
    builder.addCase(ADD_NEW_SHORTLIST, (state) => {
      state.newShortlists += 1;
    })
    builder.addCase(MARK_SHORTLISTS_AS_SEEN, (state) => {
      state.newShortlists = 0;
    });
    builder.addCase(updateURLs.fulfilled, (state,action)=>{
      state.formData.upload.bufferdata = action.payload
    })

  }
})


// Function to upload image to S3 using presigned URL
export const uploadImageToS3 = async (theimageData) => {

  console.log(theimageData)
  // Iterate through the imageDataArray and make POST requests for each image
  // theimageData.forEach(imageData => {

  //   console.log(JSON.stringify(theimageData))

  //   const authToken = getCookie("authtoken");


  //   // Assuming imageData is the image data you want to send in the request
  //   const data = JSON.stringify(imageData);

  //   // Construct the fetch options
  //   const options = {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Authorization': `Bearer ${authToken}`
  //     },
  //     body: data
  //   };

  //   // Make the fetch request
  //   fetch('https://happymilan.tech/api/v1/s3/presignedurl/', options)
  //     .then(response => {
  //       if (!response.ok) {
  //         throw new Error('Network response was not ok');
  //       }
  //       return response.json();
  //     })
  //     .then(data => {
  //       console.log(JSON.stringify(data));

  //       if (data.status == "Success") {
  //         // Assuming imageData is the image data you want to send in the request

  //         // Construct the fetch options
  //         const Theoptions = {
  //           method: 'PUT',
  //           headers: {
  //             'Content-Type': imageData.contentType,
  //             'Authorization': `Bearer ${authToken}`
  //           },
  //           body: imageData
  //         };

  //         // Make the fetch request
  //         fetch(data.data.url, Theoptions)
  //           .then(response => {
  //             if (!response.ok) {
  //               throw new Error('Network response was not ok');
  //             }
  //             return response.json(); // Assuming the response is JSON
  //           })
  //           .then(data => {
  //             console.log(JSON.stringify(data));
  //           })
  //           .catch(error => {
  //             console.error('There was a problem with your fetch operation:', error);
  //           });

  //       } else {
  //         console.log("ERROR")
  //       }

  //     })
  //     .catch(error => {
  //       console.error('There was a problem with your fetch operation:', error);
  //     });

  // });

};



export const { setFormValidation } = FormSlice.actions;