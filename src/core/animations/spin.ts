import { Animated, Easing } from "react-native";

import timing from ".";

const animationSpin = (anim: Animated.Value) => {
  timing({ anim, toValue: 1, duration: 5000, easing: Easing.linear }).start();

  return anim.interpolate({
    inputRange: [-1, 1],
    outputRange: ['0deg', '360deg']
  })
}

export default animationSpin