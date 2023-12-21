import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { useRecoilValue } from 'recoil';

import notifications from '@providers/recoil/atoms/notifications';
import { getFcmToken, registerListenerWithFCM } from '@utils/_fcmHelper';

import type { NavigatorProps } from '@core/navigator/types';
import type { FC } from 'react';

import 'react-native-gesture-handler';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text_bold: {
    fontWeight: '600',
    color: 'black',
    padding: 10
  }
})

const NotificationScreen: FC<NavigatorProps> = (): JSX.Element => {
  const [icon, setFcmToken] = useState<string>('bell-off')
  const notifs = useRecoilValue(notifications)
  const unsubscribe = registerListenerWithFCM();

  useEffect(() => {
    getFcmToken();
    return unsubscribe
  }, []);
  useEffect(() => {
    if (notifs.length > 0) {
      setFcmToken('bell')
    }
  }, [notifs]);

  return (
    <View style={styles.container}>
      <Text style={styles.text_bold}>Push Notification In React Native</Text>
      <Feather name={icon} size={30} color="black" />
    </View>
  )
}

export default NotificationScreen
