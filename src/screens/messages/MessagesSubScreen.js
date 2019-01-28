import React from 'react';
import { Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

export default props => {
  return (
    <View>
      <Text>I'm Messages Sub Screen</Text>
    </View>
  );
}

const styles = EStyleSheet.create({
  text: {
    // fontSize: '22rem'
  },
});
