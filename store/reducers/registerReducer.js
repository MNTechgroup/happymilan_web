import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { UploadImages3, updateAddressData, updateEducationData, updateGeneralInfo, updateProffessionalData, updateURLs } from "../actions/registerUser";
import { STATUSES } from "./MyProfile";
import { ADD_NEW_SHORTLIST, MARK_SHORTLISTS_AS_SEEN } from "../actions/GetingAlluser";
import { UPDATE_HOBBIES_VALUES, UPDATE_PARTNER_PREF } from "../type";
import { getNameFromLocalStorage } from "../../utils/helpers/LocalStorage";


const DefaultName = getNameFromLocalStorage("personal")



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
      // motherTongue: "",
      maritalStatus: "",
      gender: "",
      // dateOfBirth: "",
      // birthTime: "",
      religion: "",
      cast: "",
      height: "",
      weight: "",
      // currentcity: "",
      // countryofliving: "",
      writeBoutYourSelf: "",

    },
    address: {
      currentResidenceAddress: "",
      currentCity: "",
      currentCountry: "",
      currentState: ""
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
      hobbies: [
        {
          "category": "Creative",
          "values": []
        },
        {
          "category": "Fun",
          "values": []
        },
        {
          "category": "Fitness",
          "values": []
        }
      ],
    },
    hobby: {
      hobbyval: []
    },
    upload: {
      images: [],
      bufferdata: []
    },
    uploadStory: {
      imagesdata: {},
      bufferdata: "",
      CaptionText: "",
    },
    uploadChatImage: {
      imagesdata: {},
      bufferdata: "",
      CaptionText: "",
    },
    uploadChatVideo: {
      imagesdata: {},
      bufferdata: "",
      CaptionText: "",
    },
    UploadChatContent: {
      ContentType: "",
      uploadChatVideo: {
        imagesdata: {},
        bufferdata: "",
        CaptionText: "",
      },
      uploadChatImage: {
        imagesdata: {},
        bufferdata: "",
        CaptionText: "",
      },
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
      country: [],
      state: [],
      city: [],
      income: 0,
      creative: [],
      fun: [],
      diet: []
    },
    userProfile: {
      images: [],
      bufferdata: []
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
    case 'REMOVE_UPLOAD_DATA':
      return {
        ...state,
        UploadChatContent: {
          ContentType: "",
          uploadChatVideo: {
            imagesdata: {},
            bufferdata: "",
            CaptionText: "",
          },
          uploadChatImage: {
            imagesdata: {},
            bufferdata: "",
            CaptionText: "",
          }
        }
      };
    case UPDATE_HOBBIES_VALUES:
      return {
        ...state,
        formData: {
          ...state.formData,
          allhobbies: {
            ...state.formData.allhobbies,
            hobbies: state.formData.allhobbies.hobbies.map(hobby =>
              hobby.category?.toLowerCase() === action.payload.category?.toLowerCase()
                ? { ...hobby, values: [...new Set([...hobby.values, ...action.payload.values])] }
                : hobby
            ),
          }
        }
      };
    case UPDATE_PARTNER_PREF:
      const { key, values } = action.payload;

      return {
        ...state,
        formData: {
          ...state.formData,
          partnerpref: {
            ...state.formData.partnerpref,
            [key]: Array.isArray(state.formData.partnerpref[key])
              ? [...new Set([...state.formData.partnerpref[key], ...values])]
              : values,
          },
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
    setUploadUIVisibility(state, action) {
      const { userId, isVisible } = action.payload;
      state[userId] = isVisible;
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
    });
    builder.addCase(updateGeneralInfo.fulfilled, (state, action) => {
      // Handle success state if needed
      state.formData.general = {
        ...state.formData.general,
        ...action.payload
      }
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
    builder.addCase(updateURLs.fulfilled, (state, action) => {
      state.formData.upload.bufferdata = action.payload
    })


  }
})




export const { setFormValidation, setUploadUIVisibility } = FormSlice.actions;