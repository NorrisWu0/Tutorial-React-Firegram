import firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDkhuYJEr5GqCfgPguFrYBFCxofKIylnR0",
    authDomain: "react-firebase-f0c0e.firebaseapp.com",
    projectId: "react-firebase-f0c0e",
    storageBucket: "react-firebase-f0c0e.appspot.com",
    messagingSenderId: "289952113109",
    appId: "1:289952113109:web:eff1f1971a4ad8a48edd5c"
  };

firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp();

export {projectStorage, projectFirestore, timestamp}