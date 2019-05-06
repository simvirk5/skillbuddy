import React from 'react'
import { Text, View } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet';

import Touchable from '../../components/Touchable'

export default class Congrats extends React.Component {
  static navigationOptions = {
      header: null,
    };

  render() {
    return (
      <View style={styles.page}>
        <Text>Congrats on becoming a skill buddy</Text>

        <Text>Finish creating profile(doesnt work right now) or...</Text>

        <Touchable iosType='opacity' onPress={() => this.props.navigation.navigate('Main')} viewStyle={styles.homeButton}>
          <Text style={styles.text}>Go find some skill buddies!</Text>
        </Touchable>
      </View>
    );
  }
}

const styles = EStyleSheet.create({
  page: {
    paddingBottom: '$pagePadding',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '$orange',
  },
  homeButton: {
    marginTop: '10rem',
    marginBottom: '10rem',
    padding: '10rem',
    backgroundColor: 'blue',
  },
  text: {
    color: '$white',
    fontSize: '20rem',
  },
});
