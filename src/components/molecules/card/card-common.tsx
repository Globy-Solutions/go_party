/**
 * Represents a Common Card.
 * @constructor
 * @param {string} children - Display text.
 * @param {StyleProp} style - Visual styles.
 * @return {JSX.Element} Card
 */

import { Image, Pressable } from 'react-native'

import { Text } from '@atoms'
import { useThemeProvider } from '@core/theme/theme-provider'
import { capitalize } from '../../../utils/_capitalizeFirstLetter'
import styles from './card-styles'

import type { CardProps } from './card-props'

const CardCommon = ({
  children,
  style,
  name,
  picture,
  description,
  onPress
}: CardProps): JSX.Element => {
  const { colors: { primary, onBackground } } = useThemeProvider()

  return (
    <>
      <Text color={onBackground} variant="large" style={styles.title}>{capitalize(name)}</Text>
      <Pressable
        style={[
          styles.card,
          {
            backgroundColor: primary,
          },
          style
        ]}
        onPress={onPress}
      >
        
        <Image source={{ uri: picture }} />
        <Text color={onBackground} variant="normal">{description}</Text>
      </Pressable>
      {children}
    </>
  )
}

export default CardCommon