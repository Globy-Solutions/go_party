import { useEffect, useState } from 'react'
import { TouchableOpacity, View } from 'react-native'

import { Text } from '@atoms'
import { useThemeProvider } from '@core/theme/theme-provider'
import styles, { marginPosition } from './tooltip-styles'

import type { FC } from 'react'
import type { TooltipProps } from './tooltip-props'

const Tooltip: FC<TooltipProps> = ({ children, color, text, position = 'top' }: TooltipProps) => {
  const { colors: { onBackground } } = useThemeProvider()
  const [isVisible, setIsVisible] = useState(false)
  const left = position === 'left'
  const vertical = left || position === 'right'

  useEffect(() => {
    if (isVisible) {
      setTimeout(() => {
        setIsVisible(false)
      }, 2000)
    }
  }, [isVisible])

  const handlePress = () => {
    setIsVisible(!isVisible)
  }

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={{ position: 'relative' }}>
        {children}
        {isVisible && (
          <View style={[
            styles.tooltip,
            styles[position ?? 'bottom'],
            {
              backgroundColor: onBackground,
              width: text.length * 7 + marginPosition,
            },
            vertical &&
            {
              transform: [
                {
                  translateX: position &&
                    (left ? -1 : 3) * (text.length + marginPosition)
                },
              ],
            }
          ]}>
            <Text color={color}>{text}</Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  )
}

export default Tooltip