import { User } from 'firebase/auth';
import { setDoc, doc } from 'firebase/firestore';
import { db } from '@/firebaseConfig';

export const saveUserData = async (user: User) => {
  const userRef = doc(db, 'users', user.uid);

  await setDoc(userRef, {
    uid: user.uid,
    email: user.email,
    displayName: user.displayName,
    photoURL: user.photoURL,
    lastLogin: new Date(),
  }, { merge: true });
};