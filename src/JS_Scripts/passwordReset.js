import { auth } from './initializeFirebase.js';
import { sendPasswordResetEmail } from 'https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js';

const passwordResetForm = document.getElementById('passwordResetForm');

passwordResetForm.addEventListener('submit', (event)=>{
    event.preventDefault();

    var verify_email = passwordResetForm.verify_email.value;

    sendPasswordResetEmail(auth, verify_email)
    .then(() => {
        alert('Password reset request send. Please check your email.');
    })
                                // .then(()=>{
                                
                                // // for the message send after a reset button is clicked!
                                //    const resetRequestSendMessage = document.getElementById('reset-request-send-message');
                                //    resetRequestSendMessage.innerHTML = ''; // Clear previous messages

                                //    const message = document.createElement('p');
                                //    message.textContent = 'Password reset email sent successfully. Please check your email.';
                                //    resetRequestSendMessage.appendChild(message);
                                    
                                // })
    .catch((error) => {
       const errorCode = error.code;
       const errorMessage = error.message;
       console.error('Error:', errorCode, errorMessage);
     })
});