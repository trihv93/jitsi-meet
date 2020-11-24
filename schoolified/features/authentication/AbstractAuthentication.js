import { Component } from 'react';
import { Dispatch } from "redux";
import { login } from './actions';

export type Props = {
    token: String,
    userInfo: Object,
}

export default class AbstractAuthentication<P: Props> extends Component<P> {}

export function mapDispatchToProps(dispatch: Dispatch<any>) {
    return {
        onLogin() {
            dispatch(login());
        },
    };
}

export function mapStateToProps(state: Object) {
    const { token, userInfo } = state['authenticationReducer'];

    return {
        token: token,
        userInfo: userInfo,
    };
}
