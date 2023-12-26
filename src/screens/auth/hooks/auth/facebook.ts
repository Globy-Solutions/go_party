import auth from '@react-native-firebase/auth';
import { Platform } from 'react-native';
import { AccessToken, AuthenticationToken, LoginManager, Profile, Settings } from 'react-native-fbsdk-next';
import { sha256 } from 'react-native-sha256';

import type { FirebaseAuthTypes } from '@react-native-firebase/auth';

Settings.initializeSDK();
Settings.setAppID('1769844176808577');

let onFacebookButtonPress: () => Promise<FirebaseAuthTypes.UserCredential>;

const currentProfile = Profile.getCurrentProfile().then(
  function(currentProfile) {
    if (currentProfile) {
      console.log("The current logged user is: " +
        currentProfile.name
        + ". His profile id is: " +
        currentProfile.userID
      );
    }
  }
);

if (Platform.OS === 'android') {
  onFacebookButtonPress = async (): Promise<FirebaseAuthTypes.UserCredential> => {
    // Attempt login with permissions
    const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);
  
    if (result.isCancelled) {
      throw 'User cancelled the login process';
    }
  
    // Once signed in, get the users AccessToken
    const data = await AccessToken.getCurrentAccessToken();
  
    if (!data) {
      throw 'Something went wrong obtaining access token';
    }
  
    // Create a Firebase credential with the AccessToken
    const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);
  
    // Sign-in the user with the credential
    return auth().signInWithCredential(facebookCredential);
  }
} else {
  onFacebookButtonPress = async (): Promise<FirebaseAuthTypes.UserCredential> => {
    // Create a nonce and the corresponding
    // sha256 hash of the nonce
    const nonce = '123456';
    const nonceSha256 = await sha256(nonce);
    // Attempt login with permissions and limited login
    const result = await LoginManager.logInWithPermissions(
      ['public_profile', 'email'],
      'limited',
      nonceSha256,
    );
  
    if (result.isCancelled) {
      throw 'User cancelled the login process';
    }
  
    // Once signed in, get the users AuthenticationToken
    const data = await AuthenticationToken.getAuthenticationTokenIOS();
  
    if (!data) {
      throw 'Something went wrong obtaining authentication token';
    }
  
    // Create a Firebase credential with the AuthenticationToken
    // and the nonce (Firebase will validates the hash against the nonce)
    const facebookCredential = auth.FacebookAuthProvider.credential(data.authenticationToken, nonce);
  
    // Sign-in the user with the credential
    return auth().signInWithCredential(facebookCredential);
  }
}


export default onFacebookButtonPress;