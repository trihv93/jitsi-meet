import React, { useEffect, useState, useRef } from 'react';
import _ from 'lodash';
import SplashScreen from 'react-native-splash-screen';
import { View, Text, TouchableOpacity, TextInput, Image } from 'react-native';
import { connect } from 'react-redux';
import { FontSize, MediumButton } from '../../../../globals/demensions';
import Colors from '../../../../globals/colors';
import {
  Props,
  mapDispatchToProps,
  mapStateToProps,
} from '../../AbstractAuthentication';
import Res from '../../../../res';
import { LoadingDialog } from '../../../../common';
import { ScreenName } from '../../../../globals/constants';

const Login = (props: Props) => {
  const { onLogin, isLogging, loginSuccess, navigation } = props;
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    SplashScreen.hide();
  }, []);

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
        navigation.navigate(ScreenName.Main);
      } else {
        alert('Login failed.');
      }
    }
  }, [isLogging]);

  const changeText = (key, value) => {
    if (key === 'userName') {
      setUserName(value);
    } else {
      setPassword(value);
    }
  };

  const renderTextInput = (
    placeholder: string,
    key: string,
    secureTextEntry = false,
  ) => {
    const value = key === 'userName' ? userName : password;
    return (
      <View style={styles.textInputView}>
        <TextInput
          secureTextEntry={secureTextEntry}
          autoCapitalize="none"
          style={styles.textInput}
          placeholder={placeholder}
          onChangeText={(text) => changeText(key, text)}
          value={value}
        />
      </View>
    );
  };

  const pressOnLogin = () => {
    if (_.isEmpty(userName) || _.isEmpty(password)) {
      alert('The username or password is empty, please input and try again.');
      return;
    }
    onLogin(userName, password);
  };

  const renderButton = (title) => {
    return (
      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => pressOnLogin()}>
        <Text style={styles.buttonTitle}>{title}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Image resizeMode="cover" source={Res.ic_logo} style={styles.logo} />
      {renderTextInput('UserName', 'userName')}
      {renderTextInput('Password', 'password', true)}
      {renderButton('Login')}
      {isLogging && <LoadingDialog />}
    </View>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

const styles = {
  container: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: MediumButton.width,
    height: MediumButton.height,
    backgroundColor: Colors.button,
    borderRadius: MediumButton.height / 2,
    marginBottom: 150,
  },
  textInputView: {
    width: MediumButton.width,
    height: MediumButton.height,
    borderRadius: MediumButton.height / 2,
    borderWidth: 0.5,
    marginBottom: 30,
    borderColor: Colors.alpha_divider_a30,
  },
  textInput: {
    flex: 1,
    textAlign: 'center',
  },
  title: {
    fontSize: FontSize.title,
    color: Colors.text_reversal,
  },
  buttonTitle: {
    fontSize: FontSize.normal,
    color: Colors.text_reversal,
  },
  logo: {
    width: 150,
    height: 101,
    marginBottom: 50,
  },
};
