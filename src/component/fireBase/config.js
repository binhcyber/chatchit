import firebase from "firebase/compat/app";
import "firebase/compat/analytics";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBByr41_e6AvHQL-jyFzVWwP5e1K_EhKQA",
  authDomain: "chat-cc029.firebaseapp.com",
  projectId: "chat-cc029",
  storageBucket: "chat-cc029.appspot.com",
  messagingSenderId: "612890460080",
  appId: "1:612890460080:web:863df3bd9a4fb50f9fe075",
  measurementId: "G-K9RGSWGSV8",
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();
const auth = firebase.auth();
const db = firebase.firestore();
export { auth, db };
export default firebase;
