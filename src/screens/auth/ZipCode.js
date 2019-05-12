import React from 'react'
import { Text, TextInput, View } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet';

export default function ZipCode(props) {
  const { pagingHeight, postalCode, updateZipCode } = props;
  return (
    <View style={[ styles.page, { height: pagingHeight } ]}>
      <Text style={styles.text}>In which zip code would you like to search for skill buddies?</Text>

      <TextInput
        autoCapitalize='none'
        keyboardType='number-pad'
        maxLength={5}
        onChangeText={zip => updateZipCode(zip)}
        placeholder='ex. 55555'
        style={styles.input}
        textContentType='postalCode'
        value={postalCode}
      />
    </View>
  );
}

const styles = EStyleSheet.create({
  page: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'darkcyan',
  },
  text: {
    marginBottom: '30rem',
    fontSize: '22rem',
  },
  input: {
    padding: '15rem',
    fontSize: '20rem',
    backgroundColor: 'lightgrey',
  },
});
