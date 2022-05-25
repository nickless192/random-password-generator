// Assignment code here
var numericChar = "0123456789";
var specialChar = "!"+'"' + "#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var characterSelect = function(charString) {

  // retreiving the string length
  var strLength = charString.length;
  // randomly selecting a position within the string to include in the password
  var charPosition = Math.floor(Math.random()*strLength);
  // returning the character randomly selected by charPosition
  return charString.charAt(charPosition);

}

var chooseCriteria = function(characterType) {
  return window.confirm("Do you want the password to include "+ characterType + " characters?");
}

var generatePassword = function() {
  window.alert("Let's first choose the password criteria:");

  // set up variables for criteria selection and initializing them to false to
  // trigger the first while-loop execution
  var containsLowerCase = false;
  var containsUpperCase = false;
  var containsNumeric = false;
  var containsSpecialChars = false;

  // this loop will ensure are least one character type is selected
  while (!containsLowerCase && !containsUpperCase && !containsNumeric && !containsSpecialChars) {

    // using chooseCriteria() to prompt use for password criteria
    containsLowerCase = chooseCriteria("lowercase");    
    containsUpperCase = chooseCriteria("uppercase");    
    containsNumeric = chooseCriteria("numeric");    
    containsSpecialChars = chooseCriteria("special");
    
    // recap of the chosen criteria
    window.alert("Here is a recap of your new password criteria:");
    
    if (containsLowerCase) {
      window.alert("The password will include lowercase characters.");
    }
    else {
      window.alert("The password will NOT contain lowercase characters.");
    }
    
    if (containsUpperCase) {
      window.alert("The password will include uppercase characters.");
    }
    else {
      window.alert("The password will NOT contain uppercase characters.");
    }
    
    if (containsNumeric) {
      window.alert("The password will include numerica characters.");
    }
    else {
      window.alert("The password will NOT contain numeri characters.");
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
  }

  // prompt for desired password length
  var passwordLength = window.prompt("How long would you like the password to be? Please choose between 8 and 128 characters.");

  // ensuring the password length is between 8 and 128, if not, reprompt for password length
  while (passwordLength < 8 || passwordLength > 128) {
    passwordLength = window.prompt("Invalid entry. How long would you like the password to be? Please choose between 8 and 128 characters.");
  }

  // passwordStr will hold the proposed new password
  var passwordStr = "";
  var isCriteriaSatisfied = false;

  var includedLowerCase = false;
  var includedUpperCase = false;
  var includedNumbers = false;
  var includedSpecialChar = false;

  //debugger;

  // loop until passwordStr is of the chosen length
  while (passwordStr.length < passwordLength) {
    var charType = Math.floor(Math.random()*4);

    if (charType === 0 && containsLowerCase) {
      passwordStr = passwordStr + characterSelect(lowerCase);
      includedLowerCase = true;
    } else if (charType === 1 && containsUpperCase) {
      passwordStr = passwordStr + characterSelect(upperCase);
      includedUpperCase = true;
    } else if (charType === 2 && containsNumeric) {
      passwordStr = passwordStr + characterSelect(numericChar);
      includedNumbers = true;
    } else if (charType === 3 && containsSpecialChars) {
      passwordStr = passwordStr + characterSelect(specialChar);
      includedSpecialChar = true;
    } 
    // halfway through the while-loop check that all criteria has been satified
    if (passwordStr.length === Math.floor(passwordLength/2) && !isCriteriaSatisfied ) {
      // checking if lowercase characters were already part of the password and if it's required that they are
      if (!includedLowerCase && containsLowerCase) {
        passwordStr = passwordStr + characterSelect(lowerCase);
      }
      // checking if uppercase characters were already part of the password and if it's required that they are
      if (!includedUpperCase && containsUpperCase) {
        passwordStr = passwordStr + characterSelect(upperCase);
      }
      // checking if numeric characters were already part of the password and if it's required that they are
      if (!includedNumbers && containsNumeric) {
        passwordStr = passwordStr + characterSelect(numericChar);
      }
      // checking if special characters were already part of the password and if it's required that they are
      if (!includedSpecialChar && containsSpecialChars) {
        passwordStr = passwordStr + characterSelect(specialChar);
      }
      // once we reach here, all criteria should be satisfied; set to true to prevent this stream of code from executing again
      isCriteriaSatisfied = true;
    }


  }
  // alert user of the new passwrd
  window.alert("The password is " + passwordStr);
  // return passwordStr so it's displayed by the writePassword() function
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
