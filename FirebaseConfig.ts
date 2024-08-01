// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDlSBWiZISWcqOi0N4BUkMGhZ9P9ke-zWU",
  authDomain: "gdse65-ea8ff.firebaseapp.com",
  projectId: "gdse65-ea8ff",
  storageBucket: "gdse65-ea8ff.appspot.com",
  messagingSenderId: "665914824670",
  appId: "1:665914824670:web:5a9423e5fd6b032962ef4f",
  measurementId: "G-SX9YGYW5HW"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app,{
    persistence:getReactNativePersistence(ReactNativeAsyncStorage)
})
// const analytics = getAnalytics(app);
export const storage = getStorage(app);