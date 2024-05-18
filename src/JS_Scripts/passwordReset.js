import { auth } from './initializeFirebase.js';
import { getUsersEmailsFromFireStoreDb } from './firestoreDbUsers.js';
import { sendPasswordResetEmail } from 'https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js';

const passwordResetForm = document.getElementById('passwordResetForm');

passwordResetForm.addEventListener('submit', (event)=>{
    event.preventDefault();

    var verify_email = passwordResetForm.verify_email.value;
    
    //verify if the user exists on fireStore database or not
    getUsersEmailsFromFireStoreDb(verify_email);
    

    //send a password reset request to user
    sendPasswordResetEmail(auth, verify_email)
    .then(() => {
        alert('Password reset request send. Please check your email.');
    })
    .catch((error) => {
       const errorCode = error.code;
       const errorMessage = error.message;
       console.error('Error:', errorCode, errorMessage);
     })
});