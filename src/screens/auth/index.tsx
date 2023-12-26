import auth from '@react-native-firebase/auth';
import { useEffect, useState } from 'react';
import { Button, Image, Text, View } from 'react-native';
import { signInAnonymously, signOut } from './hooks/auth/emailAndPassword';
import onFacebookButtonPress from './hooks/auth/facebook';
import onGoogleButtonPress from './hooks/auth/google';

import type { NavigatorProps } from '@core/navigator/types';
import type { FC } from 'react';
import type { User } from './types/auth';

const AuthScreen: FC<NavigatorProps> = (): JSX.Element => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState<User>();

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged((user) => {
      setUser(user as User);
      if (initializing) setInitializing(false)
    });
    return subscriber
  }, []);

  if (!user?.uid) {

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
        <Button
          title="Guest Sign-In"
          onPress={() => signInAnonymously().then(() => console.log('User signed anonymously!'))}
        />
      </View>
    );
  }

  return (
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      <Text>Welcome {user?.displayName}</Text>
      {user?.photoURL && (<Image source={{ uri: user?.photoURL }} />)}
      <Button
        title="Sign-Out"
        onPress={signOut}
      />
    </View>
  );
}

export default AuthScreen