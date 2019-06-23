import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { withNavigation } from 'react-navigation'
import EStyleSheet from 'react-native-extended-stylesheet';

import BuddyTile_Circle from '../../components/BuddyTile_Circle'

const MessagesHeader = props => {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>Send a messge to your recently added buddies</Text>
      <ScrollView horizontal style={styles.scroll}>
        <BuddyTile_Circle handlePress={() => props.navigation.navigate('Thread')} />
        <BuddyTile_Circle handlePress={() => props.navigation.navigate('Thread')} />
        <BuddyTile_Circle handlePress={() => props.navigation.navigate('Thread')} />
        <BuddyTile_Circle handlePress={() => props.navigation.navigate('Thread')} />
        <BuddyTile_Circle handlePress={() => props.navigation.navigate('Thread')} />
        <BuddyTile_Circle handlePress={() => props.navigation.navigate('Thread')} />
        <BuddyTile_Circle handlePress={() => props.navigation.navigate('Thread')} />
        <BuddyTile_Circle handlePress={() => props.navigation.navigate('Thread')} />
        <BuddyTile_Circle handlePress={() => props.navigation.navigate('Thread')} />
        <BuddyTile_Circle handlePress={() => props.navigation.navigate('Thread')} />

      </ScrollView>
    </View>
  );
}

const styles = EStyleSheet.create({
  view: {
    paddingTop: '60rem',
    justifyContent: 'flex-end',
    backgroundColor: 'blueviolet',
  },
  text: {
    marginLeft: '15rem',
  },
  scroll: {
    marginTop: '15rem',
    marginBottom: '15rem',
    paddingLeft: '10rem',
  },
});

export default withNavigation(MessagesHeader)
