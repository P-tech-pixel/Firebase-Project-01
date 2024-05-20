import { getUsersFirstName, getUsersLastName, getUsersEmail } from '../firestoreDbUsers.js';
//import { email } from '../signIn.js';

var email = "ooo@brumbies.com.au"; // just for example

// Function to update profile details in the HTML
function updateProfileDetails() {
    
  // Get the HTML elements where the user details will be displayed
  const firstNameElement = document.getElementById('show-firstName');
  const lastNameElement = document.getElementById('show-lastName');
  const emailElement = document.getElementById('show-email');

  // Return user email from FirebaseDb
  getUsersEmail(email)
    .then((userEmail) => {
     // emailElement.textContent = `Email: ${userEmail}`;
      console.log(userEmail);
    })
    .catch(error => {
      console.error('Error:', error);
    });

  // Return user first name from FirebaseDb
  getUsersFirstName(email)
    .then((userFirstName) => {
     // firstNameElement.textContent = `First name: ${userFirstName}`;
     console.log(userFirstName);
    })
    .catch(error => {
      console.error('Error:', error);
    });

  // Return user last name from FirebaseDb
  getUsersLastName(email)
    .then((userLastName) => {
     // lastNameElement.textContent = `Last name: ${userLastName}`;
     console.log(userLastName);
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

// Call the function to update the profile details when the page loads
document.addEventListener('DOMContentLoaded', updateProfileDetails);
