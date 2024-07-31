// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCtLcYJxXVZ4xfPjGcPMqjVI3-XyE_Zdx8",
  authDomain: "my-first-app-b6308.firebaseapp.com",
  projectId: "my-first-app-b6308",
  storageBucket: "my-first-app-b6308.appspot.com",
  messagingSenderId: "10152711074",
  appId: "1:10152711074:web:12e4652fed0a4638ae18fb",
  measurementId: "G-9618M4R69R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth };