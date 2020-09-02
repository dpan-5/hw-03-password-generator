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
  // Prompts user to select length of string and changes string to number
  do {
    var passwordLength = prompt("Please select password length between 8-128 inclusive");
    passwordLength = parseInt(passwordLength);
  }
  while(8 > passwordLength || passwordLength > 128);

  // Character sets
  var newCharSet = "";
  var lowerCharSet = "abcdefghijklmnopqrstuvwxyz";
  var upperCharSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericCharSet = "0123456789";
  var specialCharSet = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

  // Prompts user to select character types and concatenates predefined char sets to newCharSet, one character type must be selected
  do {
    var lowercase = confirm("Include lowercase characters?");
    if(lowercase) {
      newCharSet += lowerCharSet;
    }
    var uppercase = confirm("Include uppercase characters?");
    if(uppercase){
      newCharSet += upperCharSet;
    }
    var numeric = confirm("Include numeric characters?");
    if(numeric){
      newCharSet += numericCharSet;
    }
    var special = confirm("Include special characters?");
    if(special){
      newCharSet += specialCharSet;
    }  
  }
  while(newCharSet === "");

  // Loops through character set and selects random characters to generate password
  for(var i = 0, n = newCharSet.length; i < passwordLength; i++){
    newPassword += newCharSet.charAt(Math.floor(Math.random() * n));
  }
  return newPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
