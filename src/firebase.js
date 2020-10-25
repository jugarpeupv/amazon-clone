import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCPuTrFIIA2GjTRIq_Ff9684C13VQtf8ww",
  authDomain: "clone-48517.firebaseapp.com",
  databaseURL: "https://clone-48517.firebaseio.com",
  projectId: "clone-48517",
  storageBucket: "clone-48517.appspot.com",
  messagingSenderId: "141686415552",
  appId: "1:141686415552:web:4bd79ad1d4d926898d0d25",
  measurementId: "G-1F799QDHR8",
});

const auth = firebase.auth();

export { auth };
