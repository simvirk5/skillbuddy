import React from 'react';
import { Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import Touchable from './Touchable'

export default props => {
  const { handlePress } = props
  return (
    <View style={styles.view}>
      <Touchable iosType='opacity' onPress={handlePress} style={styles.circle}></Touchable>
    </View>
  );
}

const styles = EStyleSheet.create({
  $circleSize: '80rem',

  view: {
    justifyContent: 'center',
  },
  circle: {
    height: '$circleSize',
    width: '$circleSize',
    marginLeft: '10rem',
    marginRight: '10rem',
    backgroundColor: 'yellow',
    borderRadius: '$circleSize / 2',
  }
});
