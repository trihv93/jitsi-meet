import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import {
  FontSize,
  MarginSize,
  FontWeight,
} from '../../../../globals/demensions';
import Colors from '../../../../globals/colors';
import AbstractClass from '../../AbstractClass';
import Res from '../../../../res';

type Props = {
  item: Object,
};

class ClassListItem extends AbstractClass<Props> {
  render() {
    return (
      <TouchableOpacity style={styles.container}>
        <View style={{ flex: 1 }}>
          <Text style={styles.title}>ENGLISH</Text>
          <Text style={styles.description}>Test MyScript</Text>
        </View>
        <Image source={Res.ic_broadcast} style={styles.broadcastIcon} />
        <Text>5:00 PM</Text>
      </TouchableOpacity>
    );
  }
}

export default ClassListItem;

const styles = {
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: MarginSize.dp3X,
    height: 120,
    borderRadius: 15,
    margin: MarginSize.dpDouble,
    marginLeft: MarginSize.dp4X,
    marginRight: MarginSize.dp4X,
    backgroundColor: 'white',
    shadowOffset: { width: 0, height: 3 },
    elevation: 3,
    shadowColor: Colors.text_description,
    shadowOpacity: 0.5,
  },
  body: {
    backgroundColor: 'white',
    flex: 1,
    flexDirection: 'row',
  },
  broadcastIcon: {
    width: 22,
    height: 16,
    marginLeft: MarginSize.dp3X,
    marginRight: MarginSize.dp3X,
  },
  title: {
    fontSize: FontSize.large,
    fontWeight: FontWeight.medium,
  },
  description: {
    fontSize: FontSize.medium,
    fontWeight: FontWeight.normal,
    marginTop: MarginSize.dpDouble,
  },
};
