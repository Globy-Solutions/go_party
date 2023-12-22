import { Text, View } from 'react-native';
import { useRecoilValue } from 'recoil';

import notifications from '@providers/recoil/atoms/notifications';
import styles from './notifications-styles';

import type { NavigatorProps } from '@core/navigator/types';
import type { FC } from 'react';

import 'react-native-gesture-handler';

const NotificationScreen: FC<NavigatorProps> = (): JSX.Element => {
  const notifs = useRecoilValue(notifications)

  return (
    <View style={styles.container}>
      <Text style={styles.text_bold}>Push Notification In React Native</Text>
      {notifs.map(({ body, title }, index) => (
        <View key={index} style={styles.container}>
          <Text style={styles.text_bold}>{body}</Text>
          <Text>{title}</Text>
        </View>
      ))}
    </View>
  )
}

export default NotificationScreen
