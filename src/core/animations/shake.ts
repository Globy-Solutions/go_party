import { Animated } from "react-native";

import timing from ".";

const animationShake = (anim: Animated.Value, iterations?: number) => {
  Animated.loop(
    Animated.sequence([
      timing({ anim, toValue: -1, duration: 100, delay: 500 }),
      timing({ anim, toValue: 1, duration: 100 }),
      timing({ anim, toValue: -1, duration: 100 }),
      timing({ anim, toValue: 1, duration: 100 }),
      timing({ anim, toValue: 0, duration: 100 }),
    ]), {
    iterations: iterations ?? 7
  }
  ).start();

  return anim.interpolate({
    inputRange: [-1, 1],
    outputRange: ['-20deg', '20deg']
  })
}

export default animationShake