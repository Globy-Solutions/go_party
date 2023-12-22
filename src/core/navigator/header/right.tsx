import { useEffect, useState } from 'react'
import { View } from 'react-native'
import { useRecoilValue } from 'recoil'

import { Button } from '@atoms'
import useOrientation from '@core/hooks/useOrientation'
import useNavigation from '@core/navigator/hooks/useNavigation'
import { useThemeProvider } from '@core/theme/theme-provider'
import { favorites } from '@providers/recoil/atoms/favorites'
import notifications from '@providers/recoil/atoms/notifications'
import { wp } from '@utils/_dimensions'
import styles from './header-styles'

import type { FC } from 'react'

const HeaderRight: FC<unknown> = () => {
  const { navigate } = useNavigation()
  const orientation = useOrientation()
  const [favs, setFavs] = useState<number>(0)
  const myFavorites = useRecoilValue(favorites)
  const notifs = useRecoilValue(notifications)
  const { isDark, changeTheme, colors: { onPrimary }, fonts } = useThemeProvider()
  const [{ fontSize, width }, setStyle] = useState({
    fontSize: fonts.small.fontSize, width: wp(50)
  })

  useEffect(() => {
    setFavs(myFavorites.length)
  }, [myFavorites])
  useEffect(() => {
    const isPortrait = orientation === 'portrait';
    const style = {
      fontSize: isPortrait ? fonts.small.fontSize : fonts.large.fontSize,
      width: isPortrait ? wp(50) :wp(70)
    }
    setStyle(style);
    console.log(style);
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
      />
      {
        favs > 0 && (
          <Button
            variant="extraSmall"
            accessibilityLabel="Favorites"
            rightIcon="heart"
            iconVariant="fontAwesome6"
            badge={String(favs)}
            styleText={{ fontSize, color: onPrimary }}
            onPress={() =>
              navigate('FavoritesScreen')
            }
          />)
      }
      <Button
        variant="extraSmall"
        accessibilityLabel="Notifications"
        iconVariant="feather"
        styleText={{ fontSize }}
        rightIcon={notifs.length > 0 ? 'bell' : 'bell-off'}
        badge={notifs.length > 0 ? String(notifs.length) : undefined}
        onPress={() => changeTheme(!isDark)}
      />
    </View>
  )
}

export default HeaderRight