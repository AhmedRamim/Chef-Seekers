// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3eglTtwz0iBla4zCK-6DY57Eqadvy6TI",
  authDomain: "chefs-seekers.firebaseapp.com",
  projectId: "chefs-seekers",
  storageBucket: "chefs-seekers.appspot.com",
  messagingSenderId: "257243403916",
  appId: "1:257243403916:web:547058b55e5cc809c14da9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;