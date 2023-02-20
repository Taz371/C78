import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDThclthDwxjRkRrFOZ7oywOS_b6SjMPTE",
    authDomain: "c78elib4.firebaseapp.com",
    projectId: "c78elib4",
    storageBucket: "c78elib4.appspot.com",
    messagingSenderId: "339363948047",
    appId: "1:339363948047:web:cb94bc4d65a96df0a1657a"
  };

firebase.initializeApp(firebaseConfig);
export default firebase.firestore();