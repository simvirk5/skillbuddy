import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import SkillsCategorySection from './SkillsCategorySection'
import Touchable from '../../components/Touchable'

export default function SkillsCategory(props) {
  const { bgColor, headingText, pagingHeight, skillsSections } = props;
  const sections = skillsSections.map((section, i) => {
    return <SkillsCategorySection
      key={i + section.title}
      bgColor={section.bgColor}
      subCategories={section.subCategories}
      title={section.title}
    />
  });
  return (
    <View style={[ styles.page, { height: pagingHeight, backgroundColor: bgColor } ]}>

      <View style={styles.headingWrapper}>
        <Text style={styles.text}>{headingText}</Text>
      </View>

      <ScrollView>
        {sections}
      </ScrollView>

    </View>
  );
}

const styles = EStyleSheet.create({
  page: {
    paddingTop: '$pagePadding',
  },
  headingWrapper: {
    width: '100%',
    paddingLeft: '10%',
    paddingRight: '10%',
    marginBottom: '15rem',
    alignSelf: 'center',
  },
  text: {
    color: '$white',
    fontSize: '22rem',
  },
});
