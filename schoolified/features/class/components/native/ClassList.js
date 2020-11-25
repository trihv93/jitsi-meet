// @flow

import React from 'react';
import { View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import Colors from '../../../../globals/colors';
import type { Props } from '../../AbstractClass';
import { mapDispatchToProps, mapStateToProps } from '../../AbstractClass';
import ClassListItem from './ClassListItem';
import ClassDetails from './ClassDetails';
import { NavBar } from '../../../../common';

const ClassList = (props: Props) => {
  const { navigation } = props;
  const renderItem = (item) => {
    return <ClassListItem item={item} />;
  };

  const keyExtractor = (item, index) => `${index}`;

  return (
    <View style={styles.container}>
      <NavBar navigation={navigation} />
      <View style={styles.body}>
        <View style={{ flex: 2, backgroundColor: Colors.main_bg }}>
          <FlatList
            data={[1, 2, 3, 4]}
            keyExtractor={keyExtractor}
            renderItem={({ item }) => renderItem(item)}
          />
        </View>
        <View style={styles.detailsView}>
          <ClassDetails />
        </View>
      </View>
    </View>
  );
};

export default connect<*, *, *, *, *, *>(
  mapStateToProps,
  mapDispatchToProps,
)(ClassList);

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
