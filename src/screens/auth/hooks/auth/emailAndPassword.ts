import auth from '@react-native-firebase/auth';

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
