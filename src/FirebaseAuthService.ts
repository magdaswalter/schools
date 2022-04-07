import firebase from "./FirebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
} from "firebase/auth";

const auth = firebase.auth;

const registerUser = (email: string, password: string) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

const loginUser = (email: string, password: string) => {
  return signInWithEmailAndPassword(auth, email, password);
};

const logoutUser = () => {
  return auth.signOut();
};

const loginWithGoogle = () => {
  const provider = new GoogleAuthProvider();

  return signInWithPopup(auth, provider);
};

const subscribeToAuthChanges = (handleAuthChange: any) => {
  onAuthStateChanged(auth, (user) => {
    handleAuthChange(user);
  });
};

const FirebaseAuthService = {
  registerUser,
  loginUser,
  logoutUser,
  sendPasswordResetEmail: (email: string) => {
    sendPasswordResetEmail(auth, email);
  },
  loginWithGoogle,
  subscribeToAuthChanges,
};

export default FirebaseAuthService;
