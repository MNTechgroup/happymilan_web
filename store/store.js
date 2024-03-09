// store/store.js
import authReducer from './reducers/authReducer';
import Loginreducer from './reducers/loginReducer';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { formReducer } from './reducers/registerReducer';
import MyProfile from './reducers/MyProfile';
import allUsersReducer from './reducers/GetingAlluser';
import userByIdReducer from './reducers/GetingUserByIdReducer';
import GetShortlistList from './reducers/GetShortlistList';
import NotificationReducer from './reducers/NotificationReducer';
import userReducer from './reducers/UserReducers';
import { imageReducer } from './reducers/UploadImagereducer';

const store = configureStore({
  reducer: {
    login : Loginreducer,
    // auth : authReducer ,// Add more slices if needed
    uploadreducer : imageReducer,
    form: formReducer,
    myprofile : MyProfile,
    alluser : allUsersReducer,
    userById : userByIdReducer,
    shortlistdata : GetShortlistList,
    notificatin : NotificationReducer,
    usersact : userReducer
  },
 });


export default store;


