// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCNgNOL7lgtmxIneU6IqhlY8RUfOSdL86A",
    authDomain: "fsabbootcampday4.firebaseapp.com",
    projectId: "fsabbootcampday4",
    storageBucket: "fsabbootcampday4.appspot.com",
    messagingSenderId: "895047458312",
    appId: "1:895047458312:web:303bafd8543690dbf87bbd",
    measurementId: "G-WDF2ZMX0T4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);