import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Res from '../../../res';
import { FontSize, MarginSize } from '../../../globals/demensions';
import Colors from '../../../globals/colors';
import { CircleButton } from './CircleButton';

type Props = {
  navigation: Object,
};

export const NavBar = (props: Props) => {
  const { navigation } = props;
  return (
    <View style={styles.container}>
      <Image
        source={Res.ic_logo_horizontal}
        style={{ width: 195, height: 50 }}
      />
      <View style={styles.rightView}>
        <Text style={styles.label}>Good afternoon, Peter Pan</Text>
        <CircleButton
          icon={Res.ic_notification}
          containerStyle={styles.button}
          onPress={() => navigation.goBack()}
        />
        <CircleButton
          icon={Res.ic_button_home}
          containerStyle={styles.button}
          onPress={() => navigation.goBack()}
        />
        <TouchableOpacity>
          <Image />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = {
  container: {
    backgroundColor: Colors.main_bg,
    flexDirection: 'row',
    height: 100,
    alignItems: 'center',
    paddingLeft: MarginSize.dp4X,
    paddingRight: MarginSize.dp4X,
  },
  rightView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  button: {
    marginLeft: MarginSize.dp5X,
  },
  label: {
    color: Colors.type,
    fontSize: FontSize.medium,
  },
};
