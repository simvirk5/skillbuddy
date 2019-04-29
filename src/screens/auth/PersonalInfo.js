import React from 'react';
import { AsyncStorage, Button, Text, TextInput, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import Touchable from '../../components/Touchable'

const PersonalInfo = props => {
  const { pagingHeight, state, updateState } = props;
  return (
    <View style={[ styles.page, { height: pagingHeight } ]}>

      <Touchable iosType='opacity' onPress={props.backToLogin} style={styles.foo}>
        <Text>Back to Log In</Text>
      </Touchable>

      <Text style={styles.title}>Sign Up</Text>

      <TextInput
        onChangeText={text => updateState(text, 'firstName')}
        placeholder='First Name'
        style={styles.input}
        textContentType='givenName'
        value={state.firstName}
      />

      <TextInput
        onChangeText={text => updateState(text, 'lastName')}
        placeholder='Last Name'
        style={styles.input}
        textContentType='familyName'
        value={state.lastName}
      />

      <TextInput
        autoCapitalize='none'
        onChangeText={text => updateState(text, 'email')}
        placeholder='Email'
        style={styles.input}
        textContentType='emailAddress'
        value={state.email}
      />

      <TextInput
        autoCapitalize='none'
        onChangeText={text => updateState(text, 'password')}
        placeholder='Password'
        secureTextEntry={true}
        style={styles.input}
        textContentType='password'
        value={state.password}
      />

    </View>
  );
}

const styles = EStyleSheet.create({
  $margin: '40rem',
  $padding: '10rem',

  page: {
    // height: '100%',
    backgroundColor: 'blue',
  },
  foo: {
    backgroundColor: 'grey',
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
  text: {
    // fontSize: '22rem'
  },
});

export default PersonalInfo;
