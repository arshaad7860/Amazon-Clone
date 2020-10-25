// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB5-TkkXUNppYMRegVQ7WT2NL6nkKmYNYE",
  authDomain: "mo-clone-7860.firebaseapp.com",
  databaseURL: "https://mo-clone-7860.firebaseio.com",
  projectId: "mo-clone-7860",
  storageBucket: "mo-clone-7860.appspot.com",
  messagingSenderId: "448196270417",
  appId: "1:448196270417:web:e9e18ff45ccd58f0289b70",
  measurementId: "G-01P1PJS4C1",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db,auth};