import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDup8FReCEKMP0p86C0yCAV8403SvPzht0",
  authDomain: "netflix-clone-89144.firebaseapp.com",
  projectId: "netflix-clone-89144",
  storageBucket: "netflix-clone-89144.appspot.com",
  messagingSenderId: "543138219231",
  appId: "1:543138219231:web:3e554b696389def617d56a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//authentication connection
export const auth = getAuth(app);

//sign up with email and password.
export const createUserWithWithEmailAndPassword = (email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log(userCredential);
    })
    .catch((error) => {
      alert(error.message);
    });
};

//sign in with email and password

export const loginInWithEmailAndPassword = (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((user) => {
      console.log(user);
    })
    .catch((error) => {
      alert(error.mesasge);
    });
};
