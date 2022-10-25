import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBf2bWWqIlJd7pMlS1kppyQBVMAE9P-ONo",
  authDomain: "appchat-dfa39.firebaseapp.com",
  projectId: "appchat-dfa39",
  storageBucket: "appchat-dfa39.appspot.com",
  messagingSenderId: "197125358384",
  appId: "1:197125358384:web:f6cff5b4cd098fcb10bef5",
  measurementId: "G-B25EK4LQY1",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore(app);