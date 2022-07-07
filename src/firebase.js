// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASEKEY,
  authDomain: "goodnews-7d198.firebaseapp.com",
  projectId: "goodnews-7d198",
  storageBucket: "goodnews-7d198.appspot.com",
  messagingSenderId: "523290169327",
  appId: process.env.REACT_APP_FIREBASEAPPID,
  measurementId: "G-HL36T2KK7T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);