// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9XRfVTXStyavgkVClflnJRd4v6RUk9jQ",
  authDomain: "ema-john-simple-atuh.firebaseapp.com",
  projectId: "ema-john-simple-atuh",
  storageBucket: "ema-john-simple-atuh.appspot.com",
  messagingSenderId: "904760617331",
  appId: "1:904760617331:web:8daf752968cbf729817d06"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth