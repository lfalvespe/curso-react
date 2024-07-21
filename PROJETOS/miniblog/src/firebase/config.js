// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// banco de dados do firebase
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAjm4jLfp2qEmsI_9J5xvhjVYjDUKMNtY",
  authDomain: "miniblog-17234.firebaseapp.com",
  projectId: "miniblog-17234",
  storageBucket: "miniblog-17234.appspot.com",
  messagingSenderId: "74507099695",
  appId: "1:74507099695:web:915fbf6a1193c6f8e330da"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export { db }