import { useEffect, useState } from 'react'
import { View } from 'react-native'
import { useRecoilValue } from 'recoil'

import { Button } from '@atoms'
import useOrientation from '@core/hooks/useOrientation'
import useNavigation from '@core/navigator/hooks/useNavigation'
import { useThemeProvider } from '@core/theme/theme-provider'
import hookRoute from '@providers/recoil/atoms/router'
import styles from './header-styles'

import type { Route } from '@providers/recoil/atoms/router'
import type { FC } from 'react'

const HeaderLeft: FC<unknown> = () => {
  const { goBack } = useNavigation()
  const { fonts } = useThemeProvider()
  const orientation = useOrientation()
  const [btnBack, setBtnBack] = useState<boolean>(true)
  const { name } = useRecoilValue<Route>(hookRoute)
  const [{ fontSize }, setStyle] = useState({
    fontSize: fonts.large.fontSize,
  })

  useEffect(() => {
    setBtnBack(Boolean(!name))
  }, [name])
  useEffect(() => {
    const isPortrait = orientation === 'portrait';
    const style = {
      fontSize: isPortrait ? fonts.large.fontSize : fonts.extraLarge.fontSize,
    }
    setStyle(style);
  }, [orientation])

  return (
    <View style={styles.tapbarRight}>
      {btnBack && (<Button
        variant="extraSmall"
        accessibilityLabel="Go Back"
        iconVariant="feather"
        styleText={{ fontSize }}
        leftIcon="chevron-left"
        disabled={btnBack}
        onPress={() => goBack()}
      />)}

    </View>
  )
}

export default HeaderLeft