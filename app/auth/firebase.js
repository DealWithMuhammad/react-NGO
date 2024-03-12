import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKiq7hJvp8ISGcQV-ZDJnEH8_1Do08gLg",
  authDomain: "glbridge-c0b2b.firebaseapp.com",
  projectId: "glbridge-c0b2b",
  storageBucket: "glbridge-c0b2b.appspot.com",
  messagingSenderId: "810077013693",
  appId: "1:810077013693:web:23ad835d542be4203a19d4",
  measurementId: "G-6ZP06H8K21",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
