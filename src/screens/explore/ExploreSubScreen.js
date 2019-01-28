import React from 'react';
import { Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

export default props => {
  return (
    <View style={styles.view}>
      <Text>I'm Explore Sub Screen</Text>
    </View>
  );
}

const styles = EStyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'center',
  },
});
