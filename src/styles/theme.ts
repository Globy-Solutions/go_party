import { Platform } from 'react-native';

import { getFontLineHeight, moderateScale } from '@utils/_dimensions';

import type { ThemeProps } from '@core/theme/theme-provider-props';

const scale: number = Platform.OS === 'ios' ? 1 : 0.8
const fontFamily: string = Platform.OS === 'ios' ? 'Arial Hebrew' : 'Mooli Regular',
  fonts = {
    extraLarge: {
      fontFamily,
      fontSize: moderateScale(26 * scale),
      fontWeight: 'bold',
      lineHeight: getFontLineHeight(21 * scale),
      textTransform: 'capitalize'
    },
    extraSmall: {
      fontFamily,
      fontSize: moderateScale(12 * scale),
      lineHeight: getFontLineHeight(12 * scale)
    },
    large: {
      fontFamily,
      fontSize: moderateScale(22 * scale),
      fontWeight: 'bold',
      lineHeight: getFontLineHeight(20 * scale),
      textTransform: 'capitalize'
    },
    normal: {
      fontFamily,
      fontSize: moderateScale(18 * scale),
      lineHeight: getFontLineHeight(15 * scale)
    },
    small: {
      fontFamily,
      fontSize: moderateScale(16 * scale),
      lineHeight: getFontLineHeight(14 * scale)
    }
  } as const;
export const defaults = {
  borderRadius: 15,
  elevation: 5,
  fonts
}
export const lightTheme: ThemeProps = {
  colors: {
    background: '#FFAF33',
    error: '#E3040B',
    onBackground: '#FF8633',
    onPrimary: '#ABA812',
    onSecondary: '#118B19',
    primary: '#F3EF19',
    secondary: '#77EF7E',
    success: '#199911',
    surface: '#F38F07',
    text: '#115B99',
    textInverted: '#074458',
    warn: '#FF5733'
  },
  dark: false,
  ...defaults
};

export const darkTheme: ThemeProps = {
  colors: {
    background: '#09265D',
    error: '#E74C3C',
    onBackground: '#34425E',
    onPrimary: '#884CD9',
    onSecondary: '#0E6655',
    primary: '#28025B',
    secondary: '#117A65',
    success: '#58D68D',
    surface: '#5B3CF8',
    text: '#D7F2FB',
    textInverted: '#fff',
    warn: '#EAAE07'
  },
  dark: true,
  ...defaults
};