// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     SpamUserdata: {
//         spamUserId: "",
//         reason: "",
//         remark: ""
//     },
//     error: null,
//     loading: false
// };

// export const SpamUserForm = (state = initialState, action) => {
//     switch (action.type) {
//         case 'UPDATE_SPAM_USER_DATA':
//             return {
//                 ...state,
//                 ...action.payload, // Merging payload directly into the state
//             };

//         default:
//             return state;
//     }
// };

// export const SpamuserSlice = createSlice({
//     name: "Spamuser",
//     initialState,
//     reducers: {
//         updateSpamUserdata: (state, action) => {
//             state.SpamUserdata = { ...state.SpamUserdata, ...action.payload };
//         },
//         setFormValidation: (state, action) => {
//             state.isFormValid = action.payload;
//         },
//     },
// });


import { createSlice } from "@reduxjs/toolkit";
import { POST_SPAM_REPORT_USER, POST_SPAM_REPORT_USER_FAILURE, POST_SPAM_REPORT_USER_SUCCESS } from "../type";


const initialState = {
    SpamUserdata: {
        spamUserId: "",
        reason: "",
        remark: "",
        UserName: ""
    },
    error: null,
    loading: false
};

const SpamuserSlice = createSlice({
    name: "Spamuser",
    initialState,
    reducers: {
        updateSpamUserdata: (state, action) => {
            state.SpamUserdata = { ...state.SpamUserdata, ...action.payload };
        },
        setFormValidation: (state, action) => {
            state.isFormValid = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(POST_SPAM_REPORT_USER, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(POST_SPAM_REPORT_USER_SUCCESS, (state) => {
                state.loading = false;
                state.error = null;
                state.SpamUserdata = {
                    spamUserId: "",
                    reason: "",
                    remark: "",

                }
            })
            .addCase(POST_SPAM_REPORT_USER_FAILURE, (state) => {
                state.loading = false;
                state.error = null;
            })
    }
});

export const { updateSpamUserdata, setFormValidation } = SpamuserSlice.actions;
export default SpamuserSlice.reducer;