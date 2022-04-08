// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCwH5tRiGhIQQdz-Gj2YpT-LNvpH5rorHY",
    authDomain: "niconsm-figuras.firebaseapp.com",
    projectId: "niconsm-figuras",
    storageBucket: "niconsm-figuras.appspot.com",
    messagingSenderId: "239470674574",
    appId: "1:239470674574:web:bb26ea4792b4be3a93bfdf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const figuresdb = getFirestore(app)
