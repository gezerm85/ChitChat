// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB288OJVKoioSzMgSPfH3RFxNadFYwb4gM",
  authDomain: "chitchat-b8bd3.firebaseapp.com",
  projectId: "chitchat-b8bd3",
  storageBucket: "chitchat-b8bd3.appspot.com",
  messagingSenderId: "305317626284",
  appId: "1:305317626284:web:8cef8fa1d29f3876b47a09",
  measurementId: "G-FFZNQX9EJJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

export const db = getDatabase(app)

export default app;
