import './initializeFirebase.js';
import { getAuth, signOut } from 'https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js';

const auth = getAuth();
const signoutButton = document.getElementById('signoutButton');

//***************************************************************************/
// Function to sign out user
signoutButton.addEventListener('click', () => {
    signOut(auth).then(() => {
        // Sign-out successful.
        window.location.href = 'index.html';
    }).catch((error) => {
        // An error happened.
        console.error(error);
    });
});