import { Component } from 'react';
import { Dispatch } from 'redux';
import { login } from '../authentication';

export type Props = {
  token: String,
  userInfo: Object,
};

export default class AbstractClass<P: Props> extends Component<P> {}

export function mapDispatchToProps(dispatch: Dispatch<any>) {
  return {};
}

export function mapStateToProps(state: Object) {
  return {};
}
