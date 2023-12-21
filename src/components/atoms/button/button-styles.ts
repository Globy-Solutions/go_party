import { wp } from '@utils/_dimensions';
import { StyleSheet } from 'react-native';

console.log('button-styles.ts', wp(30));
export const factorSize = 30 // fix
const defaultButton = {
  flexDirection: 'row',
  alignItems: 'center',
  alignContent: 'center',
  borderWidth: 1,
  justifyContent: 'space-between',
  padding: 10,
  minHeight: factorSize,
} as const
const styles = StyleSheet.create({
  mr: { marginLeft: 10 },
  badge: {
    position: 'absolute',
    bottom: 9,
    left: 10,
    zIndex: 10,
  },
  fb: {
    borderWidth: 0,
    position: "absolute",
    bottom: factorSize,
    right: 0,
    zIndex: 100,
  },
  normal: {
    ...defaultButton,
    justifyContent: 'center'
  },
  extraLarge: {
    ...defaultButton,
    width: '100%'
  },
  large: {
    ...defaultButton,
    width: '75%'
  },
  small: {
    ...defaultButton,
    width: '25%'
  },
  extraSmall: {
    ...defaultButton,
    padding: 0,
    width: factorSize, // TODO: fix this
    justifyContent: 'center',
    borderRadius: 50,
    borderWidth: 0,
  }
})

export default styles