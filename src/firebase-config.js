import firebase from 'firebase/app';
import 'firebase/firestore';



// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAtbRLiY_3Y7CCyk2V89abmHtREjBi4pDs",
  authDomain: "todo-list-df9e3.firebaseapp.com",
  projectId: "todo-list-df9e3",
  storageBucket: "todo-list-df9e3.appspot.com",
  messagingSenderId: "310210229228",
  appId: "1:310210229228:web:de538df498d0445ac686c9"
};

// Initialize Firebase
const fb =  firebase.initializeApp(firebaseConfig);
export const db = fb.firestore();
