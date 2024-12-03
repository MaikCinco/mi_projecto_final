// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDd21BBmbFk1hoIVrycq9uvwA1irHeCbaU",
  authDomain: "mich-projct.firebaseapp.com",
  projectId: "mich-projct",
  storageBucket: "mich-projct.appspot.com", // Corregí la URL
  messagingSenderId: "390691455770",
  appId: "1:390691455770:web:86d630a3257689bf3122a3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export the Firebase services
export const auth = getAuth(app); // Authentication instance
export const db = getFirestore(app); // Firestore instance
