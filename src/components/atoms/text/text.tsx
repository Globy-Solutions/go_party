/**
 * Represents a Text component.
 * @constructor
 * @param {ReactNode} children - Display text.
 * @param {string} color - Color of Text.
 * @param {string} variant - Variant of Text.
 * @param {StyleProp<TextStyle>} style - Style of Text.
 * @param {Function} onPress - OnPress event of Text.
 * 
 * @return {JSX.Element} Text
 */

import { useMemo } from 'react'
import { Platform, Text as RNText } from 'react-native'

import { useThemeProvider } from '@core/theme/theme-provider'
import styles from './text-styles'

import type { FC } from 'react'
import type { TextProps } from './text-props'

const Text: FC<TextProps> = ({
  children, color, style,
  variant = 'normal', onPress }
  : TextProps): JSX.Element => {
  const { colors: { text }, fonts } = useThemeProvider()
  const textStyle = useMemo(() => ({
    color: color ?? text,
    ...Platform.select({
      ios: fonts[variant ?? 'large'],
      android: fonts[variant ?? 'extraLarge']
    })
  }), [color, variant])

  return (<RNText
    aria-label={typeof children === 'string' ? children : 'Text'}
    accessibilityRole="text"
    onPress={onPress}
    style={[
      styles.text,
      textStyle,
      style
    ]}
  >{children}</RNText>)
}

export default Text