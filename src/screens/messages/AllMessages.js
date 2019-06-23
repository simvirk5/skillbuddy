import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import ThreadRow from './ThreadRow'

export default props => {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>Messages</Text>
      <ScrollView style={styles.scroll}>
        <ThreadRow />
        <ThreadRow />
        <ThreadRow />
        <ThreadRow />
        <ThreadRow />
        <ThreadRow />
        <ThreadRow />
      </ScrollView>
    </View>
  );
}

const styles = EStyleSheet.create({
  $padding: '20rem',

  view: {
    paddingTop: '$padding',
    flex: 1,
  },
  text: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
  scroll: {
    marginTop: '$padding',
    flex: 1,
  },
});
