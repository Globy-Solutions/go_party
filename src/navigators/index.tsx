import { Fragment } from 'react'

import { ButtonFB } from '@atoms'
import { Navigator } from '@core/navigator/CommonNavigator'
import { Container } from '@core/navigator/Container'
import { useThemeProvider } from '@core/theme/theme-provider'

import HomeStack from './HomeStack'

const RootNavigator = (): JSX.Element => {
  const theme = useThemeProvider()
  return (
    <Container theme={theme}>
      <Navigator>
        {
          [HomeStack].map((Module, i: number) => (
            <Fragment key={i}>{Module()}</Fragment>
          ))
        }
      </Navigator>
      <ButtonFB icon="chevron-up" onPress={() => console.log('test')} />
    </Container>
  )
}

export default RootNavigator