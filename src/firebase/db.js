// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore, collection } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
export const firebaseApp = initializeApp({
  apiKey: "AIzaSyAP7K9i1tl1Mzz8ew5DGLQFFh0jGyGhfH4",
  authDomain: "mybrain-d615a.firebaseapp.com",
  databaseURL: "https://mybrain-d615a.firebaseio.com/",
  projectId: "mybrain-d615a",
  storageBucket: "mybrain-d615a.appspot.com",
  messagingSenderId: "103187730190",
  appId: "1:103187730190:web:fe60139292e6091e60515f"
});
// Initialize Firebase
const db = getFirestore(firebaseApp)