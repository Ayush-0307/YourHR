// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDeoKYLSQ071JLcjuqVjWBWH-T8e7HaVI0",
  authDomain: "yourhr-a8f8c.firebaseapp.com",
  projectId: "yourhr-a8f8c",
  storageBucket: "yourhr-a8f8c.appspot.com",
  messagingSenderId: "1086018561453",
  appId: "1:1086018561453:web:5d7ea2d0c33ff38a272d24",
  measurementId: "G-KF0YR9EBDR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const storage = getStorage(app);
export { db, auth, provider, doc, setDoc, storage }