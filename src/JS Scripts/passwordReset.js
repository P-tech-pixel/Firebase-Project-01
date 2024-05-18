import { auth } from './initializeFirebase.js';
import { sendPasswordResetEmail } from 'https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js';
import { spinToLoad } from './design.js';


const passwordResetForm = document.getElementById('passwordResetForm');

passwordResetForm.addEventListener('submit', (event)=>{
    event.preventDefault();

    const verify_email = passwordResetForm.verify_email.value;

    sendPasswordResetEmail(auth, verify_email)
    .then(() => {
        alert('Password Reset request send. If the email exist in our databse, you will receive an email from us.');
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