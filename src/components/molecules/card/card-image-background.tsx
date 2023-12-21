/**
 * Represents a Common Card.
 * @constructor
 * @param {string} children - Display text.
 * @param {StyleProp} style - Visual styles.
 * @return {JSX.Element} Card
 */

import { ImageBackground, Pressable, View } from 'react-native'

import { Text } from '@atoms'
import { useThemeProvider } from '@core/theme/theme-provider'
import { capitalize } from '../../../utils/_capitalizeFirstLetter'
import styles from './card-styles'

import type { CardProps } from './card-props'

const CardWithImageBackground = ({
  children,
  style,
  name,
  picture,
  onPress
}: CardProps): JSX.Element => {
  const { colors: { primary, onBackground } } = useThemeProvider()

  return (
    <Pressable onPress={onPress} accessibilityRole="button"
      style={[styles.card, { backgroundColor: primary }, style]}
    >
      <ImageBackground source={{ uri: picture }} style={styles.img} resizeMode="stretch">
        <View style={styles.imgBackground}>
          <Text color={onBackground} variant="large" style={styles.title}>{capitalize(name)}</Text>
          {children}
        </View>
      </ImageBackground>
    </Pressable>
  )
}

export default CardWithImageBackground