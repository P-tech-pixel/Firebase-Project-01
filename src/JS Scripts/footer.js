// Get the current year
const currentYear = new Date().getFullYear();

// Create a footer element
const footer = document.createElement("footer");

// Add some content to the footer
footer.innerHTML = `
    <p>&copy; ${currentYear}  |  magpies.online  |  All rights reserved</p>
`;

// Append the footer to the body of the document
document.body.appendChild(footer);
