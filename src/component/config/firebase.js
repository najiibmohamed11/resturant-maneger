import {getAuth,GoogleAuthProvider}from "firebase/auth"
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA8fE_MZWu1G1YYi1Tv0Qezuuc1boyNhFk",
  authDomain: "resturant-da004.firebaseapp.com",
  projectId: "resturant-da004",
  storageBucket: "resturant-da004.appspot.com",
  messagingSenderId: "308947737306",
  appId: "1:308947737306:web:13170ae1bc861ded3123e3",
  measurementId: "G-0NVX7X7D4V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
