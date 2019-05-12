import React from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import Touchable from '../../components/Touchable'

const UserDesc = props => {
  const { pagingHeight, personalInfo, updatePersonalInfo } = props;
  return (
    <View style={[ styles.page, { height: pagingHeight } ]}>

      <Text style={styles.text}>Hey ~~~NAME~~~, give us a quick bio of who you are as a person!</Text>
      <View style={styles.inputWrapper}>
        <TextInput
          autoCapitalize='none'
          maxLength={400}
          multiline={true}
          onChangeText={text => updatePersonalInfo({ ...personalInfo, description: text })}
          placeholder='Tell us about yourself...'
          style={styles.input}
          textContentType='none'
          value={personalInfo.description}
        />
      </View>
      <Text style={styles.text}>Upload an image of yourself</Text>
      <View style={styles.picPlaceholder}></View>

    </View>
  );
}

const styles = EStyleSheet.create({
  page: {
    paddingLeft: '40rem',
    paddingRight: '40rem',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow',
  },
  text: {
    marginBottom: '30rem',
    fontSize: '22rem',
  },
  inputWrapper: {
    width: '100%',
  },
  input: {
    height: '280rem',
    marginBottom: '30rem',
    padding: '20rem',
    paddingTop: '15rem',
    paddingBottom: '15rem',
    backgroundColor: 'lightgrey',
    fontSize: '16rem',
  },
  picPlaceholder: {
    height: 80,
    width: 80,
    backgroundColor: 'green',
    borderRadius: 40,
  },
});

export default UserDesc;
