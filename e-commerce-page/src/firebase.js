// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJ4_j0zdQdu4P7eqYRdh_G2pn4DlCedfc",
  authDomain: "e-commerce-page1.firebaseapp.com",
  databaseURL: "https://e-commerce-page1-default-rtdb.firebaseio.com",
  projectId: "e-commerce-page1",
  storageBucket: "e-commerce-page1.appspot.com",
  messagingSenderId: "1023541361592",
  appId: "1:1023541361592:web:400c701224e711f5d72d4d",
  measurementId: "G-11NPYDSK7R"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION);


export const auth = firebase.auth();
export const db = firebase.firestore();
export const provider = new firebase.auth.GoogleAuthProvider();

export default firebase;
