import React from 'react';
import SplashScreen from 'react-native-splash-screen';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { FontSize, MediumButton } from '../../../../globals/demensions';
import Colors from '../../../../globals/colors';
import { App } from '../../../../../react/features/app/components';

class Main extends React.Component {
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

  pressOnLogin = () => {};

  renderButton = (title) => {
    return (
      <TouchableOpacity
        style={styles.mediumButton}
        onPress={() => this.pressOnLogin()}>
        <Text style={styles.buttonTitle}>{title}</Text>
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        {this.renderTextInput('UserName', 'userName')}
        {this.renderTextInput('Password', 'password')}
        {this.renderButton('Login')}
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.authenticationReducer.token,
  };
};

export default connect(mapStateToProps, null)(Main);

const styles = {
  container: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mediumButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: MediumButton.width,
    height: MediumButton.height,
    backgroundColor: Colors.button,
    borderRadius: MediumButton.height / 2,
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
    fontSize: FontSize.buttonTitle,
    color: Colors.text_reversal,
  },
};
