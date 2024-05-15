import { auth, fireStoreCollectionReference } from './initializeFirebase.js'; // importing these items from the initializeFirebase.js file.
import { createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js';
import { addDoc } from 'https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js';


function spinToLoad(){
  var spinner = document.getElementById('loading');
  spinner.style.display = 'inline-block';

  //simulate a delay
  setTimeout(function(){
    spinner.style.display = 'none';
  }, 30000);

 // console.log("Spinning")
}

const registrationForm = document.getElementById('register_form');

registrationForm.addEventListener( 'submit', async function(event) {
       event.preventDefault();
       
       const firstName = registrationForm.firstName.value;
       const lastName = registrationForm.lastName.value;
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


       // Adding the user's input to firestore
      addDoc(fireStoreCollectionReference, {
        email: email,   //       const firstName = registrationForm.firstName.value
        firstName: firstName,  // const lastName = registrationForm.lastName.value
        lastName: lastName  //     const password = registrationForm.password.value
      })
      .then(()=>{
        spinToLoad();  //invoking the function spinToload() to make a spinning while submitting the form.  
      })

});
