import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import BuddyTile_Large from '../../components/BuddyTile_Large'
import Touchable from '../../components/Touchable'

export default class CategoryScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      category: '',
      showCategoryMenu: false,
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.navigation.getParam('category') !== this.props.navigation.getParam('category')) {
      const { category } = this.props.navigation.getParam('category')
      this.setState({ category, showCategoryMenu: false })
      this.mainScrollView.scrollTo({ y: 0, animated: false })
      this.scrollView1.scrollTo({ x: 0, animated: false })
      this.scrollView2.scrollTo({ x: 0, animated: false })
      this.scrollView3.scrollTo({ x: 0, animated: false })
      this.scrollView4.scrollTo({ x: 0, animated: false })
}
  }

  render() {
    const { showCategoryMenu } = this.state;
    const category = this.props.navigation.getParam('category', 'Getting category...')
    const categoryTitle = category.category
    const categories = this.props.navigation.getParam('categories')
    const categoryMenuItems = categories.filter(item => item.category !== category.category).map((category, i) => (
      <Touchable
        iosType='opacity'
        key={i + category.category}
        onPress={() => this.props.navigation.navigate('Category', { category } )}
        viewStyle={[ styles.categoryMenuItem, { backgroundColor: category.backgroundColor } ]}
      >
        <Text style={styles.headerText}>{category.category.toUpperCase()}</Text>
      </Touchable>
    ))
    const categoryMenu = (
      <View style={styles.categoryMenu}>
        {categoryMenuItems}
      </View>
    );
    return (
      <View style={styles.page}>

        <Touchable
          iosType='opacity'
          onPress={() => this.setState({ showCategoryMenu: !showCategoryMenu })}
          viewStyle={[ styles.header, { backgroundColor: category.backgroundColor } ]}
        >
          <Text style={[ styles.text, styles.headerText ]}>{category.category.toUpperCase()}</Text>
        </Touchable>
        {showCategoryMenu && categoryMenu}

        <Text>Search bar here</Text>

        <ScrollView ref={scrollView => this.mainScrollView = scrollView}>

          <Text>{categoryTitle} Category 1</Text>
          <ScrollView horizontal  ref={scrollView => this.scrollView1 = scrollView}>
            <BuddyTile_Large />
            <BuddyTile_Large />
            <BuddyTile_Large />
            <BuddyTile_Large />
          </ScrollView>

          <Text>{categoryTitle} Category 2</Text>
          <ScrollView horizontal  ref={scrollView => this.scrollView2 = scrollView}>
            <BuddyTile_Large />
            <BuddyTile_Large />
            <BuddyTile_Large />
            <BuddyTile_Large />
          </ScrollView>

          <Text>{categoryTitle} Category 3</Text>
          <ScrollView horizontal  ref={scrollView => this.scrollView3 = scrollView}>
            <BuddyTile_Large />
            <BuddyTile_Large />
            <BuddyTile_Large />
            <BuddyTile_Large />
          </ScrollView>

          <Text>{categoryTitle} Category 4</Text>
          <ScrollView horizontal  ref={scrollView => this.scrollView4 = scrollView}>
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
  categoryMenuItem: {
    height: '$height / 10',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    //
  },
  headerText: {
    color: '$white',
    fontSize: '24rem',
  },
  categoryMenu: {
    width: '$width',
    position: 'absolute',
    top: '$height / 8',
    zIndex: 100,
  },
});
