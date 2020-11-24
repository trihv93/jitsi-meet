import { Dimensions } from 'react-native';

export const { width, height } = Dimensions.get('window');

export const SCREEN_WIDTH = width < height ? width : height;
export const SCREEN_HEIGHT = width < height ? height : width;

export const DividerHeightBold = 0.5;
export const DividerHeight = 0.3;
export const DividerHeightLight = 0.3;
export const HitSlopDefault = { top: 10, bottom: 10, left: 10, right: 10 };

export const MediumButton = {
  width: 300,
  height: 44,
};

export const RadiusSize = {
  dpVerySmall: 3,
  dpSmall: 5,
  dpSemiMedium: 8,
  dpMedium: 10,
  dpVeryMedium: 15,
  dpLarge: 20,
  dpVeryLarge: 30,
};

export const MarginSize = {
  dpHalf: 2.5,
  dpSingle: 5,
  dpSingleX2: 7.5,
  dpDouble: 10,
  dp3X: 15,
  dp3X2: 17.5,
  dp4X: 20,
  dp5X: 25,
  dp6X: 30,
  dp7X: 35,
  dp8X: 40,
  dp9X: 45,
  dp10X: 50,
  dp10X2: 55,
  dp10X3: 57.5,
  dp11X: 60,
  dp11X2: 65,
  dp12X: 70,
  dp15X: 75,
  dp16X: 80,
  dp18X: 90,
  dp20X: 100,
  freeSize: (SCREEN_WIDTH - SCREEN_WIDTH / 1.8) / 2,
};

export const FontSize = {
  title: 24,
  pageTitles: 18,
  paragraphText: 14,
  listTitles: 14,
  importantText: 16,
  captions: 14,
  secondaryText: 14,
  buttonTitle: 14,
  tabsText: 14,
  textInput: 16,
  normal: 12,
  small: 10,
  chatMessage: 15,
  smallTitle: 11,
};

export const FontWeight = {
  normal: '400',
  medium: '600',
  bold: 'bold',
};
