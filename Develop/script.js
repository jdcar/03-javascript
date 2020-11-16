
// Prompt for password

var password = "password";

var passwordLength = prompt("What length should the password be? Choose a number between 8 and 128");

if (passwordLength >= 8 && passwordLength <= 128) {
  console.log("Password is correct length")

} else {
  prompt("Please enter a number between 8 and 128")
  console.log("Password does not meet criteria")
}

var passwordLowerCase = prompt("Should password include lowercase letters?");

if (passwordLowerCase.toLowerCase() == "yes") {
  includeLower = true;
  console.log("Password will include lower case")
} else {
  console.log("Password will not include lower case")
}

var passwordUpperCase = prompt("Should password include upper case letters?");

if (passwordUpperCase.toLowerCase() == "yes") {
  includeUpper = true;
  console.log("Password will include upper case")
} else {
  console.log("Password will not include upper case")
}

var passwordSpecialChars = prompt("Enter any special characters you would like to include:\n !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~")

if (passwordSpecialChars) {
  console.log(password + passwordSpecialChars)
} else {
  console.log("No special characters needed")
}




// lowercase, uppercase, numeric, and/or special characters
// Assignment Code
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





// Instructions:

// WHEN I click the button to generate a password

// THEN I am presented with a series of prompts for password criteria

// WHEN prompted for password criteria

// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page


