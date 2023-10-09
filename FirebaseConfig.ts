// Import the functions you need from the SDKs you need;
// import '@firebase/auth';
// import '@firebase/firestore';
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAbTtgq2lQCp6QA4SSp-LJHJgDfie0vHU4",
  authDomain: "nutriplus-5fc29.firebaseapp.com",
  projectId: "nutriplus-5fc29",
  storageBucket: "nutriplus-5fc29.appspot.com",
  messagingSenderId: "672766726610",
  appId: "1:672766726610:web:44e89d92380898eed1b80b",
  measurementId: "G-WJYYJ08CCD"
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}


export default firebase;