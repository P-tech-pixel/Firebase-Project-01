// Importing necessary references and functions from Firebase configuration and Firestore SDK.
import { fireStoreCollectionReference } from './initializeFirebase.js'; // Importing the Firestore collection reference.
import { onSnapshot, query, where } from 'https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js'; // Importing Firestore functions from the Firebase SDK.

// get user firstname using userInputEmail in firebase.

function getUsersFirstName(userInputEmail) {
  return new Promise((resolve, reject) => {
    // Creating a Firestore query to find documents where the email field matches the provided userInputEmail.
    const q = query(fireStoreCollectionReference, where("email", "==", userInputEmail));

    // Setting up a real-time listener to fetch data from Firestore based on the query.
    onSnapshot(q, (snapshot) => {
      let users = []; // Initialize an empty array to hold user details.

      // Iterate through each document in the snapshot and push user data to the users array.
      snapshot.docs.forEach((doc) => {
        users.push({ ...doc.data(), id: doc.id });
      });
      
      // Extract user first name from the users array.
      let firstNameArray = users.map(user => user.firstName);
      
      // Log the extracted first name to the console.
      let userFirstName = firstNameArray[0];

      resolve(userFirstName);
    }, (error) => {
      reject(error);
    });
  });
}

// get user last name using userInputEmail firebase.

function getUsersLastName(userInputEmail) {
  return new Promise((resolve, reject) => {
    const q = query(fireStoreCollectionReference, where("email", "==", userInputEmail));
    onSnapshot(q, (snapshot) => {
      let users = []; 
      snapshot.docs.forEach((doc) => {
        users.push({ ...doc.data(), id: doc.id });
      });

      let lastNameArray = users.map(user => user.lastName);

      let userLastName = lastNameArray[0];

      resolve(userLastName);
    }, (error) => {
      reject(error);
    });
  });
}

// get user email using userInputEmail in firebase.

function getUsersEmail(userInputEmail) {
  return new Promise((resolve, reject) => {
    const q = query(fireStoreCollectionReference, where("email", "==", userInputEmail));
    onSnapshot(q, (snapshot) => {
      let users = []; 
      snapshot.docs.forEach((doc) => {
        users.push({ ...doc.data(), id: doc.id });
      });

      let emailArray = users.map(user => user.email);

      let userEmail = emailArray[0];

      resolve(userEmail);
    }, (error) => {
      reject(error);
    });
  });
}

export{ getUsersFirstName, getUsersLastName, getUsersEmail }; 
