import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import { authenticationReducer } from '../features/authentication';
import FilesystemStorage from 'redux-persist-filesystem-storage';

const authenticationConfig = {
  key: 'authentication',
  storage: FilesystemStorage,
  whitelist: [
    'isAuthenticated',
    'accessToken',
    'userInfo',
    'email',
    'defaultAvatars',
  ],
};

const rootReducer = combineReducers({
  authenticationReducer: persistReducer(
    authenticationConfig,
    authenticationReducer,
  ),
});

export default rootReducer;
