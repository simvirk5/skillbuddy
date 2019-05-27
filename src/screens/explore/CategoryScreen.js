import React from 'react';
import { Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

export default class CategoryScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <View style={styles.page}>
        <Text>I'm CategoryScreen</Text>
      </View>
    );
  }
}

const styles = EStyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
  },
});
