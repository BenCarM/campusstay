import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getFunctions } from 'firebase/functions';

const firebaseConfig = {
  apiKey: "AIzaSyDCbAErb-KTNVd8qF9BSBbBI9DomQj4zg0",
  authDomain: "campusstay-66e91.firebaseapp.com",
  projectId: "campusstay-66e91",
  storageBucket: "campusstay-66e91.firebasestorage.app",
  messagingSenderId: "787973145994",
  appId: "1:787973145994:web:a8d654faa59244f28cf473",
  measurementId: "G-RTECZJLMED",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const functions = getFunctions(app);
export const googleProvider = new GoogleAuthProvider();
