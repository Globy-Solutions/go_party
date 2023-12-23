import { StyleSheet } from "react-native"

export const marginPosition = 45
const styles = StyleSheet.create({
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
  },
  tooltip: {
    alignItems: 'center',
    borderRadius: 10,
    padding: 5,
    position: 'absolute'
  },
  top: {
    transform: [
      { translateY: -marginPosition }
    ]
  }
})

export default styles