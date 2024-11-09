// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_VcP9sei0oLRkW066LPs3TmmWA2ql89g",
  authDomain: "chefs-seekers-ee5c4.firebaseapp.com",
  projectId: "chefs-seekers-ee5c4",
  storageBucket: "chefs-seekers-ee5c4.firebasestorage.app",
  messagingSenderId: "812748618985",
  appId: "1:812748618985:web:33d23572f2801c241c4478",
  measurementId: "G-JW8HQZLZC3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;