import { fireStoreCollectionReference } from './initializeFirebase.js'; // Importing these items from the initializeFirebase.js file.
import { getDocs } from 'https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js';

function getFireStoreDbUsersList() {
    return getDocs(fireStoreCollectionReference)
        .then((snapshot) => {
            let users = []; // Empty user array to retrieve all the details.
            
            // Getting the array of users from snapshot.
            snapshot.docs.forEach((doc) => {
                const userData = doc.data();
                // Pushing the required user details into the users array
                users.push({
                    email: userData.email,
                    firstname: userData.firstname,
                    lastname: userData.lastname,
                    UserLoginID: userData.UserLoginID
                });
            });

            // Returning the users array
            return users;
        })
        .catch((err) => {
            console.log(err.message);
            // Return an empty array or handle the error as required
            return [];
        });
}

// Example usage
getFireStoreDbUsersList().then(users => {
    console.log(users);
});



