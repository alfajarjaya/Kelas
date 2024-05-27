import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDNiRFkuVWtBzT6wm1b4Jc0hoxy8p69plc",
    authDomain: "websitekelas-36e2b.firebaseapp.com",
    projectId: "websitekelas-36e2b",
    storageBucket: "websitekelas-36e2b.appspot.com",
    messagingSenderId: "683153927559",
    appId: "1:683153927559:web:f57d5231a0096a8553b722",
    measurementId: "G-2H77CR8NLZ"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };