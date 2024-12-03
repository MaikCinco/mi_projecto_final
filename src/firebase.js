// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDd21BBmbFk1hoIVrycq9uvwA1irHeCbaU",
  authDomain: "mich-projct.firebaseapp.com",
  projectId: "mich-projct",
  storageBucket: "mich-projct.firebasestorage.app",
  messagingSenderId: "390691455770",
  appId: "1:390691455770:web:86d630a3257689bf3122a3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Exportar servicios de Firebase
export const auth = getAuth(app);
export const firestore = getFirestore(app);
