//JS file purpose**********: User registartration using firebase function. 

import { auth, fireStoreCollectionReference } from './initializeFirebase.js';
import { createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js';
import { addDoc } from 'https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js';
import { validateForm } from './formValidation.js';

const registrationForm = document.getElementById('register_form');

registrationForm.addEventListener('submit', async function(event) {
    event.preventDefault();
    
    // Form validation check; if the validation true ? 
    if (validateForm()) {
      const firstName = registrationForm.firstName.value;
      const lastName = registrationForm.lastName.value;
      const email = registrationForm.email.value; 
      const password = registrationForm.password.value;

      let userLoginId;
      
      // create an account using email and password with Firebase authentication
      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
          // Signed up successfully
          var user = userCredential.user;
           userLoginId = user.uid; // users uniqure ids

          // Adding the user's input to firestore 
        return addDoc(fireStoreCollectionReference, {
            userLoginId: userLoginId,
            email: email,
            firstName: firstName,
            lastName: lastName
        })
        .then(()=>{
            // Redirect to loading page
            window.location.href = "/src/loadingPage.html";
         })
      })
      .catch((error) => {
          // Handle sign-up errors
          var errorCode = error.code;
          var errorMessage = error.message;
          console.error("Sign up error:", errorMessage);
      })
    }
});
