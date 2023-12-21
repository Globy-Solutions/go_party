import { Platform } from 'react-native';

import { getFontLineHeight, moderateScale } from '@utils/_dimensions';

import type { ThemeProps } from '@core/theme/theme-provider-props';

const scale: number = Platform.OS === 'ios' ? 1 : 0.8
const fontFamily: string = Platform.OS === 'ios' ? 'Arial Hebrew' : 'Mooli Regular',
  fonts = {
    normal: {
      fontFamily,
      fontSize: moderateScale(18 * scale),
      lineHeight: getFontLineHeight(15 * scale)
    },
    extraLarge: {
      fontFamily,
      fontSize: moderateScale(26 * scale),
      fontWeight: 'bold',
      lineHeight: getFontLineHeight(21 * scale),
      textTransform: 'capitalize'
    },
    large: {
      fontFamily,
      fontSize: moderateScale(22 * scale),
      fontWeight: 'bold',
      lineHeight: getFontLineHeight(20 * scale),
      textTransform: 'capitalize'
    },
    small: {
      fontFamily,
      fontSize: moderateScale(16 * scale),
      lineHeight: getFontLineHeight(14 * scale)
    },
    extraSmall: {
      fontFamily,
      fontSize: moderateScale(12 * scale),
      lineHeight: getFontLineHeight(12 * scale)
    }
  } as const;
export const defaults = {
  borderRadius: 15,
  elevation: 5,
  fonts
}
export const lightTheme: ThemeProps = {
  dark: false,
  colors: {
    background: '#FFAF33',
    onBackground: '#FF8633',
    text: '#115B99',
    textInverted: '#074458',
    primary: '#F3EF19',
    onPrimary: '#ABA812',
    secondary: '#77EF7E',
    onSecondary: '#118B19',
    surface: '#F38F07',
    error: '#E3040B',
    warn: '#FF5733',
    success: '#199911',
  },
  ...defaults
};

export const darkTheme: ThemeProps = {
  dark: true,
  colors: {
    background: '#09265D',
    onBackground: '#34425E',
    text: '#D7F2FB',
    textInverted: '#fff',
    primary: '#28025B',
    onPrimary: '#884CD9',
    secondary: '#117A65',
    onSecondary: '#0E6655',
    surface: '#5B3CF8',
    error: '#E74C3C',
    warn: '#EAAE07',
    success: '#58D68D',
  },
  ...defaults
};