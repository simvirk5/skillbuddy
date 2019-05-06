import React from 'react'
import { Text } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet';

import Icon from '../../components/Icon'
import Touchable from '../../components/Touchable'

export default class SkillBox extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: false,
    }
  }

  handlePress = () => {
    this.setState({ selected: !this.state.selected })
  }

  render() {
    const { selected } = this.state;
    const { iconColor, iconLibrary, iconName, iconSize, skill } = this.props;
    const bgColor = selected ? 'papayawhip' : 'white';
    return (
      <Touchable iosType='opacity' onPress={this.handlePress} viewStyle={[ styles.skillBox, { backgroundColor: bgColor } ]}>
        <Icon color={iconColor || 'orange'} library={iconLibrary || 'Entypo'} name={iconName || 'heart-outlined'} size={iconSize || 50} />
        <Text style={styles.text}>{skill}</Text>
      </Touchable>
    );
  }
}

const styles = EStyleSheet.create({
  skillBox: {
    width: '$skillBoxWidth',
    marginLeft: '$skillBoxMarginLR',
    marginRight: '$skillBoxMarginLR',
    marginTop: '$skillBoxMarginTB',
    marginBottom: '$skillBoxMarginTB',
    padding: '5rem',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '$white',
  },
  text: {
    color: 'green',
    fontSize: '14rem',
  },
});
