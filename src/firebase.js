import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import {getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkTQ3_uFW_3C4V-z6zhrpj05BL791kheg",
  authDomain: "userdata-2b73d.firebaseapp.com",
  projectId: "userdata-2b73d",
  storageBucket: "userdata-2b73d.appspot.com",
  messagingSenderId: "299537714433",
  appId: "1:299537714433:web:f6d99fcc77041fefe29f00",
  measurementId: "G-WTMLPL6W39"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();