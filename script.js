// Target the elements from the document.

var pwEl = document.getElementById("password");
var generateEl = document.getElementById("generate");

// Setup variables with Arrays.

var upperCase = "QWERTYUIOPLKJHGFDSAZXCVBNM";
var lowerCase = "zxcvbnmlkjhgfdsaqwertyuiop";
var numbers = "0123456789";
var symbols = "~!@#$%^&*()_+'='/*";

// Split the string to arrays.

upperCase.split("");
lowerCase.split("");
numbers.split("");
symbols.split("");

// Prompt number of characters from user.

generateEl.addEventListener("click", () => {

var passwordLenght = prompt("How many characters would you like?\nTip: It can be from 8 to 128 characters ;-)")

if (passwordLenght >= 8 && passwordLenght <= 128) {
    return passwordLenght;
}   
else {
    alert("Please enter a number from 8 to 128.");
  } 
});

// Ask if user wants, Lower Case, Upper Case, Numbers and Symbols.

function hasCharacters() {
    
}
