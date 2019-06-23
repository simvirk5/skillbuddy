import React from 'react';
import { Text, View } from 'react-native';
import { withNavigation } from 'react-navigation'
import EStyleSheet from 'react-native-extended-stylesheet';

import BuddyTile_Circle from '../../components/BuddyTile_Circle'
import Touchable from '../../components/Touchable'

const ThreadRow = props => {
  return (
    <Touchable iosType='opacity' onPress={() => props.navigation.navigate('Thread')} viewStyle={styles.view}>

      <BuddyTile_Circle />

      <View style={styles.textWrapper}>
        <Text>Name</Text>
        <Text>Last message text here...</Text>
      </View>

    </Touchable>
  );
}

const styles = EStyleSheet.create({
  $rowPadding: '15rem',

  view: {
    paddingTop: '$rowPadding',
    paddingBottom: '$rowPadding',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  textWrapper: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'space-evenly',
  },
});

export default withNavigation(ThreadRow)
