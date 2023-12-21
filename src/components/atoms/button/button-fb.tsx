
/**
 * Floating action button
 *
 * @component
 */

import { Button } from '@atoms';
import { useThemeProvider } from '@core/theme/theme-provider';
import styles, { factorSize } from './button-styles';

import type { FC } from 'react';
import type { PressableProps } from 'react-native/Libraries/Components/Pressable/Pressable';
import type { ButtonIconProps } from './button-props';

type Props = ButtonIconProps & {
  onPress: PressableProps['onPress']
}

const ButtonFB: FC<Props> = ({ color, icon, onPress }: Props): JSX.Element => {
  const { colors: { secondary } } = useThemeProvider()

  return (
    <Button rightIcon={icon}
      iconVariant="fontAwesome6" onPress={onPress} style={styles.fb}
      styleText={{ color: color ?? secondary, fontSize: factorSize }}
    />
  )
}

export default ButtonFB