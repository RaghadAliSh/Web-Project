// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBdHsus0FJAb1dtdVe_bowon53L4gzRwtI",
  authDomain: "webpro-a5853.firebaseapp.com",
  projectId: "webpro-a5853",
  storageBucket: "webpro-a5853.appspot.com",
  messagingSenderId: "300627181757",
  appId: "1:300627181757:web:b7100a4f41cabba3c0f7d4",
  measurementId: "G-6JBBXQY6YJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);