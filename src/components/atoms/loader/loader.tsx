/**
 * Represents a Loader UI component.
 * @constructor
 * @param {string} size - Size of the indicator..
 * @param {string} color - The foreground color of the spinner.
 * @return {JSX.Element} Loader
 */

import { ActivityIndicator as AI } from 'react-native'

import { useThemeProvider } from '@core/theme/theme-provider'
import styles from './loader-styles'

import type { FC } from 'react'
import type { ActivityIndicatorProps } from 'react-native/Libraries/Components/ActivityIndicator/ActivityIndicator'

const Loader: FC<ActivityIndicatorProps> = ({ color, size = 'small' }: ActivityIndicatorProps): JSX.Element => {
  const { colors: { text } } = useThemeProvider()

  return (
    <AI size={size} color={color ?? text} style={styles.loader} aria-label="Loading" />
  )
}

export default Loader
