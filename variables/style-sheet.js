import { Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const { height, width } = Dimensions.get('window');
const baseScreenWidth = 375; // from iPhoneX vertical

export const tabHeight = 80;

// export const black = '#000';
// export const blackBG = '#141414';
// export const blueAccent = '#88BBC8';
// export const blueGradDark = '#0a002a';
// export const greenAccent = '#93DBA5';
// export const greyDark = '#333';
// export const greyMedium = '#666';
// export const greyMediumDark = '#444';
// export const purpleAccent = '#94A1D1';
// export const red = '#de2100';
// export const white = '#FFF';
// export const yellow = '#FF0';

export default buildStyleSheet = () => {
  EStyleSheet.build({
    $rem: width / baseScreenWidth,

    // $height: height,
    // $width: width,
    // $tabHeight: tabHeight,
    //
    // $black: black,
    // $blackBG: blackBG,
    // $blueAccent: blueAccent,
    // $blueGradDark: blueGradDark,
    // $greenAccent: greenAccent,
    // $greyDark: greyDark,
    // $greyMedium: greyMedium,
    // $greyMediumDark: greyMediumDark,
    // $purpleAccent: purpleAccent,
    // $red: red,
    // $white: white,
    // $yellow: yellow,
  });
};
