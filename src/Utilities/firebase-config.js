// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBvjeJMA2PWnkGkzgodKwrfVb8PIykFKFE",
  authDomain: "react-netflix-clone-987a1.firebaseapp.com",
  projectId: "react-netflix-clone-987a1",
  storageBucket: "react-netflix-clone-987a1.appspot.com",
  messagingSenderId: "645416803310",
  appId: "1:645416803310:web:eef248246bdf224fccccff",
  measurementId: "G-EZ6QWLP1F3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const firebaseAuth = getAuth(app);