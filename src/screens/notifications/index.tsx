import { Animated, Text, View } from 'react-native';
import { useRecoilValue } from 'recoil';

import { Button } from '@atoms';
import animationShake from '@core/animations/shake';
import notifications from '@providers/recoil/atoms/notifications';
import styles from './notifications-styles';

import type { NavigatorProps } from '@core/navigator/types';
import type { FC } from 'react';

import 'react-native-gesture-handler';

const NotificationScreen: FC<NavigatorProps> = (): JSX.Element => {
  const notifs = useRecoilValue(notifications)
  const anim = new Animated.Value(0)

  return (
    <View style={styles.container}>
      <Text style={styles.text_bold}>Push Notification In React Native</Text>
      <Button
        variant="extraSmall"
        accessibilityLabel="Notifications"
        iconVariant="material"
        style={{
          marginVertical: 20,
          transform: [{
            rotate: animationShake(anim)
          }]
        }}
        styleText={{ fontSize: 33 }}
        rightIcon='bell-ring'
        badge={notifs.length > 0 ? String(notifs.length) : undefined}
        onPress={() => console.log('Navigate to Notifications')}
      />
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
