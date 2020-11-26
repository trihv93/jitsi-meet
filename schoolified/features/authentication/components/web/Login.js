// @flow

import React, { useEffect, useState, useRef } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import type { Props } from '../../AbstractAuthentication';
import {
  mapDispatchToProps,
  mapStateToProps,
} from '../../AbstractAuthentication';
import { Form, Input, Button, Checkbox, Spin, message } from 'antd';
import Colors from '../../../../globals/colors';

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const Login = (props: Props) => {
  const { onLogin, isLogging, loginSuccess, navigation } = props;

  const usePrevious = (value) => {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  };

  const prevIsLogging = usePrevious(isLogging);

  useEffect(() => {
    if (prevIsLogging && !isLogging) {
      if (loginSuccess) {
        message.success('Login successfully.');
      } else {
        message.error('Login failed.');
      }
    }
  }, [isLogging]);

  const onFinish = (values) => {
    console.log('Success:', values);
    const { username, password } = values;
    onLogin(username, password);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div
      style={{
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Form
        {...layout}
        style={{ minWidth: 500 }}
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}>
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}>
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}>
          <Input.Password />
        </Form.Item>

        <Form.Item {...tailLayout} name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      {isLogging && <Spin />}
    </div>
  );
};

export default connect<*, *, *, *, *, *>(
  mapStateToProps,
  mapDispatchToProps,
)(Login);

const styles = {
  container: {
    flex: 1,
    backgroundColor: Colors.white_bg,
    justifyContent: 'center',
    alignItems: 'center',
  },
};
