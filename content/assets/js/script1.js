document.addEventListener("DOMContentLoaded", function() {
    const userInput = prompt("Please enter the access code:");
    const correctCode = "yourSecretCode";
    if (userInput === correctCode) {
       document.body.style.display = "block";
    } else {
       window.location.href = "../";
    }
 });