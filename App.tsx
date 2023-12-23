import { RecoilRoot } from 'recoil';

import ThemeProvider from '@core/theme/theme-provider';
import RootNavigator from '@navigators';

import 'react-native-gesture-handler';

export default function App() {

  return (
    <RecoilRoot>
      <ThemeProvider>
        <RootNavigator />
      </ThemeProvider>
    </RecoilRoot>
  )
}
