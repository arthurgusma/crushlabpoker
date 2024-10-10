import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '@/firebaseConfig';
import { saveUserData } from '@/services/user/userService';
import { redirectHomeIfLoggedIn } from '../actions';
import { ProvidedUserData } from '@/context/UserContext/types';

export const handleGoogleSignIn = async (): Promise<ProvidedUserData | undefined> => {
  const provider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result?.user;
    if (user) {
      await saveUserData(user);
    }
    sessionStorage.setItem('user', JSON.stringify(user));
    redirectHomeIfLoggedIn();

    return user.providerData[0]; 
  } catch (error) {
    console.error('Error signing in with Google:', error);
  } 
};