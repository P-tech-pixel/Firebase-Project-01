
//passing the user details such as userEmail to portal.

document.addEventListener('DOMContentLoaded', () => {
  const userEmail = localStorage.getItem('userEmail');
  if (userEmail) {

    //passing the user.email on the userPortal.html. Passing the element called userEmail from userPPortal.html. 
      document.getElementById('userEmail').textContent = userEmail;
  } else {
      // If no user email is found, redirect to login page
      window.location.href = "/index.html";
  }
});
