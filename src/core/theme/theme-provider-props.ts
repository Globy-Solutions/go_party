import type { Dispatch, ReactNode, SetStateAction } from "react";
import type { ColorValue } from "react-native/Libraries/StyleSheet/StyleSheet";
import type { TextStyle } from "react-native/Libraries/StyleSheet/StyleSheetTypes";

export enum VariantFont {
  normal = 'normal',
  large = 'large',
  extraLarge = 'extraLarge',
  small = 'small',
  extraSmall = 'extraSmall',
}

export type ThemeProps = {
  dark: boolean;
  colors: {
    background?: ColorValue
    onBackground?: ColorValue
    text?: ColorValue
    textInverted?: ColorValue
    primary?: ColorValue
    onPrimary?: ColorValue
    secondary?: ColorValue
    onSecondary?: ColorValue
    surface?: ColorValue
    error?: ColorValue
    warn?: ColorValue
    success?: ColorValue
  };
  borderRadius: number;
  fonts: {
    [key in VariantFont]: TextStyle;
  };
  elevation?: number;
};

export type ThemeDataProps = ThemeProps & {
  isDark: boolean
  changeTheme: Dispatch<SetStateAction<boolean>>
}
export type ThemeProviderProps = {
  children: ReactNode
}