// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDNiRFkuVWtBzT6wm1b4Jc0hoxy8p69plc",
    authDomain: "websitekelas-36e2b.firebaseapp.com",
    projectId: "websitekelas-36e2b",
    storageBucket: "websitekelas-36e2b.appspot.com",
    messagingSenderId: "683153927559",
    appId: "1:683153927559:web:45bb41cb82e7bcdc53b722",
    measurementId: "G-TNTEXCHNDL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
