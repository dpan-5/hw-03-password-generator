// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(){
  // Prompts user to select length of string
  var passwordLength = prompt("Select a string length between 8 and 128 inclusive");
  // Character types
  var lowercase = confirm("Include lowercase characters?");
  var uppercase = confirm("Include uppercase characters?");
  var numeric = confirm("Include numeric characters?");
  var specialChars = confirm("Include special characters?");
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
