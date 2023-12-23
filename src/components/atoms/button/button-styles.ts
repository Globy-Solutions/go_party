import { StyleSheet } from 'react-native';

export const factorSize = 30 // fix
const defaultButton = {
  alignContent: 'center',
  alignItems: 'center',
  borderWidth: 1,
  flexDirection: 'row',
  justifyContent: 'space-between',
  minHeight: factorSize,
  padding: 10
} as const
const styles = StyleSheet.create({
  badge: {
    bottom: 10,
    fontWeight: 'bold',
    left: 12,
    position: 'absolute',
    zIndex: 10
  },
  extraLarge: {
    ...defaultButton,
    width: '100%'
  },
  extraSmall: {
    ...defaultButton,
    
borderRadius: 50,
    

borderWidth: 0, 
    // TODO: fix this
justifyContent: 'center',
    padding: 0,
    width: factorSize
  },
  fb: {
    borderWidth: 0,
    bottom: factorSize,
    position: "absolute",
    right: 0,
    zIndex: 100
  },
  large: {
    ...defaultButton,
    width: '75%'
  },
  mr: { marginLeft: 10 },
  normal: {
    ...defaultButton,
    justifyContent: 'center'
  },
  small: {
    ...defaultButton,
    width: '25%'
  }
})

export default styles