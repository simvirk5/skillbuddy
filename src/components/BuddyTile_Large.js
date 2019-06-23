import React from 'react'
import { Text, View } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet';

export default function BuddyTile_Large(props) {
  return (
    <View style={styles.wrapper}>
      <Text>I'm BuddyTile_Large</Text>
    </View>
  );
}

const styles = EStyleSheet.create({
  $size: '$width * 0.7',

  wrapper: {
    height: '$size * 1.4',
    width: '$size',
    margin: '$size / 12',
    backgroundColor: 'lightgrey',
  },
});
