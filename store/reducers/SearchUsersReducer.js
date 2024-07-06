import { createSlice } from '@reduxjs/toolkit';
import { DELETE_SAVESEARCH_DATA, DELETE_SAVESEARCH_DATA_SUCCESS, FETCH_SAVESEARCH_DATA, FETCH_SAVESEARCH_DATA_FAILURE, FETCH_SAVESEARCH_DATA_SUCCESS } from '../type';

const initialState = {
    minAge: 0,
    maxAge: 0,
    minHeight: 0,
    maxHeight: 0,
    minWeight: 0,
    maxWeight: 0,
    maritalStatus: [],
    religion: [],
    community: [],
    stateofLiving: [],
    motherTongue: [],
    currentCountry: [],
    currentCity: [],
    saveSearch: "",
    loading: false, // to track if API call is in progress
    searchResults: null, // to store search results from the API
    error: null, // to store any errors that occur during API call
    Searchsave: {
        loading: false,
        error: "",
        data: []
    }
};

export const searchformReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_SEARCH_DATA':
            return {
                ...state,
                ...action.payload, // Merging payload directly into the state
            };
        case FETCH_SAVESEARCH_DATA:
            return {
                ...state,
                Searchsave: {
                    loading: true,
                    data: [],
                    error: ""
                }
            }
        case FETCH_SAVESEARCH_DATA_SUCCESS:
            return {
                ...state,
                Searchsave: {
                    loading: false,
                    data: action.payload,
                    error: ""
                }
            }
        case FETCH_SAVESEARCH_DATA_FAILURE:
            return {
                ...state,
                Searchsave: {
                    loading: false,
                    data: [],
                    error: ""
                }
            }
        case DELETE_SAVESEARCH_DATA:
            return {
                ...state,
                Searchsave: {
                    ...state.Searchsave,
                    loading: true,
                    error: ""
                }
            }
        case DELETE_SAVESEARCH_DATA_SUCCESS:
            return {
                ...state,
                Searchsave: {
                    ...state.Searchsave,
                    loading: false,
                    error: ""
                }
            }
        default:
            return state;
    }
};

export const SearchFormSlice = createSlice({
    name: "SearchForm",
    initialState,
    reducers: {
        updateSearchData: (state, action) => {
            state.formData = { ...state.formData, ...action.payload };
        },
        setFormValidation: (state, action) => {
            state.isFormValid = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addMatcher(
                action => action.type.endsWith('/pending'),
                (state, action) => {
                    state.loading = true; // Set loading state to true when any pending action occurs
                }
            )
            .addMatcher(
                action => action.type.endsWith('/rejected'),
                (state, action) => {
                    state.loading = false; // Set loading state to false when any rejected action occurs
                    state.error = action.error.message; // Set error message from action payload
                }
            )
            .addMatcher(
                action => action.type.endsWith('/fulfilled'),
                (state, action) => {
                    state.loading = false; // Set loading state to false when any fulfilled action occurs
                    state.searchResults = action.payload; // Set search results from action payload
                }
            );
    }
});
