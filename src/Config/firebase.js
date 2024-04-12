// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBap0inSlRdS9HNhsdyetvgXNBg6Sh20PA",
  authDomain: "curso-de-react-c5049.firebaseapp.com",
  projectId: "curso-de-react-c5049",
  storageBucket: "curso-de-react-c5049.appspot.com",
  messagingSenderId: "733063533989",
  appId: "1:733063533989:web:11ad1d4ea62c2fdd93844c"
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const firestore = getFirestore(app);