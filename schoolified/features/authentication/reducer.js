import * as Types from './types';

const initialState = {
  isLogging: false,
  loginSuccess: false,
  loginMessage: '',
  userInfo: null,
  token: '',
};

const authenticationReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.AUTHENTICATE_REQUEST:
      return {
        ...state,
        isLogging: true,
        loginSuccess: false,
        loginMessage: '',
        token: '',
        userInfo: null,
      };
    case Types.AUTHENTICATE_SUCCESS: {
      const user = action.userInfo;
      return {
        ...state,
        isLogging: false,
        loginSuccess: true,
        loginMessage: '',
        userInfo: user,
        token: action.token,
      };
    }
    case Types.AUTHENTICATE_FAILURE:
      return {
        ...state,
        isLogging: false,
        loginSuccess: false,
        loginMessage: action.message,
      };
    default:
      return state;
  }
};

export default authenticationReducer;
