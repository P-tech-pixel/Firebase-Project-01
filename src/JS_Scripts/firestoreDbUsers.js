// Importing necessary references and functions from Firebase configuration and Firestore SDK.
import { fireStoreCollectionReference } from './initializeFirebase.js'; // Importing the Firestore collection reference.
import { onSnapshot, query, where } from 'https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js'; // Importing Firestore functions from the Firebase SDK.


function getUsersEmailsFromFireStoreDb(userEmail) {
    // Creating a Firestore query to find documents where the email field matches the provided userEmail.
    const q = query(fireStoreCollectionReference, where("email", "==", userEmail));

      // Setting up a real-time listener to fetch data from Firestore based on the query.
      onSnapshot(q, (snapshot) => {
        // if the snapshot is empty.
        if(snapshot.empty){
          alert('Your email does not match the database.')
        }else{
            let users = []; // Initialize an empty array to hold user details.

            // Iterate through each document in the snapshot and push user data to the users array.
            snapshot.docs.forEach((doc) => {
                users.push({ ...doc.data(), id: doc.id });
            });
 
            // Extract email addresses from the users array.
            let emails = users.map(user => user.email);
 
            // Log the extracted email addresses to the console.
            console.log('Users Emails:', emails);
        }
    });
}

// add more functions if you want to get the other attributes of users from firestore database:

export{ getUsersEmailsFromFireStoreDb }; // export this to passwordReset.js and signIn.js to determine the email exist or not in database, while the user input the email before submitting. 


