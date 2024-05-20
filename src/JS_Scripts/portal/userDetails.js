
//JS file purpose: *** passing the user details such as user email, firstname to portal.

// NOTE: The localStorage save user credentails after login in computer memory. 

import { getUsersFirstName } from '../FirestoreDb/firestoreDbUsers.js' 

document.addEventListener('DOMContentLoaded', async () => {
  // get userEmail from signIn.js
  const userEmail = localStorage.getItem('userEmail');
  if (userEmail) {
    try {
      // getUsersFirstName(), returns the userFirstName from the firestore Db. 
      const userFirstName = await getUsersFirstName(userEmail);
      console.log(userFirstName);

      // passing the user.email on the userPortal.html. Passing the element called userEmail from userPortal.html. 
      document.getElementById('userFirstName').textContent = userFirstName;
    } catch (error) {
      console.error('Error fetching user first name:', error);
      // Optionally, handle the error, such as showing a message to the user
    }
  } else {
    // If no user email is found, redirect to login page
    window.location.href = "/index.html";
  }
});

