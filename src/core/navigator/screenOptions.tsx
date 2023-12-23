

import HeaderLeft from './header/left'
import HeaderRight from './header/right'

import type { NativeStackNavigationOptions } from '@react-navigation/native-stack/lib/typescript/src/types'
import type { StackNavigationOptions, TransitionSpec } from '@react-navigation/stack/lib/typescript/src/types'

type HeaderScreenProps = {
  title?: NativeStackNavigationOptions['headerTitle']
}

const config = {
  animation: 'spring',
  config: {
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
    stiffness: 1000
  }
} as TransitionSpec;

const rootHeaderScreen = ({ title }: HeaderScreenProps): Partial<StackNavigationOptions> => ({
  headerLeft: HeaderLeft,
  headerMode: 'screen',
  headerRight: HeaderRight,
  headerTitle: title ?? '',
  presentation: 'modal',
  transitionSpec: {
    close: config,
    open: config
  }
})

export default rootHeaderScreen
