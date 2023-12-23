/**
 * Main Layout Screen
 *
 * @screen
 */

import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Loader } from '@atoms';

import type { LayoutProps } from "./types";

const MainLayout = ({ children, loading = true }: LayoutProps): JSX.Element => {
  const insets = useSafeAreaInsets();

  return loading ?
    (<Loader />) : (
      <View
        style={{
          flex: 1,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
          paddingTop: insets.top
        }}>
        {children}
      </View>
    )
}


export default MainLayout