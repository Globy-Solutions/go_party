import { useEffect, useState } from 'react'
import { Animated, View } from 'react-native'
import { useRecoilValue } from 'recoil'

import { Button } from '@atoms'
import animationShake from '@core/animations/shake'
import animationSpin from '@core/animations/spin'
import useOrientation from '@core/hooks/useOrientation'
import useNavigation from '@core/navigator/hooks/useNavigation'
import { useThemeProvider } from '@core/theme/theme-provider'
import { favorites } from '@providers/recoil/atoms/favorites'
import notifications from '@providers/recoil/atoms/notifications'
import { wp } from '@utils/_dimensions'
import styles from './header-styles'

import type { FC } from 'react'

const HeaderRight: FC<unknown> = () => {
  const anim = new Animated.Value(0)
  const themeIcon = new Animated.Value(0)
  const { navigate } = useNavigation()
  const orientation = useOrientation()
  const [favs, setFavs] = useState<number>(0)
  const myFavorites = useRecoilValue(favorites)
  const notifs = useRecoilValue(notifications)
  const { isDark, changeTheme, colors: { onPrimary }, fonts } = useThemeProvider()
  const [{ fontSize, width }, setStyle] = useState({
    fontSize: fonts.large.fontSize, width: wp(50)
  })

  useEffect(() => {
    setFavs(myFavorites.length)
  }, [myFavorites])
  useEffect(() => {
    const isPortrait = orientation === 'portrait';
    const style = {
      fontSize: isPortrait ? fonts.large.fontSize : fonts.extraLarge.fontSize,
      width: isPortrait ? wp(50) : wp(70)
    }
    setStyle(style);
  }, [orientation])

  return (
    <View style={[styles.tapbarRight, { width }]}>
      <Button
        variant="extraSmall"
        accessibilityLabel="Theme"
        iconVariant="feather"
        styleText={{ fontSize }}
        rightIcon={isDark ? 'moon' : 'sun'}
        onPress={() => changeTheme(!isDark)}
        style={{
          transform: [{
            rotate: animationSpin(themeIcon)
          }]
        }}
      />
      {
        favs > 0 && (
          <Button
            variant="extraSmall"
            accessibilityLabel="Favorites"
            rightIcon="heart"
            iconVariant="fontAwesome6"
            badge={String(favs)}
            styleText={{ color: onPrimary, fontSize }}
            onPress={() =>
              navigate('FavoritesScreen')
            }
          />)
      }
      <Button
        variant="extraSmall"
        accessibilityLabel="Notifications"
        iconVariant="material"
        style={{
          transform: [{
            rotate: myFavorites.length > 0 ? animationShake(anim) : '0deg'
          }]
        }}
        styleText={{ fontSize }}
        rightIcon={notifs.length > 0 ? 'bell-ring' : 'bell-off'}
        badge={notifs.length > 0 ? String(notifs.length) : undefined}
        onPress={() => console.log('Navigate to Notifications')}
      />
    </View>
  )
}

export default HeaderRight