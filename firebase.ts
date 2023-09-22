import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: XXXX,
  authDomain: XXXX,
  projectId: XXXX,
  storageBucket: XXXX,
  messagingSenderId: XXXX,
  appId: XXXX,
};

// Initialize Firebase
const app = !firebase.apps.length
  ? initializeApp(firebaseConfig)
  : firebase.app();
const db = getFirestore(app);

export { db };
