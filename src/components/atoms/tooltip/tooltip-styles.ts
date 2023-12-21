import { StyleSheet } from "react-native"

export const marginPosition = 45
const styles = StyleSheet.create({
  tooltip: {
    alignItems: 'center',
    position: 'absolute',
    padding: 5,
    borderRadius: 10,
  },
  top: {
    transform: [
      { translateY: -marginPosition }
    ]
  },
  bottom: {
    transform: [
      { translateY: marginPosition }
    ]
  },
  left: {
    transform: [
      { translateX: -marginPosition }
    ]
  },
  right: {
    transform: [
      { translateX: marginPosition }
    ]
  }
})

export default styles