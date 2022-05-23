// Assignment code here
var numArray = "0123456789";
var specialChar = " !"+'"' + "#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var generatePassword = function() {
  window.alert("Let's first choose the password criteria:");

    for (var i = 0; i < 10; i++) {
      window.alert(specialChar.charAt(Math.floor(Math.random()*31)));
    }
  

  // var containsLowerCase = window.confirm("Do you want the password to include lowercase letters?");

  // var containsUpperCase = window.confirm("Do you want the password to include upper letters?");

  // var containsNumeric = window.confirm("Do you want the password to include numbers?");

  // var containsSpecialChars = window.confirm("Do you want the password to include special characters?");

  // var passwordLength = 0 ;

  // while (passwordLength < 8 || passwordLength > 128) {
  //   passwordLength = window.prompt("How long would you like the password to be? Please choose between 8 and 128 characters.");
  // }

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
