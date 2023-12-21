import type { ReactNode } from 'react';
import type { ColorValue, TextStyle, ViewStyle } from 'react-native';
import type { PressableProps } from 'react-native/Libraries/Components/Pressable/Pressable';
import type { IconProps } from '../icon/icon-props';

interface ButtonProps extends PressableProps {
  avatar?: string
  badge?: string
  children?: ReactNode | ReactNode[];
  accessibilityLabel?: string
  variant?: IconProps['variant']
  iconVariant?: IconProps['type']
  leftIcon?: IconProps['name']
  rightIcon?: IconProps['name']
  title?: string
  style?: ViewStyle | ViewStyle[]
  styleText?: TextStyle
  disabled?: boolean
  loading?: boolean
  onPress: PressableProps['onPress']
}
export type ButtonIconProps = {
  icon: ButtonProps['leftIcon'] | ButtonProps['rightIcon']
  style?: IconProps['style']
  color?: ColorValue
}
export type MemoIconProps = { icon: string; style?: IconProps['style'] }
export default ButtonProps