// @flow

import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import Colors from '../../../globals/colors';

type Props = {
  icon: Number,
  containerStyle: Object,
  onPress: Function,
};

export const CircleButton = (props: Props) => {
  const { icon, containerStyle, onPress } = props;
  return (
    <TouchableOpacity
      style={[styles.container, containerStyle]}
      onPress={onPress}>
      <Image source={icon} style={styles.icon} />
    </TouchableOpacity>
  );
};

const styles = {
  container: {
    width: 50,
    height: 50,
    borderRadius: 25,
    shadowOffset: { width: 0, height: 1 },
    elevation: 1,
    shadowColor: Colors.text_description,
    shadowOpacity: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white_bg,
  },
  icon: {
    width: 20,
    height: 20,
  },
};
