import * as Types from './types';
import * as Api from './api';

const loginRequest = () => {
  return {
    type: Types.AUTHENTICATE_REQUEST,
  };
};

const loginSuccess = (result) => {
  return {
    type: Types.AUTHENTICATE_SUCCESS,
    token: result.token,
    userInfo: result.user,
  };
};

const loginFailure = (message) => {
  return {
    type: Types.AUTHENTICATE_FAILURE,
    message: message,
  };
};

export const login = (userName, password) => {
  return (dispatch) => {
    dispatch(loginRequest());
    return Api.login(userName, password)
      .then((response) => {
        console.log('BBBB', response);
        if (!response.error && response.result) {
          dispatch(loginSuccess(response.result));
        } else {
          dispatch(loginFailure(response.message));
        }
      })
      .catch((e) => dispatch(loginFailure(e)));
  };
};
