import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  FlatList,
} from 'react-native';
import { connect } from 'react-redux';
import {
  FontSize,
  FontWeight,
  MarginSize,
  MediumButton,
} from '../../../../globals/demensions';
import Colors from '../../../../globals/colors';
import AbstractClass, {
  Props,
  mapDispatchToProps,
  mapStateToProps,
} from '../../AbstractClass';
import Res from '../../../../res';

class ClassDetails extends AbstractClass<Props> {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Image source={Res.ic_broadcast_white} style={styles.broadcastIcon} />
          <Text style={styles.headerTitle}>
            This class is current in session
          </Text>
        </View>
        <View style={styles.titleView}>
          <Text numberOfLines={1} style={styles.lessonTitle}>
            SCIENCE
          </Text>
          <Text style={styles.time}>5:00 PM</Text>
        </View>
        <Text style={{ ...styles.description, color: Colors.text_description }}>
          Create a lesson for this class
        </Text>
        <Text style={styles.description}>with Tri Dep Tri</Text>
      </View>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ClassDetails);

const styles = {
  container: {
    flex: 1,
    backgroundColor: Colors.white_bg,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3,
    shadowColor: Colors.text_description,
    shadowOpacity: 0.5,
    borderRadius: 15,
    margin: MarginSize.dpDouble,
    marginRight: MarginSize.dp5X,
    marginBottom: MarginSize.dp5X,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.green,
    padding: MarginSize.dp4X,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
  },
  broadcastIcon: {
    width: 33,
    height: 24,
    marginLeft: MarginSize.dp3X,
    marginRight: MarginSize.dp3X,
  },
  headerTitle: {
    fontSize: FontSize.medium,
    color: Colors.text_reversal,
  },
  lessonTitle: {
    flex: 1,
    fontSize: 32,
    color: Colors.text,
    fontWeight: FontWeight.medium,
    paddingRight: MarginSize.dpDouble,
  },
  time: {
    fontSize: FontSize.large,
    color: Colors.text,
  },
  titleView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: MarginSize.dp5X,
    alignItems: 'center',
  },
  description: {
    fontSize: FontSize.large,
    color: Colors.text,
    marginLeft: MarginSize.dp5X,
    marginBottom: MarginSize.dp5X,
  },
};
