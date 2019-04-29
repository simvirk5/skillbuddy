import React from 'react';
import { AsyncStorage, Button, Text, TextInput, View } from 'react-native';
import { connect } from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';

import Touchable from '../../components/Touchable';

import { liftUser } from '../../redux/modules/user';
import { apiUrl, tokenName } from '../../../utils/global-variables';
import useAxios from '../../../utils/axios-helpers';

const path = `${apiUrl}/user/login`;
const { postWithAxios } = useAxios(path);

class LoginScreen extends React.Component {
  static navigationOptions = {
      header: null,
    };

  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
    }
  }

  setToken = async token => {
    try {
      await AsyncStorage.setItem(tokenName, token);
    } catch (err) {
      console.log('err: ', err);
    }
  }

  handleSuccess = async ({ user, token }) => {
    await this.setToken(token);
    this.props.liftUser({ user, token });
    this.props.navigation.navigate('Main');
  }

  handleErr = errMsg => {
    console.log('signup failed with err: ', errMsg);
  }

  handleSubmit = () => {
    const { email, password } = this.state;
    postWithAxios({ email, password }).then(result => {
      result.data.user
        ? this.handleSuccess({ user: result.data.user, token: result.data.token })
        : this.handleErr(result.data._message);
    });
  }

  render() {
    const { email, password } = this.state;
    return (
      <View style={styles.page}>

        <View style={styles.circle}></View>

        <Text style={styles.title}>SKILLBUDDY</Text>

        <TextInput
          autoCapitalize='none'
          onChangeText={text => this.setState({ email: text })}
          placeholder='Email'
          style={styles.input}
          textContentType='emailAddress'
          value={email}
        />

        <TextInput
          autoCapitalize='none'
          onChangeText={text => this.setState({ password: text })}
          placeholder='Password'
          secureTextEntry={true}
          style={styles.input}
          textContentType='password'
          value={password}
        />

        <Touchable iosType='opacity' onPress={this.handleSubmit} style={styles.button}>
          <Text style={styles.text}>Log In</Text>
        </Touchable>

        <Touchable iosType='opacity' onPress={() => this.props.navigation.navigate('Signup')}>
          <Text style={styles.smallText}>Sign Up</Text>
        </Touchable>

        {/* <Button onPress={() => console.log('user: ', this.props.user)} title='props user' /> */}

      </View>
    );
  }
}

const styles = EStyleSheet.create({
  $margin: '40rem',
  $padding: '10rem',

  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '$orange',
  },
  circle: {
    height: '150rem',
    width: '150rem',
    backgroundColor: 'green',
    borderRadius: '100rem',
  },
  title: {
    marginTop: '$margin',
    marginBottom: '$margin',
    fontSize: '28rem',
    textAlign: 'center',
  },
  input: {
    width: '100%',
    marginTop: '$margin / 2',
    marginBottom: '$margin / 2',
    padding: '$padding',
    fontSize: '22rem',
    borderWidth: '1rem',
  },
  button: {
    width: '100%',
    padding: '$padding',
    backgroundColor: '$blue',
    fontSize: '25rem',
  },
  text: {
    color: '$white',
    fontSize: '22rem',
    textAlign: 'center',
  },
  smallText: {
    ...this.text,
    fontSize: '16rem',
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

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
