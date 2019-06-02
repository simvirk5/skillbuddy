import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import BuddyTile_Large from '../../components/BuddyTile_Large'

export default class CategoryScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    const category = this.props.navigation.getParam('category', 'Getting category...');
    return (
      <View style={styles.page}>

        <View style={[ styles.header, { backgroundColor: category.backgroundColor } ]}>
          <Text style={[ styles.text, styles.headerText ]}>{category.category.toUpperCase()}</Text>
        </View>

        <Text>Search bar here</Text>

        <ScrollView>

          <Text>Category 1</Text>
          <ScrollView horizontal>
            <BuddyTile_Large />
            <BuddyTile_Large />
            <BuddyTile_Large />
            <BuddyTile_Large />
          </ScrollView>

          <Text>Category 2</Text>
          <ScrollView horizontal>
            <BuddyTile_Large />
            <BuddyTile_Large />
            <BuddyTile_Large />
            <BuddyTile_Large />
          </ScrollView>

          <Text>Category 3</Text>
          <ScrollView horizontal>
            <BuddyTile_Large />
            <BuddyTile_Large />
            <BuddyTile_Large />
            <BuddyTile_Large />
          </ScrollView>

          <Text>Category 4</Text>
          <ScrollView horizontal>
            <BuddyTile_Large />
            <BuddyTile_Large />
            <BuddyTile_Large />
            <BuddyTile_Large />
          </ScrollView>

        </ScrollView>
      </View>
    );
  }
}

const styles = EStyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
  },
  header: {
    height: '$height / 8',
    paddingBottom: '20rem',
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'lightsalmon',
  },
  text: {
    //
  },
  headerText: {
    color: '$white',
    fontSize: '24rem',
  },
});
