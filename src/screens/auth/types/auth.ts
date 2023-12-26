import type { FirebaseAuthTypes } from "@react-native-firebase/auth";

export type User = {
  displayName: FirebaseAuthTypes.User['displayName'];
  photoURL?: FirebaseAuthTypes.User['photoURL'];
  uid: FirebaseAuthTypes.User['uid'];
  refreshToken?: string;
}

export type UserCredential = (email: string, password: string) => Promise<FirebaseAuthTypes.UserCredential>;