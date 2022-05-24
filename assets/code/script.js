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


    containsLowerCase = chooseCriteria("lowercase");    
    containsUpperCase = chooseCriteria("uppercase");    
    containsNumeric = chooseCriteria("numeric");    
    containsSpecialChars = chooseCriteria("special");
    
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


  var passwordLength = window.prompt("How long would you like the password to be? Please choose between 8 and 128 characters.");

  while (passwordLength < 8 || passwordLength > 128) {
    passwordLength = window.prompt("Invalid entry. How long would you like the password to be? Please choose between 8 and 128 characters.");
  }

  var passwordStr = "";

  var includedLowerCase = false;
  var includedUpperCase = false;
  var includedNumbers = false;
  var includedSpecialChar = false;

  //debugger;
  //for (var i = 0; i < passwordLength; i++) {
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
