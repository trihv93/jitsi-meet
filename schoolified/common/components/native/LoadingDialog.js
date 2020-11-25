// @flow

import React from 'react';
import { Text, View, ActivityIndicator } from 'react-native';
import Colors from '../../../globals/colors';
import { FontSize, MarginSize, RadiusSize } from '../../../globals/demensions';

type Props = {
  title: String,
  containerStyle: Object,
  titleStyle: Object,
};

export const LoadingDialog = (props: Props) => {
  const { title, containerStyle, titleStyle } = props;
  return (
    <View style={styles.container}>
      <View style={[styles.mainView, containerStyle]}>
        <ActivityIndicator color={Colors.button} />
        <Text
          ellipsizeMode="tail"
          numberOfLines={1}
          style={[styles.title, titleStyle]}>
          {title}
        </Text>
      </View>
    </View>
  );
};

LoadingDialog.defaultProps = {
  title: 'Loading',
  containerStyle: {},
  titleStyle: {},
};

const styles = {
  container: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    flex: 1,
    backgroundColor: Colors.loading_bg_dialog,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 9999,
  },
  mainView: {
    borderRadius: RadiusSize.dpMedium,
    backgroundColor: Colors.white_bg,
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.5,
    borderColor: Colors.text_hint,
  },
  percent: {
    marginTop: MarginSize.dpDouble,
    color: Colors.text_description,
    fontSize: FontSize.normal,
  },
  title: {
    marginTop: MarginSize.dp4X,
    color: Colors.text_description,
    fontSize: FontSize.normal,
  },
};
