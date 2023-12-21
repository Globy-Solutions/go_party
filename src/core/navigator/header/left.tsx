import { useEffect, useState } from 'react'
import { View } from 'react-native'
import { useRecoilValue } from 'recoil'

import { Button } from '@atoms'
import useNavigation from '@core/navigator/hooks/useNavigation'
import { useThemeProvider } from '@core/theme/theme-provider'
import hookRoute from '@providers/recoil/atoms/router'
import styles from './header-styles'

import type { Route } from '@providers/recoil/atoms/router'
import type { FC } from 'react'

const HeaderLeft: FC<unknown> = () => {
  const { goBack } = useNavigation()
  const { fonts } = useThemeProvider()
  const [btnBack, setBtnBack] = useState<boolean>(true)
  const { name } = useRecoilValue<Route>(hookRoute)
  const fontSize = fonts.extraLarge.fontSize

  useEffect(() => {
    setBtnBack(Boolean(name && name === 'HomeScreen'))
  }, [name])

  return (
    <View style={styles.tapbarRight}>
      <Button
        variant="extraSmall"
        accessibilityLabel="Go Back"
        iconVariant="feather"
        styleText={{ fontSize }}
        leftIcon="chevron-left"
        disabled={btnBack}
        onPress={() => goBack()}
      />

    </View>
  )
}

export default HeaderLeft