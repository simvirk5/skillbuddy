import React from 'react'
import { Text, View } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet';

import SkillBox from './SkillBox'

export default function SkillsCategorySection(props) {
  const { bgColor, subCategories, title } = props;
  const subCategoryBoxes = subCategories.map((category,  i) => {
    return <SkillBox key={i + category} skill={category} />
  })
  return (
    <View style={[ styles.skillsSection, { backgroundColor: bgColor } ]}>
      <Text style={styles.title}>{title} Skills</Text>

      <View style={styles.skillsWrapper}>
        {subCategoryBoxes}
      </View>

      <Text style={styles.viewAll}>View All</Text>

    </View>
  );
}

const styles = EStyleSheet.create({
  skillsSection: {
    // paddingTop: '12rem',
    // paddingBottom: '12rem',
    backgroundColor: 'lightblue',
  },
  title: {
    marginLeft: '$skillBoxMarginLR',
    marginTop: '12rem',
    marginBottom: '10rem',
    color: 'green',
    fontSize: '22rem',
  },
  skillsWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  viewAll: {
    marginTop: '5rem',
    marginBottom: '5rem',
    alignSelf: 'flex-end',
    marginRight: '$skillBoxMarginLR',
  },
});
