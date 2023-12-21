import { useEffect, useState } from 'react'
import { View } from 'react-native'
import { useRecoilValue } from 'recoil'

import { Button } from '@atoms'
import useNavigation from '@core/navigator/hooks/useNavigation'
import { useThemeProvider } from '@core/theme/theme-provider'
import { favorites } from '@providers/recoil/atoms/favorites'
import styles from './header-styles'

import type { FC } from 'react'

const HeaderRight: FC<unknown> = () => {
  const { navigate } = useNavigation()
  const myFavorites = useRecoilValue(favorites)
  const [favs, setFavs] = useState<number>(0)
  const { isDark, changeTheme, colors: { onPrimary }, fonts } = useThemeProvider()
  const fontSize = fonts.extraLarge.fontSize

  useEffect(() => {    
    setFavs(myFavorites.length)
  }, [myFavorites])

  return (
    <View style={styles.tapbarRight}>
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
    </View>
  )
}

export default HeaderRight