// @flow

import type { Dispatch } from 'redux';
import { login } from './actions';

export type Props = {
  token: String,
  userInfo: Object,
  onLogin: Function,
  isLogging: Boolean,
  loginSuccess: Boolean,
  loginMessage: String,
  navigation: Object,
};

export function mapDispatchToProps(dispatch: Dispatch<any>) {
  return {
    onLogin(userName: string, password: any) {
      dispatch(login(userName, password));
    },
  };
}

export function mapStateToProps(state: Object) {
  const { token, userInfo, isLogging, loginSuccess, loginMessage } = state[
    'authenticationReducer'
  ];
  return {
    token: token,
    userInfo: userInfo,
    isLogging: isLogging,
    loginSuccess: loginSuccess,
    loginMessage: loginMessage,
  };
}
