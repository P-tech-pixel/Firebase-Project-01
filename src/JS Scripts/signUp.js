import './initializeFirebase.js';
import { getAuth, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js';

const auth = getAuth();

const registrationForm = document.getElementById('register_form');

registrationForm.addEventListener( 'submit', (event) => {
       event.preventDefault();

       const email = registrationForm.email.value; 
       const password = registrationForm.password.value;

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
