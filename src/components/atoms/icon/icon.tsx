/**
 * A convenience component for creating buttons with an icon on the left side.
 * Any Text, TouchableHighlight or TouchableWithoutFeedback property in addition to these:
 * @param {string} color, Text and icon color, use iconStyle or nest a Text component if you need different colors - white.
 * @param {string} name, Name of Icon.
 * @param {number} size, default by Icon.
 * @param {style} iconStyle Styles applied to the icon only, good for setting margins or a different color. Note: use iconStyle for margins or expect unstable behaviour.	{marginRight: 10}
 * @param {string} type, Type of Icon, default FontAwesome5.
 * @param {string} variant, Variant of Icon, default = 'default'.
 * @param {string} backgroundColor, Background color of the button..
 * @returns {Component} Returns Icon component.
 */

import { Platform } from 'react-native'

import Feather from 'react-native-vector-icons/Feather'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'
import MaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons'

import { Loader } from '@atoms'
import { useThemeProvider } from '@core/theme/theme-provider'

import type { FC } from 'react'
import type { ColorValue } from 'react-native/Libraries/StyleSheet/StyleSheet'
import type { IconProps } from './icon-props'

const TypeIcon: FC<IconProps> = ({ type, ...props }: IconProps) => {
  switch (type) {
    case 'material':
      return <MaterialCommunity {...props} />;
    case 'fontAwesome6':
      return <FontAwesome6 {...props} />;
    case 'feather':
      return <Feather {...props} />;
    default:
      return <FontAwesome5 {...props} />
  }
}
const Icon: FC<IconProps> = ({
  iconStyle, variant = Platform.OS === 'ios' ? 'small' : 'large',
  backgroundColor = 'transparent',
  color, size, type, name = 'question-circle'
}: IconProps): JSX.Element => {
  const { colors: { textInverted }, fonts } = useThemeProvider()
  const props = {
    name,
    margin: 0,
    padding: 0,
    backgroundColor,
    color: (color ?? textInverted) as ColorValue,
    size: size || fonts[variant].fontSize,
  }

  return name === 'spinner' ?
    (<Loader color={props.color} />) :
    (<TypeIcon type={type} {...props} style={iconStyle} />)
}

export default Icon