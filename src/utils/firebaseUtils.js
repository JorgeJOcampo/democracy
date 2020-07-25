import { auth, providers } from '../firebase';

export default {
  signIn: () => auth.signInWithPopup(providers.google),
  signOut: () => auth.signOut(),
  onChange: (callback) => auth.onAuthStateChanged(callback),
  getUserData: (uid) =>
    auth
      .getUser(uid)
      .then((userRecord) => userRecord)
      .catch((error) => {
        console.log('Error fetching user data:', error);
      })
};
