import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { AntDesign, Entypo, EvilIcons, Feather, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';

const libraries = {
  AntDesign: AntDesign,
  Entypo: Entypo,
  EvilIcons: EvilIcons,
  Feather: Feather,
  FontAwesome: FontAwesome,
  MaterialCommunityIcons: MaterialCommunityIcons,
}

export default Icon = props => {
  const { color, library, name, size } = props;
  const iconColor = typeof color === 'string' ? color : color();
  const Library = libraries[library];
  return (
    <Library name={name} size={size} color={iconColor} />
  );
};
