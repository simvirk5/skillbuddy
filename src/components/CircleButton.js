import React from 'react'
import { View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import Icon from './Icon'
import Touchable from './Touchable'

export default function CircleButton(props) {
  const { chevronColor, chevronDirection, chevronSize, circleColor, circleSize, handlePress} = props;
  const circleStyles = {
    height: circleSize || 60,
    width: circleSize || 60,
    backgroundColor: circleColor || 'orange',
  }
  const direction = {
    up: 'chevron-up',
    down: 'chevron-down',
    left: 'chevron-left',
    right: 'chevron-right',
  }
  return (
    <Touchable iosType='opacity' onPress={handlePress}>
      <View style={[ styles.circle, circleStyles ]}>
        <Icon color={chevronColor || 'white'} library='Entypo' name={direction[chevronDirection]} size={chevronSize || 50} />
      </View>
    </Touchable>
  )
}

const styles = EStyleSheet.create({
  circle: {
    height: 60,
    width: 60,
    marginTop: '$pagePadding',
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '$purple',
    borderRadius: 30,
  },
});
