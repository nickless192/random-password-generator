// Assignment code here
var numArray = "0123456789";
var specialChar = "!"+'"' + "#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var characterSelect = function(charString) {
  var strLength = charString.length;

  var charPosition = Math.floor(Math.random()*strLength);

  return charString.charAt(charPosition);

}

var generatePassword = function() {
  window.alert("Let's first choose the password criteria:");

    // for (var i = 0; i < 10; i++) {
    //   window.alert(specialChar.charAt(Math.floor(Math.random()*31)));
    // }
  

  var containsLowerCase = window.confirm("Do you want the password to include lowercase letters?");

  var containsUpperCase = window.confirm("Do you want the password to include uppercase letters?");

  var containsNumeric = window.confirm("Do you want the password to include numbers?");

  var containsSpecialChars = window.confirm("Do you want the password to include special characters?");

  window.alert("Here is a recap of your new password criteria: ");

  if (containsLowerCase) {
    window.alert("The password will include lowercase letters.");
  }
  else {
    window.alert("The password will NOT contain lowercase letters.");
  }

  if (containsUpperCase) {
    window.alert("The password will include uppercase letters.");
  }
  else {
    window.alert("The password will NOT contain uppercase letters.");
  }

  if (containsNumeric) {
    window.alert("The password will include numbers.");
  }
  else {
    window.alert("The password will NOT contain numbers.");
  }

  if (containsSpecialChars) {
    window.alert("The password will include special characters.");
  }
  else {
    window.alert("The password will NOT contain special characters.");
  }

  if (!containsLowerCase && !containsUpperCase && !containsNumeric && !containsSpecialChars) {
    window.alert("Please select at least one character type!");

  }


  var passwordLength = window.prompt("How long would you like the password to be? Please choose between 8 and 128 characters.");

  while (passwordLength < 8 || passwordLength > 128) {
    passwordLength = window.prompt("Invalid entry. How long would you like the password to be? Please choose between 8 and 128 characters.");
  }

  var passwordStr = "";
  var includedLowerCase = false;
  var includedUpperCase = false;
  var includedNumbers = false;
  var includedSpecialChar = false;

  for (var i = 0; i < passwordLength; i++) {
    var charType = Math.floor(Math.random()*4);

    if (charType === 0 && containsLowerCase) {
      passwordStr = passwordStr + characterSelect(lowerCase);
      includedLowerCase = true;
    } else if (charType === 1 && containsUpperCase) {
      passwordStr = passwordStr + characterSelect(upperCase);
      includedUpperCase = true;
    } else if (charType === 2 && containsNumeric) {
      passwordStr = passwordStr + characterSelect(numArray);
      includedNumbers = true;
    } else if (charType === 3 && containsSpecialChars) {
      passwordStr = passwordStr + characterSelect(specialChar);
      includedSpecialChar = true;
    } else {
      i--;
    }

    switch(charType) {
      // lowercase
      case 0: // select random number to choose position of the character
        // charPosition = Math.floor(Math.random()*lowerCase.length);
        // passwordStr = passwordStr + lowerCase.charAt(charPosition);
        passwordStr = passwordStr + characterSelect(lowerCase);
        break;
      // uppercase
      case 1: 
      // charPosition = Math.floor(Math.random()*upperCase.length);
      // passwordStr = passwordStr + upperCase.charAt(charPosition);
        passwordStr = passwordStr + characterSelect(upperCase);
      break;
      // numbers
      case 2:
        // charPosition = Math.floor(Math.random()*numArray.length);
        // passwordStr = passwordStr + numArray.charAt(charPosition);
          passwordStr = passwordStr + characterSelect(numArray);
        break;
      // special character
      case 3:
        // charPosition = Math.floor(Math.random()*specialChar.length);
        // passwordStr = passwordStr + specialChar.charAt(charPosition);
        passwordStr = passwordStr + characterSelect(specialChar);
        break;
    }


  }

  window.alert("The password is " + passwordStr);
  return passwordStr;

}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
