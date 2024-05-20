//JS file purpose**********:// Function to validate form inputs


function validateForm() {
    const password = document.getElementById('password').value;
    const verifyPassword = document.getElementById('verify_password').value;

    if (password !== verifyPassword) {
        alert('Passwords do not match');
        return false;
    }

    return true;
}
export { validateForm };