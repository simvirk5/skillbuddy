import React from 'react';
import { Button, Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import Touchable from '../../components/Touchable'

const UserDesc = props => {
  const { pagingHeight } = props;
  return (
    <View style={[ styles.page, { height: pagingHeight } ]}>

      <Text>User desc</Text>
      <Text>pic here</Text>

    </View>
  );
}

const styles = EStyleSheet.create({
  page: {
    // height: '100%',
    backgroundColor: 'yellow',
  },
});

export default UserDesc;
