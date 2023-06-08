import {default as METRICS} from './metrics';

export const FONT_SIZE = {
  font6: METRICS.screenWidth * (6 / 365),
  font8: METRICS.screenWidth * (8 / 365),
  font10: METRICS.screenWidth * (10 / 365),
  font12: METRICS.screenWidth * (12 / 365),
  font14: METRICS.screenWidth * (14 / 365),
  font16: METRICS.screenWidth * (16 / 365),
  font20: METRICS.screenWidth * (20 / 365),
  font24: METRICS.screenWidth * (24 / 365),
};

export const FONT_WEIGHT = {
  full: '900',
  semi: '600',
  low: '400',
  bold: 'bold',
  normal: 'normal',
};

export const FONT_TYPE = {
  BLACK: 'JosefinSans-Bold',
  BOLD_ITALIC: 'JosefinSans-BoldItalic',
  EXTRALIGHT: 'JosefinSans-ExtraLight',
  EXTRALIGHT_ITALIC: 'JosefinSans-ExtraLightItalic',
  ITALIC: 'JosefinSans-Italic',
  LIGHT: 'JosefinSans-Light',
  LIGHT_ITALIC: 'JosefinSans-LightItalic',
  MEDIUM: 'JosefinSans-Medium',
  MEDIUM_ITALIC: 'JosefinSans-MediumItalic',
  REGULAR: 'JosefinSans-Regular',
  SEMI_BOLD: 'JosefinSans-SemiBold',
  SEMI_BOLD_ITALIC: 'JosefinSans-SemiBoldItalic',
  THIN: 'JosefinSans-Thin',
  THIN_ITALIC: 'JosefinSans-ThinItalic',
  // BLACK_ITALIC: 'JosefinSans-BlackItalic',
  // BOLD: 'JosefinSans-Bold',
  // EXTRABOLD: 'JosefinSans-ExtraBold',
  // EXTRABOLD_ITALIC: 'JosefinSans-ExtraBoldItalic',
};
