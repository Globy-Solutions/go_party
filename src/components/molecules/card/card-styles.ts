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
  img,
  card: {
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 10,
    flexDirection: 'column',
    marginVertical: 20,
    overflow: 'hidden',
    width: wp(90)
  },
  title: {
    textAlign: 'center',
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
    paddingVertical: 16,
  },
  imgBig: {
    ...img,
    height: wp(100),
  },
  imgBackground: {
    ...img,
    flexDirection: 'column',
    justifyContent: 'space-between',
  }
})

export default styles