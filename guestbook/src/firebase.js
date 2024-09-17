// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, sendPasswordResetEmail, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQZuF54gz-e0crZ8vXfhvFJeTvQHkfAqU",
  authDomain: "guestbook-d9645.firebaseapp.com",
  projectId: "guestbook-d9645",
  storageBucket: "guestbook-d9645.appspot.com",
  messagingSenderId: "1012837798049",
  appId: "1:1012837798049:web:9e842ab84dbdd10e32e0e0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const googleAuthProvider = new GoogleAuthProvider()

const registerWithEmailAndPassword = async (email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password)
    const user = res.user
    return user

  } catch(err) {
    throw(error)
  }
}

const loginWithEmailAndPassword = async (email, password) => {
  try {
    const response = await signInWithEmailAndPassword(auth, email, password)
    return response
  } catch(err) {
    throw(error)
  }
}
const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email)
  } catch(error) {
    throw(erro)
  }
}
const singInWithGoogle = async () => {
 try {
  const res = await signInWithPopup(auth, googleAuthProvider)
 const user = res.user
  return user
 } catch(erro) {
  throw(error)
 }
}

export {registerWithEmailAndPassword, loginWithEmailAndPassword, auth, sendPasswordReset, singInWithGoogle}
