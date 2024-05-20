//JS file purpose**********:JS to handle the user sign in using the firebase function


import { auth } from './initializeFirebase.js';  // importing these items from the initializeFirebase.js file.
import { signInWithEmailAndPassword, onAuthStateChanged  } from 'https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js';

// Function to handle redirection and passing user info to portal. 
const redirectUserToPortal = (user) => {
    // store the user's email and other information in local storage. Once, the user store credentials in localStorage, it is saved for all browser session. 
    localStorage.setItem('userEmail', user.email);

    //redirect to loading page and portal Page.  
    window.location.href ="/src/loadingPage.html";
};

const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

        const email = loginForm.email.value;
        const password = loginForm.password.value;

        // firebase function to sign in to email and passoword. 
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            //console.log('User signed in: ', user.email);

            // call the function redirect to handle and pass user info.
            redirectUserToPortal(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error('Error message: ', errorMessage);
            console.error('Error code:', errorCode);
            // Display error message to user
             if (errorCode === 'auth/invalid-credential') {
                alert('invalid email or password.');
             }
        });
});

// Listen for auth state changes
onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is signed in, pass user info and redirect
        redirectUserToPortal(user);
    } else {
        // User is signed out
        console.log('No user is signed in.');
    }
});