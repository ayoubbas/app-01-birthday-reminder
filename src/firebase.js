// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2-0JWpU6bejlt2UyJCwXfFQ5iGzeFdhI",
  authDomain: "birthdy-reminder.firebaseapp.com",
  projectId: "birthdy-reminder",
  storageBucket: "birthdy-reminder.appspot.com",
  messagingSenderId: "963303547479",
  appId: "1:963303547479:web:25b69c42a631d4a2ae3912",
  measurementId: "G-4HVKPP48YM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export {app,analytics}