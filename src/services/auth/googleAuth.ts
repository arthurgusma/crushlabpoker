import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '@/firebaseConfig';
import { saveUserData } from '@/services/user/userService';

export const handleGoogleSignIn = async () => {
  const provider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result?.user;
    if (user) {
      await saveUserData(user);
    }
  } catch (error) {
    console.error('Error signing in with Google:', error);
  }
};