import auth from '@react-native-firebase/auth';
import { useEffect, useState } from 'react';
import { Text, View } from 'react-native';

import type { NavigatorProps } from '@core/navigator/types';
import type { FC } from 'react';

const AuthScreen: FC<NavigatorProps> = (): JSX.Element => {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState<unknown>();

  // Handle user state changes
  const onAuthStateChanged = (user: unknown) => {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (!user) {
    return (
      <View>
        <Text>Login</Text>
      </View>
    );
  }

  return (
    <View>
      <Text>Welcome {user.email}</Text>
    </View>
  );
}

export default AuthScreen