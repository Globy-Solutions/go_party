import { Animated } from "react-native";

export type TimingProps = {
  anim: Animated.Value
  toValue: number
  duration: number
  delay?: number
  easing?: ((value: number) => number) | undefined;
}

const timing = ({ anim, toValue, duration, delay, easing }: TimingProps) => Animated.timing(anim, {
  delay,
  duration,
  easing,
  toValue,
  useNativeDriver: true
})

export default timing