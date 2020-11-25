// @flow

import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { connect } from 'react-redux';
import { MarginSize, FontWeight } from '../../../../globals/demensions';
import Colors from '../../../../globals/colors';
import Res from '../../../../res';
import { ScreenName } from '../../../../globals/constants';

const Main = (props: any) => {
  const { navigation } = props;
  const logOut = () => {
    navigation.goBack();
  };

  const renderHeader = () => {
    return (
      <View style={styles.header}>
        <View style={styles.leftView} />
        <View style={styles.headerBody}>
          <Text style={styles.welcomeLabel}>Welcome to</Text>
          <Image
            source={Res.ic_logo_horizontal}
            style={{ width: 195, height: 50 }}
          />
        </View>
        <TouchableOpacity style={styles.homeButton} onPress={() => logOut()}>
          <Image
            resizeMode="contain"
            source={Res.ic_button_logout}
            style={styles.homeImage}
          />
        </TouchableOpacity>
      </View>
    );
  };

  const renderBody = () => {
    return (
      <View style={styles.body}>
        <View style={styles.helloSection}>
          <Text style={styles.sectionTitle}>GoodMorning, Perter Pan</Text>
          <Text style={styles.sectionDescription}>
            Your class will start at 8AM
          </Text>
        </View>
        <View style={styles.dateTimeSection}>
          <Text style={{ ...styles.dateTitle, color: Colors.in_review }}>
            TUESDAY
          </Text>
          <Text style={{ ...styles.dateTitle, marginTop: MarginSize.dpDouble }}>
            NOV
          </Text>
          <Text
            style={{
              ...styles.dateTitle,
              fontSize: 96,
              color: Colors.in_review,
            }}>
            24
          </Text>
        </View>
        <View style={styles.funFactSection}>
          <View style={styles.infoSection}>
            <Text
              style={{ ...styles.sectionTitle, color: Colors.text_reversal }}>
              Fun Fact of the Day
            </Text>
            <Text style={styles.sectionDescription}>
              Almonds are a member of the peach family
            </Text>
          </View>
          <View style={styles.funFactButtonsView}>
            <TouchableOpacity style={styles.emailButton}>
              <Image
                resizeMode="contain"
                source={Res.ic_notification}
                style={styles.emailImage}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.emailButton}>
              <Image
                resizeMode="contain"
                source={Res.ic_email}
                style={styles.emailImage}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  const renderButtons = () => {
    return (
      <View style={styles.buttonsView}>
        <TouchableOpacity
          style={styles.classButton}
          onPress={() => {
            navigation.navigate(ScreenName.ClassList);
          }}>
          <Text style={styles.classButtonTitle}>Classes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.classButton}>
          <Text style={styles.classButtonTitle}>Assignments</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {renderHeader()}
      {renderBody()}
      {renderButtons()}
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    token: state.authenticationReducer.token,
  };
};

export default connect<*, *, *, *, *, *>(mapStateToProps)(Main);

const styles = {
  container: {
    flex: 1,
    backgroundColor: Colors.main_bg,
  },
  header: {
    flexDirection: 'row',
    marginTop: MarginSize.dp6X,
  },
  welcomeLabel: {
    fontSize: 28,
    marginRight: MarginSize.dpSingle,
    marginTop: MarginSize.dpHalf,
    fontWeight: FontWeight.medium,
  },
  headerBody: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  homeImage: {
    width: 25,
    height: 25,
  },
  body: {
    flexDirection: 'row',
    marginTop: MarginSize.dp11X,
    marginLeft: MarginSize.dp12X,
    marginRight: MarginSize.dp8X,
  },
  helloSection: {
    flex: 2,
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.button,
    borderRadius: 15,
    borderWidth: 10,
    borderColor: Colors.text_reversal,
  },
  dateTimeSection: {
    flex: 1,
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.bg_black,
    marginLeft: MarginSize.dp5X,
    marginRight: MarginSize.dp5X,
    borderRadius: 15,
    borderWidth: 12,
    borderColor: Colors.text_reversal,
  },
  funFactSection: {
    flex: 2,
    height: 250,
    flexDirection: 'row',
  },
  infoSection: {
    flex: 1,
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.fun_fact,
    borderRadius: 15,
    borderWidth: 10,
    borderColor: Colors.text_reversal,
  },
  dateTitle: {
    fontSize: 35,
    fontWeight: FontWeight.bold,
    color: Colors.text_reversal,
  },
  sectionTitle: {
    fontSize: 32,
    textAlign: 'center',
    fontWeight: FontWeight.bold,
    marginBottom: MarginSize.dp5X,
    color: Colors.text_reversal,
    paddingLeft: MarginSize.dp4X,
    paddingRight: MarginSize.dp4X,
  },
  sectionDescription: {
    fontSize: 20,
    fontWeight: FontWeight.normal,
    paddingLeft: MarginSize.dp3X,
    paddingRight: MarginSize.dp3X,
  },
  funFactButtonsView: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: MarginSize.dp6X,
  },
  homeButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    shadowOffset: { width: 0, height: 1 },
    elevation: 1,
    shadowColor: Colors.text_description,
    shadowOpacity: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white_bg,
    marginLeft: MarginSize.dp8X,
    marginRight: MarginSize.dp8X,
    marginTop: MarginSize.dp3X,
  },
  leftView: {
    width: 60,
    height: 60,
    marginLeft: MarginSize.dp8X,
    marginRight: MarginSize.dp8X,
    marginTop: MarginSize.dp3X,
  },
  emailButton: {
    width: 75,
    height: 75,
    borderRadius: 15,
    shadowOffset: { width: 0, height: 1 },
    elevation: 1,
    shadowColor: Colors.text_description,
    shadowOpacity: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white_bg,
    marginBottom: MarginSize.dp3X,
    marginTop: MarginSize.dp3X,
  },
  emailImage: {
    width: 30,
    height: 30,
  },
  classButton: {
    flex: 1,
    height: 220,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white_bg,
    borderRadius: 20,
    marginLeft: MarginSize.dp6X,
    marginRight: MarginSize.dp6X,
    shadowRadius: 15,
    shadowOffset: { width: 0, height: 1 },
    elevation: 1,
    shadowColor: Colors.text_description,
    shadowOpacity: 0.5,
  },
  classButtonTitle: {
    fontSize: 30,
    fontWeight: FontWeight.bold,
    color: Colors.text_description,
  },
  buttonsView: {
    flexDirection: 'row',
    marginTop: MarginSize.dp11X,
    marginLeft: MarginSize.dp8X,
    marginRight: MarginSize.dp8X,
  },
};
