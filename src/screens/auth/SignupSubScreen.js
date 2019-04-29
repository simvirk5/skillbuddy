import React from 'react';
import { AsyncStorage, Button, ScrollView, Text, TextInput, View } from 'react-native';
import { connect } from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';

import PersonalInfo from './PersonalInfo'
import Skills from './Skills'
import Touchable from '../../components/Touchable'

import { height, width } from '../../../variables/style-sheet'
import { liftUser } from '../../redux/modules/user';
import { apiUrl, tokenName } from '../../../utils/global-variables';
import useAxios from '../../../utils/axios-helpers';

const path = `${apiUrl}/user/create`;
const { postWithAxios } = useAxios(path);

class SignupScreen extends React.Component {
  static navigationOptions = {
      header: null,
    };

  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    }
  }

  backToLogin = () => this.props.navigation.navigate('Login')

  handleErr = errMsg => {
    console.log('signup failed with err: ', errMsg);
  }

  handleSubmit = () => {
    const { firstName, lastName, email, password } = this.state;
    postWithAxios({ firstName, lastName, email, password }).then(result => {
      result.data.user
        ? this.handleSuccess({ user: result.data.user, token: result.data.token })
        : this.handleErr(result.data._message);
    }).catch(err => console.log('err: ', err));
  }

  handleSuccess = async ({ user, token }) => {
    await this.setToken(token);
    this.props.liftUser({ user, token });
    this.props.navigation.navigate('Main');
  }

  nextPage = () => {
    console.log('scrolling')
  }

  setToken = async token => {
    try {
      await AsyncStorage.setItem(tokenName, token);
    } catch (err) {
      console.log('err: ', err);
    }
  }

  updateState = (data, key) => {
    this.setState({ [key]: data })
  }

  render() {
    const { firstName, lastName, email, password } = this.state;
    const height = () => EStyleSheet.value('$height');
    const pagePadding = () => EStyleSheet.value('$pagePadding');
    const pagingHeight = height() - (pagePadding() * 2);
    return (
      <View style={styles.page}>

        <ScrollView pagingEnabled scrollEnabled={true} style={styles.scroll}>
          <PersonalInfo backToLogin={this.backToLogin} pagingHeight={pagingHeight} state={this.state} updateState={this.updateState} />
          <Skills pagingHeight={pagingHeight} />
        </ScrollView>

        <Touchable iosType='opacity' onPress={this.nextPage}>
          <View style={styles.circle}></View>
        </Touchable>
      </View>
    );
  }
}

const styles = EStyleSheet.create({
  page: {
    paddingBottom: '$pagePadding',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '$orange',
  },
  scroll: {
    width: '100%',
    marginTop: '$pagePadding',
    backgroundColor: 'green',
  },
  circle: {
    height: 60,
    width: 60,
    marginTop: '30rem',
    backgroundColor: '$purple',
    borderRadius: 30,
  },
  text: {
    // fontSize: '22rem'
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

export default connect(mapStateToProps, mapDispatchToProps)(SignupScreen);
