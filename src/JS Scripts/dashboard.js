import { firestoreDb } from './initializeFirebase.js'; // importing these items from the initializeFirebase.js file.
import { collection, getDocs } from 'https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js';

function viewListOfUsers (){

     //collection reference
     const collectionReference = collection(firestoreDb, 'users') // this collection is being stored in the collection called collectionReference

    //get collection data
    getDocs(collectionReference) // this looks for all the data in collectionReference
        .then((snapshot) => {
           // console.log(snapshot.docs) // testing the retrival of the snapshots (datas).
           let users = []   // empty user array to retrive all the details. 

           snapshot.docs.forEach((doc) => {
               users.push({ ...doc.data(), id: doc.id })
           });
          // console.log(users)
 
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
        .catch(err => {
            console.log(err.message);
        })
}

const viewUsers = document.getElementById('viewUsers');

viewUsers.addEventListener('click', e => {
    viewListOfUsers();
})





