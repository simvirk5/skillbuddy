import React from 'react';
import { Text, TextInput, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import Touchable from '../../components/Touchable'

const PersonalInfo = props => {
  const { pagingHeight, personalInfo, updatePersonalInfo } = props;
  const handleUpdate = (key, text) => updatePersonalInfo({ ...personalInfo, [key]: text });
  return (
    <View style={[ styles.page, { height: pagingHeight } ]}>

      <Touchable iosType='opacity' onPress={props.backToLogin} style={styles.foo}>
        <Text style={{ color: 'yellow' }}>Back to Log In</Text>
      </Touchable>

      <Text style={styles.title}>Sign Up</Text>

      <TextInput
        onChangeText={text => handleUpdate('firstName', text)}
        placeholder='First Name'
        style={styles.input}
        textContentType='givenName'
        value={personalInfo.firstName}
      />

      <TextInput
        onChangeText={text => handleUpdate('lastName', text)}
        placeholder='Last Name'
        style={styles.input}
        textContentType='familyName'
        value={personalInfo.lastName}
      />

      <TextInput
        autoCapitalize='none'
        onChangeText={text => handleUpdate('email', text)}
        placeholder='Email'
        style={styles.input}
        textContentType='emailAddress'
        value={personalInfo.email}
      />

      <TextInput
        autoCapitalize='none'
        onChangeText={text => handleUpdate('password', text)}
        placeholder='Password'
        secureTextEntry={true}
        style={styles.input}
        textContentType='password'
        value={personalInfo.password}
      />

    </View>
  );
}

const styles = EStyleSheet.create({
  $margin: '40rem',
  $padding: '10rem',

  page: {
    // height: '100%',
    backgroundColor: 'aquamarine',
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
