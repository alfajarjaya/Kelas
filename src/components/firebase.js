import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDK9kbBX5C4R2OjQfNLvXurFJT6lhq-QOI",
    authDomain: "websitekelasv2.firebaseapp.com",
    projectId: "websitekelasv2",
    storageBucket: "websitekelasv2.appspot.com",
    messagingSenderId: "1075386388216",
    appId: "1:1075386388216:web:eb0e7813360f76ff2ab50d",
    measurementId: "G-VJ9LLKGCDW"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };