// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKxEeXHuWd6Eoe153ZTcNYqFS9UcsXt-w",
  authDomain: "loginapp-d0d2c.firebaseapp.com",
  projectId: "loginapp-d0d2c",
  storageBucket: "loginapp-d0d2c.firebasestorage.app",
  messagingSenderId: "386165259459",
  appId: "1:386165259459:web:08e00faf51e56782eaf676",
  measurementId: "G-HQMJXKNRSW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Exporta el servicio de autenticación
export const auth = getAuth(app);
export default app;