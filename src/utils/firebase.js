// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCskUled03NRihr8Y1tnWx_1-N36dFL2jc",
  authDomain: "netflix-gpt-9fc17.firebaseapp.com",
  projectId: "netflix-gpt-9fc17",
  storageBucket: "netflix-gpt-9fc17.appspot.com",
  messagingSenderId: "888458302613",
  appId: "1:888458302613:web:56189e047c180f3061f79c",
  measurementId: "G-B2QGT3Q3RC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);