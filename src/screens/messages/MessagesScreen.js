import React from 'react';
import { Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import AllMessages from './AllMessages'
import MessagesHeader from './MessagesHeader'

export default props => {
  return (
    <View style={styles.view}>
      <MessagesHeader foo='bar' />
      <AllMessages />
    </View>
  );
}

const styles = EStyleSheet.create({
  view: {
    flex: 1,
    // justifyContent: 'center',
  },
});
