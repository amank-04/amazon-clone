import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDQv4wagmT5AnAGu0lGBLCnhshdIyEX9V0",
  authDomain: "clone-398311.firebaseapp.com",
  projectId: "amazon-clone-398311",
  storageBucket: "amazon-clone-398311.appspot.com",
  messagingSenderId: "610593707379",
  appId: "1:610593707379:web:b5d69d3d5c1d42956d2106",
};

// Initialize Firebase
const app = !firebase.apps.length
  ? initializeApp(firebaseConfig)
  : firebase.app();
const db = getFirestore(app);

export { db };
