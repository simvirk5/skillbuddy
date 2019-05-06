import { Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const { height, width } = Dimensions.get('window');
const baseScreenWidth = 375; // from iPhoneX vertical

export const tabHeight = 80;

export const black = '#000';
export const blue = '#00F';
export const orange = '#FA0';
export const purple = '#80F';
export const white = '#FFF';

export default buildStyleSheet = () => {
  EStyleSheet.build({
    $rem: width / baseScreenWidth,

    $height: height,
    $width: width,

    $pagePadding: '40rem',
    $tabHeight: tabHeight,

    $black: black,
    $blue: blue,
    $orange: orange,
    $purple: purple,
    $white: white,

    // Skill Box
    $skillBoxWidth: width / 4,
    $skillBoxMarginLR: '$skillBoxWidth / 6',
    $skillBoxMarginTB: '$skillBoxMarginLR / 2',
  });
};
