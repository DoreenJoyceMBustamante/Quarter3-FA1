const firstName = prompt("Enter your first name:");
const lastName = prompt("Enter your last name:");
const birthYear = prompt("Enter your birth year:");

const age = 2025 - birthYear;

const outputElement = document.getElementById("output");
outputElement.innerHTML = `Hello ${firstName} ${lastName}! How does it feel to be ${age} years old?`;