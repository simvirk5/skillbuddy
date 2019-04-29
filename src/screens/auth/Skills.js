import React from 'react';
import { AsyncStorage, Button, Text, TextInput, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import Touchable from '../../components/Touchable'

const PersonalInfo = props => {
  const { pagingHeight } = props;
  return (
    <View style={[ styles.page, { height: pagingHeight } ]}>

      <Text>Skill 1</Text>
      <Text>Skill 2</Text>
      <Text>Skill 3</Text>

    </View>
  );
}

const styles = EStyleSheet.create({
  page: {
    // height: '100%',
    backgroundColor: 'purple',
  },
});

export default PersonalInfo;
