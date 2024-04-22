


import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.SECRET_KEY,
  authDomain: "fir-basics-9aa01.firebaseapp.com",
  projectId: "fir-basics-9aa01",
  storageBucket: "fir-basics-9aa01.appspot.com",
  messagingSenderId: "1047838837459",
  appId: "1:1047838837459:web:7b0f075a2bbce069716226"
};

export const app = initializeApp(firebaseConfig);

export const database = getFirestore(app);







/* Firebase configuration snippet */
/*

// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app"

// Add the Firebase products that you want to use
import "firebase/auth"
import "firebase/firestore"

// PUT YOUR OWN FIREBASE CONFIGURATION HERE
var firebaseConfig = {
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId,
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
const firebaseAuth = firebase.auth()
const firestore = firebase.firestore()

export { firebaseAuth, firestore }
*/