/**
 * Interface for Icon.
 *
 * @interface
 */

import type { VariantFont } from '@core/theme/theme-provider-props';
import type { IconButtonProps } from 'react-native-vector-icons/Icon';
import type { ColorValue } from "react-native/Libraries/StyleSheet/StyleSheet";

enum VariantIcon {
  feather,
  material,
  fontAwesome6
}

export type IconProps = IconButtonProps & {
  variant?: keyof typeof VariantFont
  type?: keyof typeof VariantIcon
  color?: ColorValue
}