import React from 'react';
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

  changeText = (key, value) => {
    this.setState({
      [key]: value,
    });
  };

  renderTextInput = (placeholder, key) => {
    return (
      <View style={styles.textInputView}>
        <TextInput
          style={styles.textInput}
          placeholder={placeholder}
          onChangeText={(text) => this.changeText(key, text)}
        />
      </View>
    );
  };

  pressOnLogin = () => {
    const { navigation } = this.props;
    navigation.navigate(ScreenName.Main);
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
    return (
      <View style={styles.container}>
        <Image resizeMode="cover" source={Res.ic_logo} style={styles.logo} />
        {this.renderTextInput('UserName', 'userName')}
        {this.renderTextInput('Password', 'password')}
        {this.renderButton('Login')}
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
