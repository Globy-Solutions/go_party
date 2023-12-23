import { hp, wp } from '@utils/_dimensions'
import { StyleSheet } from 'react-native'

const img = {
  alignItems: 'center',
  height: hp(40),
  justifyContent: 'center',
  resizeMode: 'cover',
  width: '100%'
} as const
const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 10,
    flexDirection: 'column',
    marginVertical: 20,
    overflow: 'hidden',
    width: wp(90)
  },
  img,
  imgBackground: {
    ...img,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  imgBig: {
    ...img,
    height: wp(100)
  },
  title: {
    paddingVertical: 16,
    textAlign: 'center',
    textShadowColor: '#000',
    textShadowOffset: { height: 1, width: 1 },
    textShadowRadius: 2
  }
})

export default styles