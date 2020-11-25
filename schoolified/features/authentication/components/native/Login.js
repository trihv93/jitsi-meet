import React from 'react';
import _ from 'lodash';
import SplashScreen from 'react-native-splash-screen';
import { View, Text, TouchableOpacity, TextInput, Image } from 'react-native';
import { connect } from 'react-redux';
import { FontSize, MediumButton } from '../../../../globals/demensions';
import Colors from '../../../../globals/colors';
import AbstractAuthentication, {
  Props,
  mapDispatchToProps,
  mapStateToProps,
} from '../../AbstractAuthentication';
import Res from '../../../../res';
import { LoadingDialog } from '../../../../common';
import { ScreenName } from '../../../../globals/constants';

class Login extends AbstractAuthentication<Props> {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      password: '',
    };
  }

  componentDidMount() {
    SplashScreen.hide();
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    const { isLogging, navigation } = this.props;
    if (isLogging && !nextProps.isLogging) {
      if (nextProps.loginSuccess) {
        navigation.navigate(ScreenName.Main);
      } else {
        alert('Login failed');
      }
    }
  }

  changeText = (key, value) => {
    this.setState({
      [key]: value,
    });
  };

  renderTextInput = (
    placeholder: string,
    key: string,
    secureTextEntry = false,
  ) => {
    return (
      <View style={styles.textInputView}>
        <TextInput
          secureTextEntry={secureTextEntry}
          autoCapitalize="none"
          style={styles.textInput}
          placeholder={placeholder}
          onChangeText={(text) => this.changeText(key, text)}
        />
      </View>
    );
  };

  pressOnLogin = () => {
    const { onLogin } = this.props;
    const { userName, password } = this.state;
    if (_.isEmpty(userName) || _.isEmpty(password)) {
      alert('The username or password is empty, please input and try again.');
      return;
    }
    onLogin(userName, password);
  };

  renderButton = (title) => {
    return (
      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => this.pressOnLogin()}>
        <Text style={styles.buttonTitle}>{title}</Text>
      </TouchableOpacity>
    );
  };

  render() {
    const { isLogging } = this.props;
    return (
      <View style={styles.container}>
        <Image resizeMode="cover" source={Res.ic_logo} style={styles.logo} />
        {this.renderTextInput('UserName', 'userName')}
        {this.renderTextInput('Password', 'password', true)}
        {this.renderButton('Login')}
        {isLogging && <LoadingDialog />}
      </View>
    );
  }
}

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
