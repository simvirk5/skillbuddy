import React from 'react';
import { Button, Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

export default props => {
  return (
    <View>
      <Text>I'm Login Sub Screen</Text>
      <Button title='Go To Tab Nav....' onPress={() => props.navigation.navigate('Tabs')} />
    </View>
  );
}

const styles = EStyleSheet.create({
  text: {
    // fontSize: '22rem'
  },
});
