// store/store.js
import authReducer from './reducers/authReducer';
import Loginreducer from './reducers/loginReducer';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    login : Loginreducer,
    auth : authReducer // Add more slices if needed
  },
});

export default store;
