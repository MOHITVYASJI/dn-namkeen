// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // ✅ add this

const firebaseConfig = {
  apiKey: "AIzaSyAu1UVeNjOB1iA9nf_rGVqeVApxeNgW07Q",
  authDomain: "dm-namkeen.firebaseapp.com",
  projectId: "dm-namkeen",
  storageBucket: "dm-namkeen.firebasestorage.app",
  messagingSenderId: "682236870721",
  appId: "1:682236870721:web:fa140bd2e5c2522bcb46c0",
  measurementId: "G-7WKD8BJHZE",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // ✅ add this

export { auth }; // ✅ export auth for Login/Signup to use





/* Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAu1UVeNjOB1iA9nf_rGVqeVApxeNgW07Q",
  authDomain: "dm-namkeen.firebaseapp.com",
  projectId: "dm-namkeen",
  storageBucket: "dm-namkeen.firebasestorage.app",
  messagingSenderId: "682236870721",
  appId: "1:682236870721:web:fa140bd2e5c2522bcb46c0",
  measurementId: "G-7WKD8BJHZE"
};

// Initialize Firebase
const auth = getAuth(app); // ✅ add this

export { auth }; // ✅ export auth for Login/Signup to use
/*const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);*/