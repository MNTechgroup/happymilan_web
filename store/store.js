// store/store.js
import Loginreducer from './reducers/loginReducer';
import { configureStore } from '@reduxjs/toolkit';
import { formReducer } from './reducers/registerReducer';
import MyProfile from './reducers/MyProfile';
import allUsersReducer from './reducers/GetingAlluser';
import userByIdReducer from './reducers/GetingUserByIdReducer';
import GetShortlistList from './reducers/GetShortlistList';
import NotificationReducer from './reducers/NotificationReducer';
import userReducer from './reducers/UserReducers';
import { imageReducer } from './reducers/UploadImagereducer';
import { searchformReducer } from './reducers/SearchUsersReducer';
import Userseting from './reducers/UserSettingReducer';
import SafetyConsentReducer from './reducers/safetyConsentReducer';
import AuthReducer from './reducers/Authreducer';
import SpamuserSlice from './reducers/SpamReportReducer'
import UserStoryView from './reducers/UserStoryView';
import UpgradePlansReducer from './reducers/UpgradeReducer';
import SignupReducer from './reducers/SignUpReducer';
import UserSentRequestGetSlice from './matrimoney-services/slices/UserSentRequestPagination'

const store = configureStore({
  reducer: {
    auth: AuthReducer,
    storyviews: UserStoryView,
    login: Loginreducer,
    uploadreducer: imageReducer,
    form: formReducer,
    Spamuser: SpamuserSlice,
    searchform: searchformReducer,
    myprofile: MyProfile,
    alluser: allUsersReducer,
    userById: userByIdReducer,
    shortlistdata: GetShortlistList,
    notificatin: NotificationReducer,
    userseting: Userseting,
    usersact: userReducer,
    upgradeplans: UpgradePlansReducer,
    chatSafetyConsent: SafetyConsentReducer,
    signUp: SignupReducer,
    getsentrequestdata: UserSentRequestGetSlice

  },
});


export default store;


