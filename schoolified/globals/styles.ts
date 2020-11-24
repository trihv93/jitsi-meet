import {StyleSheet} from 'react-native';
import {MediumButton} from "./demensions";
import Colors from "./colors";
import {FontSize} from './demensions'

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  safeAreaView: {
    flex: 1,
  },
  mediumButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: MediumButton.width,
    height: MediumButton.height,
    backgroundColor: Colors.button,
    borderRadius: MediumButton.height / 2,
  },
  title: {
    fontSize: FontSize.title,
    color: Colors.text_reversal,
  },
  buttonTitle: {
    fontSize: FontSize.buttonTitle,
    color: Colors.text_reversal,
  }
});

export default styles;
