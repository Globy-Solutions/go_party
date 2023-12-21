/**
 * Represent a Pressable Button.
 * @constructor
 * @param {ButtonProps} props
 * @return {JSX.Element} Button
 */

import { useMemo } from 'react'
import { Animated, Platform, Pressable } from 'react-native'

import { Icon, Text } from '@atoms'
import { useThemeProvider } from '@core/theme/theme-provider'
import styles from './button-styles'

import { VariantFont } from '@core/theme/theme-provider-props'
import type { FC } from 'react'
import type ButtonProps from './button-props'
import type { MemoIconProps } from './button-props'

const AnimatedButton = Animated.createAnimatedComponent(Pressable)

const Button: FC<ButtonProps> = ({
  children,
  title,
  style,
  styleText,
  leftIcon,
  rightIcon,
  badge,
  loading,
  disabled,
  iconVariant,
  variant = 'normal',
  ...props
}: ButtonProps): JSX.Element => {
  const { borderRadius, fonts,
    colors: { textInverted, secondary } } = useThemeProvider();
  const color = styleText?.color ?? textInverted;
  const size: number = styleText?.fontSize ?? fonts[
    variant ?? Platform.OS === 'ios' ? 'large' : 'extraLarge'
  ].fontSize as number;

  const IconMemo = (
    { icon, style }: MemoIconProps
  ) => useMemo(
    () => (<Icon name={icon} type={iconVariant}
      color={color} style={style} size={size} />),
    [leftIcon, rightIcon]);

  return (
    <AnimatedButton role="button"
      accessibilityRole="button"
      accessibilityLabel={title ?? 'Button'}
      style={[
        { borderRadius, borderColor: color },
        styles[variant as keyof typeof VariantFont],
        style,
      ]}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (<IconMemo icon="spinner" />) : (<>
        {badge && (<>
          <Text style={[styles.badge, {
            color: secondary,
            fontSize: size / 1.5
          }]}>{badge}</Text>
        </>)}
        {leftIcon && (<IconMemo icon={leftIcon} style={styles.mr} />)}
        {title && (<Text style={[styles.mr, styleText]}>{title}</Text>)}
        {rightIcon && (<IconMemo icon={rightIcon} />)}
      </>)}
    </AnimatedButton>
  )
}

export default Button