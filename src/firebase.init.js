// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAd6sfdhIgZEA98A5V_shAEK-CJbV2lCeY",
  authDomain: "legelserviceseo15.firebaseapp.com",
  projectId: "legelserviceseo15",
  storageBucket: "legelserviceseo15.appspot.com",
  messagingSenderId: "152008775152",
  appId: "1:152008775152:web:4229a203a7df19c8087935"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;