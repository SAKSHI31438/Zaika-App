// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAihCBicpIcKftxmZaIlcgdGjP5V5SllQk",
  authDomain: "zaika-app.firebaseapp.com",
  projectId: "zaika-app",
  storageBucket: "zaika-app.appspot.com",
  messagingSenderId: "1001439568286",
  appId: "1:1001439568286:web:5902bf465d1423b57df68f",
  measurementId: "G-DJB79NJ56L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();