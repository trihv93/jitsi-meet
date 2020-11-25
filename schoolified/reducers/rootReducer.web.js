import { combineReducers } from 'redux';
import { authenticationReducer } from './reducers';

const rootReducer = combineReducers({
  authenticationReducer: authenticationReducer,
});

export default rootReducer;
