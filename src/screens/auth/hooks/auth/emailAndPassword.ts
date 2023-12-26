import auth from '@react-native-firebase/auth';

import type { User } from '../../types/auth';

export const signInWithEmailAndPassword = async (email: string, password: string) => {
  try {
    const { user } = await auth().signInWithEmailAndPassword(email, password);
    return user;
  } catch (error) {
    throw error;
  }
};

export const createUserWithEmailAndPassword = async (email: string, password: string) => {
  try {
    const { user } = await auth().createUserWithEmailAndPassword(email, password);
    return user;
  } catch (error) {
    throw error;
  }
};

export const signOut = async () => {
  try {
    await auth().signOut();
  } catch (error) {
    throw error;
  }
};

export const signInAnonymously = async () => {
  try {
    return await auth()
      .signInAnonymously()
      .then(({ user }: { user: User }) => user)
      .catch((error: any) => {
        if (error.code === 'auth/operation-not-allowed') {
          console.log('Enable anonymous in your firebase console.');
          return false;
        }
        console.error(error);

        return false
      });
  } catch (error) {
    throw error;
  }
};