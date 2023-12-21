import { RecoilRoot } from 'recoil';

import { ThemeProvider } from '@core/theme/theme-provider';
import RootNavigator from '@navigators';

import 'react-native-gesture-handler';

const App = () => {

  return (
    <RecoilRoot>
      <ThemeProvider>
        <RootNavigator />
      </ThemeProvider>
    </RecoilRoot>
  )
}

export default App
