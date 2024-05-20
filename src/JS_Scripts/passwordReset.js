//JS file purpose**********: JS page for resetting password using firebase function

import { auth } from './initializeFirebase.js';
import { sendPasswordResetEmail } from 'https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js';

const passwordResetForm = document.getElementById('passwordResetForm');

passwordResetForm.addEventListener('submit', (event) => {
    event.preventDefault();

    var verify_email = passwordResetForm.verify_email.value;
    const resetRequestMessage = document.getElementById('reset-request-send-message');

    // Attempt to send the password reset email
    sendPasswordResetEmail(auth, verify_email)
        .then(() => {
            resetRequestMessage.innerHTML = `<label>Password reset email sent. Please check your inbox.</label>`;
        })
        .catch(error => {
            console.error('Error:', error);
        });
});

//NOTE: You need to make sure that the system send a error message when a user input incorect email address.


