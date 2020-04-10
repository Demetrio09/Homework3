// Alert with welcome to the page!
alert("Welcome to Passworld Generator!");

// Setup variables;
    var needNewPassowrd = confirm("Do you need a New Passworld? OK for yes / CANCEL for no:");
    
    var randomNumber = Math.floor(Math.random() * 9 ) + 1;
    
    var randomLetter8 = Math.random().toString(36).substring(2, 15);
    var randomLetter128 = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
          
// If and Else if statments collecting data from user;
    if (needNewPassowrd) {
        var eightCharacters = confirm("Click on OK to generate 8 characters or CANCEL to generate up 128 characters:");
    }    
    else {
        alert("Came back anytime!");
    }    
    if (eightCharacters) {
        var specialCharacter = confirm("Do you want to include lowercase, uppercase, numeric, and/or special characters");
       
    }
    else {
        var specialCharacter = confirm("Do you want to include lowercase, uppercase, numeric, and/or special characters");
        
    }
    if (specialCharacter === true || specialCharacter === false) {
        alert("Your new passworld is: " + randomLetter8);
    }
    else {
        alert("Your new passworld is: " + randomLetter128);
    }
    
