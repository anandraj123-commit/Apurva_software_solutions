// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Replace with your Firebase config object
const firebaseConfig = {
    apiKey: "AIzaSyDy2erleUt8cuapEdidXkd8ojuQTaguOJg",
    authDomain: "apurva-software-solutions.firebaseapp.com",
    projectId: "apurva-software-solutions",
    storageBucket: "apurva-software-solutions.firebasestorage.app",
    messagingSenderId: "106403485318",
    appId: "1:106403485318:web:5b8c0d1a896ad7e411e307",
    measurementId: "G-XJ1EMB1WRY"
  };

const app = initializeApp(firebaseConfig);

// Firestore database
export const db = getFirestore(app);

