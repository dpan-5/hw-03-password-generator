// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(){
  // Initialize new string to hold generated password
  var newPassword = "";
  // Prompts user to select length of string and changes string to int
  var passwordLength = prompt("Select a string length between 8 and 128 inclusive");
  passwordLength = parseInt(passwordLength)
  // Prompts user to select character types
  var lowercase = confirm("Include lowercase characters?");
  var uppercase = confirm("Include uppercase characters?");
  var numeric = confirm("Include numeric characters?");
  var specialChars = confirm("Include special characters?");

  // Character sets
  var lowerCharSet = "abcdefghijklmnopqrstuvwxyz";
  var upperCharSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericCharSet = "0123456789";
  var specialCharSet = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";



  // Loops through character set and selects random characters to generate password
  for(var i = 0, n = lowerCharSet.length; i < passwordLength; i++){
    newPassword += lowerCharSet.charAt(Math.floor(Math.random() * n));
  }
  return newPassword;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
