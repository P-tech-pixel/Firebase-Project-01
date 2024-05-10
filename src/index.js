import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js';
import { getAuth, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js';

const firebaseConfig = {
  apiKey: "AIzaSyC3FjD69VGAqsazn6ATKZTglls17lBtdYY",
  authDomain: "pidock-6baca.firebaseapp.com",
  databaseURL: "https://pidock-6baca-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "pidock-6baca",
  storageBucket: "pidock-6baca.appspot.com",
  messagingSenderId: "624114582613",
  appId: "1:624114582613:web:a52f02b5f75f9094b780dc"
};

const app = initializeApp(firebaseConfig);

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

//DONT FORGET TO ADD THE signout in the import section...
//***************************************************************************/
//signout function
// function signOutUser(){

//     signOut(auth).then(() => {
//         // Sign-out successful.
//          console.log("Signed out successfully !")
//          window.location.href = "dashboard.html";
//       }).catch((error) => {
//         // An error happened.
//         console.log("sign out Error")
//       });
// }

//   // Get reference to the sign out button
//   var signOutButton = document.getElementById("signoutButton");
  
//   // Add click event listener to sign out button
//   signOutButton.addEventListener("click", function() {
//     signOutUser();
//   });


