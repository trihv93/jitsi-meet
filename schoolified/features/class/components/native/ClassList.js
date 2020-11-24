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
import { FontSize, MediumButton } from '../../../../globals/demensions';
import Colors from '../../../../globals/colors';
import AbstractClass, {
  Props,
  mapDispatchToProps,
  mapStateToProps,
} from '../../AbstractClass';
import Res from '../../../../res';
import ClassListItem from './ClassListItem';
import ClassDetails from './ClassDetails';
import { NavBar } from '../../../../common';

class ClassList extends AbstractClass<Props> {
  renderItem = (item) => {
    return <ClassListItem item={item} />;
  };

  _keyExtractor = (item, index) => `${index}`;

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <NavBar navigation={navigation} />
        <View style={styles.body}>
          <View style={{ flex: 2, backgroundColor: Colors.main_bg }}>
            <FlatList
              data={[1, 2, 3, 4]}
              keyExtractor={this._keyExtractor}
              renderItem={({ item, index }) => this.renderItem(item)}
            />
          </View>
          <View style={styles.detailsView}>
            <ClassDetails />
          </View>
        </View>
      </View>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ClassList);

const styles = {
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  body: {
    backgroundColor: 'white',
    flex: 1,
    flexDirection: 'row',
  },
  detailsView: {
    flex: 3,
    backgroundColor: Colors.main_bg,
  },
};
