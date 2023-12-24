import auth from '@react-native-firebase/auth';
import { useEffect, useState } from 'react';
import { Button, Text, View } from 'react-native';
import onFacebookButtonPress from './hooks/auth/facebook';
import onGoogleButtonPress from './hooks/auth/google';

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
        <Button
          title="Facebook Sign-In"
          onPress={() => onFacebookButtonPress().then(() => console.log('Signed in with Facebook!'))}
        />
        <Button
          title="Google Sign-In"
          onPress={() => onGoogleButtonPress().then(() => console.log('Signed in with Google!'))}
        />
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