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
    hasCharacters(passwordLenght);
   
}   
else {
    alert("Please enter a number from 8 to 128.");
    return "";
  } 
});

// Ask user if they want Lower Case, Upper Case, Numbers and Symbols.

pw = [];

function hasCharacters(passwordLenght) {
    var upperCase = confirm("Would you like to add upper case?");
    var lowerCase = confirm("Would you like to add lower case?");
    var numbers = confirm("Would you like to add numbers?");
    var symbols = confirm("Would you like to add symbols?");
    var all_options = [];

    if (upperCase) {
        pw.push(upperCaseEl.split(""));
    }

    if (lowerCase) {
        pw.push(lowerCaseEl.split(""));
    }

    if (numbers) {
        pw.push(numbersEl.split(""));
    }

    if (symbols) {
        pw.push(symbolsEl.split(""));
    }

    for (let i = 0; i < pw.length; i++){
        all_options.push(...pw[i])
    }


    
    let shuffled = all_options
    .map((a) => ({sort: Math.random(), value: a}))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value)

   let final_random_password = [];

   for (let i =0; i < passwordLenght;i++){

    final_random_password.push(shuffled[i])
   }

   let user_password = final_random_password.join("");
   pwEl.innerHTML = user_password;
  

}
