import React from 'react';
import { AsyncStorage, Button, Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { connect } from 'react-redux';

import { logout } from '../../redux/modules/user';
import { tokenName } from '../../../utils/global-variables';

const ProfileSubScreen = props => {
  const deleteToken = async () => {
    try {
      await AsyncStorage.removeItem(tokenName);
      return { user: null, token: null }
    } catch (err) {
      console.log('err: ', err);
    }
  }

  const handleLogout = async () => {
    await deleteToken()
    props.logout();
    props.navigation.navigate('Auth');
  }

  return (
    <View style={styles.view}>
      <Text>I'm Profile Screen</Text>
      <Button onPress={handleLogout} title='Logout for now...' />
    </View>
  );
}

const styles = EStyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'center',
  },
});

const mapStateToProps = state => {
  return {
    user: state.user.user,
    token: state.user.token,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch( logout() ),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileSubScreen);
