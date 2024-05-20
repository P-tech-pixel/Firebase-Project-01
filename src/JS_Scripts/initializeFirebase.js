//JS file purpose**********: JS page to initialise firebase, include app initialisation, databse and etc.


import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js';
import { getFirestore, collection } from 'https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js';

const firebaseConfig = {
  apiKey: "AIzaSyC3FjD69VGAqsazn6ATKZTglls17lBtdYY",
  authDomain: "pidock-6baca.firebaseapp.com",
  databaseURL: "https://pidock-6baca-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "pidock-6baca",
  storageBucket: "pidock-6baca.appspot.com",
  messagingSenderId: "624114582613",
  appId: "1:624114582613:web:a52f02b5f75f9094b780dc"
};

const app = initializeApp(firebaseConfig);
const auth =getAuth(app);  // getting authentication

const firestoreDb = getFirestore(app); // getting the db ready for firestore

//collection reference from firestoreDb
const fireStoreCollectionReference = collection(firestoreDb, 'users') // this collection is being stored in the collection called collectionReference

export { auth, fireStoreCollectionReference};