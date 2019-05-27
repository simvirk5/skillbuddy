import React from 'react'
import { Text, View } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet';

import Touchable from './Touchable'

export default function CategoryTile(props) {
  const { backgroundColor, handlePress, title } = props
  return (
    <View style={styles.tileWrapper}>
      <Touchable iosType='opacity' onPress={handlePress} viewStyle={styles.tile}>
        <View style={[ styles.tileColorView, { backgroundColor } ]}></View>
        <Text style={styles.text}>{title}</Text>
      </Touchable>
    </View>
  )
}

const styles = EStyleSheet.create({
  $baseSizeUnit: '$width / 3',
  $tileheight: '$baseSizeUnit * 1.15',
  $tileWidth: '$baseSizeUnit * 1.05',
  $tileMargin: '$baseSizeUnit / 10',

  $fontBase: '16rem',

  tileWrapper: {
    marginLeft: '$tileMargin',
    marginRight: '$tileMargin',
    height: '$tileheight',
    width: '$tileWidth',
  },
  tile: {
    height: '100%',
    paddingBottom: '$fontBase',
    justifyContent: 'space-between',
    backgroundColor: 'grey',
    borderRadius: '10rem',
  },
  tileColorView: {
    height: '78%',
    width: '100%',
    borderTopLeftRadius: '10rem',
    borderTopRightRadius: '10rem',
    borderBottomRightRadius: '$tileWidth / 2.1',
    borderBottomLeftRadius: '$tileWidth / 2.1',
  },
  text: {
    width: '100%',
    textAlign: 'center',
    fontSize: '$fontBase',
    textTransform: 'uppercase',
  },
});
