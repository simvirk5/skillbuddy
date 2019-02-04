import React from 'react';
import { AsyncStorage, Text, View } from 'react-native';
import { connect } from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';

import { liftUser } from '../../redux/modules/user';
import { apiUrl, tokenName } from '../../../utils/global-variables';
import useAxios from '../../../utils/axios-helpers';

import axios from 'axios';

const path = `${apiUrl}/user/validate`;
const { postWithAxios } = useAxios(path);

class LoadingScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      //
    }
  }

  deleteToken = async () => {
    try {
      await AsyncStorage.removeItem(tokenName);
      return { user: null, token: null }
    } catch (err) {
      console.log('err: ', err);
    }
  }

  tokenFail = async () => {
    const clearedState = await this.deleteToken();
    this.setState(clearedState);
    this.props.navigation.navigate('Auth');
  }

  setToken = async token => {
    try {
      await AsyncStorage.setItem(tokenName, token);
    } catch (err) {
      console.log('err: ', err);
    }
  }

  handleSuccess = async ({ user, token }) => {
    // console.log('in handleSuccess')
    await this.setToken(token);
    this.props.liftUser({ user, token });
    this.props.navigation.navigate('Main');
  }

  handleErr = errMsg => {
    console.log('signup failed with err: ', errMsg);
  }

  handleValidateFail = err => {
    console.log('err: ', err);
    this.tokenFail();
  }

  tokenSuccess = token => {
    postWithAxios({ token }).then(async result => {
      result.data.user
        ? this.handleSuccess({ user: result.data.user, token: result.data.token })
        : this.handleErr(result.data._message);
    }).catch(err => this.handleValidateFail(err));
  }

  getToken = async () => {
    try {
      return await AsyncStorage.getItem(tokenName) || null;
    } catch (err) {
      console.log('err: ', err);
    }
  }

  componentDidMount = async () => {
    // () => this.props.navigation.navigate('Auth')
    const token = await this.getToken();
    typeof token !== 'string' || token === 'none' || token === ''
      ? this.tokenFail()
      : this.tokenSuccess(token);
  }

  render() {
    return (
      <View style={styles.view}>
        <Text>loading screen</Text>
      </View>
    );
  }
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
    liftUser: ({ user, token }) => dispatch( liftUser({ user, token }) ),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoadingScreen);
