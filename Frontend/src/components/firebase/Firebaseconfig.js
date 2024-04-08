import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCOdtu0O55MoaUoyymNRL77xGqNSYqRFw0",
  authDomain: "craft-connect-apf.firebaseapp.com",
  projectId: "craft-connect-apf",
  storageBucket: "craft-connect-apf.appspot.com",
  messagingSenderId: "1037997254103",
  appId: "1:1037997254103:web:741fecc81853cc69f19792",
  measurementId: "G-3KJQ344L5Y"
};

// Initialize Firebase
const craftC = initializeApp(firebaseConfig);

export const Oauth = getAuth(craftC);

const googleAuth = new GoogleAuthProvider()
