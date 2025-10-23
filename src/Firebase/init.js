// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAo0UAf4Jhc6lekHynwgW0uj5E-EuaSkzc",
  authDomain: "fit5032-studios.firebaseapp.com",
  projectId: "fit5032-studios",
  storageBucket: "fit5032-studios.firebasestorage.app",
  messagingSenderId: "840322777926",
  appId: "1:840322777926:web:1997dd0d3d0573e4ba5b47"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore()
export default db