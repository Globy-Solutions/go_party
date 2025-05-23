import notifee, { EventType } from '@notifee/react-native';
import messaging from '@react-native-firebase/messaging';
import { Platform } from 'react-native';
import { PERMISSIONS, request } from 'react-native-permissions';
import { useRecoilState } from 'recoil';

import notifications, { type NotificationProps } from '@providers/recoil/atoms/notifications';

if (Platform.OS === 'android') {
  const { PermissionsAndroid } = require('react-native');
  PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS)
}

export const getFcmToken = async () => {
  let token = null;
  await checkApplicationNotificationPermission();
  await registerAppWithFCM();
  try {
    token = await messaging().getToken();
    console.log('getFcmToken--> ', token)
  } catch (error) {
    console.log('getFcmToken Device Token error ', error)
  }
  return token;
};

//method was called on  user register with firebase FCM for notification
export async function registerAppWithFCM() {
  console.log(
    'registerAppWithFCM status',
    messaging().isDeviceRegisteredForRemoteMessages
  );
  if (!messaging().isDeviceRegisteredForRemoteMessages) {
    await messaging()
      .registerDeviceForRemoteMessages()
      .then(status => {
        console.log('registerDeviceForRemoteMessages status', status)
      })
      .catch(error => {
        console.log('registerDeviceForRemoteMessages error ', error)
      })
  }
}

//method was called on un register the user from firebase for stoping receiving notifications
export async function unRegisterAppWithFCM() {
  console.log(
    'unRegisterAppWithFCM status',
    messaging().isDeviceRegisteredForRemoteMessages
  );

  if (messaging().isDeviceRegisteredForRemoteMessages) {
    await messaging()
      .unregisterDeviceForRemoteMessages()
      .then(status => {
        console.log('unregisterDeviceForRemoteMessages status', status)
      })
      .catch(error => {
        console.log('unregisterDeviceForRemoteMessages error ', error)
      })
  }

  await messaging().deleteToken();
  console.log(
    'unRegisterAppWithFCM status',
    messaging().isDeviceRegisteredForRemoteMessages
  )
}

export const checkApplicationNotificationPermission = async () => {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('Authorization status:', authStatus)
  }
  request(PERMISSIONS.ANDROID.POST_NOTIFICATIONS)
    .then((result: unknown) => {
      console.log('POST_NOTIFICATIONS status:', result)
    })
    .catch((error: unknown) => {
      console.log('POST_NOTIFICATIONS error ', error)
    })
};

//method was called to listener events from firebase for notification triger
export function registerListenerWithFCM() {
  const [_, setNotifications] = useRecoilState<NotificationProps[]>(notifications)
  const unsubscribe = messaging().onMessage(async (remoteMessage) => {
    console.log('onMessage Received : ', JSON.stringify(remoteMessage));
    const { title, body } = remoteMessage?.notification || {};

    if (title && body) {
      setNotifications((prev) => [...prev, { title, body, from: remoteMessage?.from ?? 'FCM' }]);
      onDisplayNotification(title, body, remoteMessage?.data)
    }
  });
  notifee.onForegroundEvent(({ type, detail }: { type: EventType, detail: any }) => {
    switch (type) {
      case EventType.DISMISSED:
        console.log('User dismissed notification', detail.notification);
        break;
      case EventType.PRESS:
        console.log('User pressed notification', detail.notification);
        // if (detail?.notification?.data?.clickAction) {
        //   onNotificationClickActionHandling(
        //     detail.notification.data.clickAction
        //   );
        // }
        break
    }
  });

  messaging().onNotificationOpenedApp(async remoteMessage => {
    console.log(
      'onNotificationOpenedApp Received',
      JSON.stringify(remoteMessage)
    );
    // if (remoteMessage?.data?.clickAction) {
    //   onNotificationClickActionHandling(remoteMessage.data.clickAction);
    // }
  });
  // Check whether an initial notification is available
  messaging()
    .getInitialNotification()
    .then(remoteMessage => {
      if (remoteMessage) {
        console.log(
          'Notification caused app to open from quit state:',
          remoteMessage.notification
        )
      }
    });

  return unsubscribe
}

//method was called to display notification
async function onDisplayNotification(title: string, body: string, data: { [key: string]: string | object; } | undefined) {
  console.log('onDisplayNotification: ', JSON.stringify(data));

  // Request permissions (required for iOS)
  await notifee.requestPermission();
  // Create a channel (required for Android)
  const channelId = await notifee.createChannel({
    id: 'default',
    name: 'Default Channel'
  });

  // Display a notification
  await notifee.displayNotification({
    title, body, data,
    android: {
      channelId,
      // pressAction is needed if you want the notification to open the app when pressed
      pressAction: {
        id: 'default'
      }
    }
  })
}