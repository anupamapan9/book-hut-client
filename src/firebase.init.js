// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA9WEXcgxuVyBl53T1dRhfmZs6e3MylieQ",
    authDomain: "book-hut-3072f.firebaseapp.com",
    projectId: "book-hut-3072f",
    storageBucket: "book-hut-3072f.appspot.com",
    messagingSenderId: "985310312181",
    appId: "1:985310312181:web:bdc04410f049fe3674f7bc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;