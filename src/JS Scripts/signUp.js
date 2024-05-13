import './initializeFirebase.js';
import { getAuth, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js';

const auth = getAuth();

//***************************************************************************/
// Function to sign up user
function signUpUser(email, password) {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up successfully
        var user = userCredential.user;
       // console.log("User signed up:", user);
        // Redirect to another page
        window.location.href = "dashboard.html";
      })
      .catch((error) => {
        // Handle sign-up errors
        var errorCode = error.code;
        var errorMessage = error.message;
        console.error("Sign up error:", errorMessage);
      });
}

// Get reference to the sign up button
var signUpButton = document.getElementById("signupButton");
  
// Add click event listener to sign up button
signUpButton.addEventListener("click", function() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    signUpUser(email, password);
});