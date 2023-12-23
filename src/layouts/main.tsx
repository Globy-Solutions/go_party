/**
 * Main Layout Screen
 *
 * @screen
 */

import { useEffect } from 'react';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Loader } from '@atoms';
import { getFcmToken, registerListenerWithFCM } from '@utils/_fcmHelper';

import type { LayoutProps } from "./types";

const MainLayout = ({ children, loading = true }: LayoutProps): JSX.Element => {
  const insets = useSafeAreaInsets();

  useEffect(() => {
    getFcmToken();
    return registerListenerWithFCM()
  }, []);

  return loading ?
    (<Loader />) : (
      <View
        style={{
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
          flex: 1,
        }}>
        {children}
      </View>
    )
}


export default MainLayout