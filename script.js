// Target the elements from the document.

var pwEl = document.getElementById("password");
var generateEl = document.getElementById("generate");

// Setup variables with Arrays.

var upperCaseEl = "QWERTYUIOPLKJHGFDSAZXCVBNM";
var lowerCaseEl = "zxcvbnmlkjhgfdsaqwertyuiop";
var numbersEl = "0123456789";
var symbolsEl = "~!@#$%^&*()_+'='/*";

// Split the string to arrays.

upperCaseEl.split("");
lowerCaseEl.split("");
numbersEl.split("");
symbolsEl.split("");

// Prompt number of characters from user.

generateEl.addEventListener("click", () => {

var passwordLenght = prompt("How many characters would you like?\nTip: It can be from 8 to 128 characters ;-)")

if (passwordLenght >= 8 && passwordLenght <= 128) {
    hasCharacters();
    return passwordLenght;
}   
else {
    alert("Please enter a number from 8 to 128.");
    return "";
  } 
});

// Ask if user wants, Lower Case, Upper Case, Numbers and Symbols.

pw = "";

function hasCharacters() {
    var upperCase = confirm("Would you like to add upper case?");
    var lowerCase = confirm("Would you like to add lower case?");
    var numbers = confirm("Would you like to add numbers?");
    var symbols = confirm("Would you like to add symbols?");

    if (upperCase) {
        pw.push(upperCaseEl.split(""));
        console.log(pw);
        
    }
}
