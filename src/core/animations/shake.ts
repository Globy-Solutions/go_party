import { Animated } from "react-native";

import timing from ".";

const animationShake = (anim: Animated.Value, iterations?: number) => {
  Animated.loop(
    Animated.sequence([
      timing({ anim, delay: 500, duration: 100, toValue: -1 }),
      timing({ anim, duration: 100, toValue: 1 }),
      timing({ anim, duration: 100, toValue: -1 }),
      timing({ anim, duration: 100, toValue: 1 }),
      timing({ anim, duration: 100, toValue: 0 })
    ]), {
    iterations: iterations ?? 5
  }
  ).start();

  return anim.interpolate({
    inputRange: [-1, 1],
    outputRange: ['-20deg', '20deg']
  })
}

export default animationShake