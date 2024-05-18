import { fireStoreCollectionReference } from './initializeFirebase.js'; // importing these items from the initializeFirebase.js file.
import { getDocs } from 'https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js';

import { spinToLoad } from './design.js'; // import the customdesign 

function viewListOfUsers (){

    //get collection data
    getDocs(fireStoreCollectionReference) // this looks for all the data in collection Reference of firestore
        .then((snapshot) => {
           // console.log(snapshot.docs) // testing the retrival of the snapshots (datas).
           let users = []   // empty user array to retrive all the details. 

           snapshot.docs.forEach((doc) => {
               users.push({ ...doc.data(), id: doc.id })
           });

            // Get the table body element
            const userTableBody = document.querySelector('#userTable tbody');
            userTableBody.innerHTML = ''; // Clear existing table rows

          //getting all the users details from the array users. lets go through For loop: 
           users.forEach(user => {
              const user_email = user.email;
              const user_firstName = user.firstName;
              const user_lastName = user.lastName;
           
               // Create a table row element
               let row = document.createElement("tr");

               // Create table data cells and append them to the row
               let cellFirstName = document.createElement("td");
               cellFirstName.textContent = user_firstName;
               row.appendChild(cellFirstName);

               let cellLastName = document.createElement("td");
               cellLastName.textContent = user_lastName;
               row.appendChild(cellLastName);

               let cellEmail = document.createElement("td");
               cellEmail.textContent = user_email;
               row.appendChild(cellEmail);

               // Append the row to the table body
               userTableBody.appendChild(row); 
           
           })
        })
        .then(()=>{
            spinToLoad(); // function to load
         })
        .catch(err => {
            console.log(err.message);
        })
}

const viewUsers = document.getElementById('viewUsers');

viewUsers.addEventListener('click', e => {
    viewListOfUsers();
})





