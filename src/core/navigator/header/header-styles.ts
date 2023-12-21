import { wp } from "@utils/_dimensions";
import { StyleSheet } from "react-native";

const padding: number = 10;
const minHeight: number = 40;
const config = {
  width: wp(50),
  marginTop: -20, // TODO: fix this
  flexDirection: 'row',
  justifyContent: 'space-between',
} as const
const styles = StyleSheet.create({
  tapbarRight: {
    ...config,
    minHeight,
    maxHeight: minHeight,
    paddingRight: padding,
  }
})

export default styles
