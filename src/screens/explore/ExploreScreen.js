import React from 'react';
import { Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import CategoryTile from '../../components/CategoryTile'

// PLACEHOLDER CATEGORY NAMES
const categories = [
  { category: 'arts', backgroundColor: 'orange' },
  { category: 'tech', backgroundColor: 'pink' },
  { category: 'fashion', backgroundColor: 'lightsalmon' },
  { category: 'outdoors', backgroundColor: 'green' },
  { category: 'sports', backgroundColor: 'goldenrod' },
  { category: 'music', backgroundColor: 'teal' },
]
// PLACEHOLDER LOCATION
const userLocation = 'Seattle, WA';

export default class ExploreScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    const location = userLocation;
    const tiles = categories.map((category, i) => (
      <CategoryTile
        backgroundColor={category.backgroundColor}
        handlePress={() => this.props.navigation.navigate('Category')}
        key={i + category.category}
        title={category.category}
      />
    ))
    return (
      <View style={styles.page}>

        <View style={styles.headerWrapper}>
          <Text style={[ styles.text, styles.header ]}>Find skillbuddies near</Text>
          <Text style={[ styles.text, styles.header, styles.location ]}>{location}</Text>
        </View>

        <View style={styles.tileWrapper}>
          {tiles}
        </View>

      </View>
    );
  }
}

const styles = EStyleSheet.create({
  page: {
    paddingTop: '50rem',
    flex: 1,
    backgroundColor: 'palevioletred',
  },
  headerWrapper: {
    //
  },
  text: {
    color: '$white',
    fontSize: '20rem',
  },
  header: {
    fontSize: '22rem',
    textAlign: 'center',
  },
  location: {
    textDecorationLine: 'underline',
  },
  tileWrapper: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    // alignItems: 'center',
    alignContent: 'space-around',
    backgroundColor: 'rebeccapurple'
  },
});
