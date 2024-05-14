import { auth, firestoreDb } from './initializeFirebase.js'; // importing these items from the initializeFirebase.js file.
import { createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js';
import {  } from 'https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js';


const registrationForm = document.getElementById('register_form');

registrationForm.addEventListener( 'submit', async function(event) {
       event.preventDefault();
       
      //  const firstName = document.getElementById.firstName.value;
      //  const lastName = document.getElementById.lastName.value;
       const email = registrationForm.email.value; 
       const password = registrationForm.password.value;
       

       // create a account using email and password. Firebase authentication
       createUserWithEmailAndPassword(auth, email, password)
       .then((userCredential) => {
         // Signed up successfully
         var user = userCredential.user;
         //console.log("User signed up:", user);
         // Redirect to another page
         window.location.href = "dashboard.html";
       })
       .catch((error) => {
         // Handle sign-up errors
         var errorCode = error.code;
         var errorMessage = error.message;
         console.error("Sign up error:", errorMessage);
       });



});
