// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBE4dVJEV5q7oOqalW-6qTU6CcURbhqcEo",
  authDomain: "oasis-test-development.firebaseapp.com",
  projectId: "oasis-test-development",
  storageBucket: "oasis-test-development.appspot.com",
  messagingSenderId: "701934322502",
  appId: "1:701934322502:web:8bcaee5b26134f1d6b9b47"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { app };