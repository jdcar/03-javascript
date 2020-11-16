
// Prompts for password criteria

function generatePassword() {

  const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz"
  const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  const numbers = "0123456789"
  const specialCharacters = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"

  let password = "";

  let passwordLength = prompt("What length should the password be? Choose a number between 8 and 128");

  if (passwordLength >= 8 && passwordLength <= 128) {
    console.log("Password is correct length")
    console.log(passwordLength)
  } else {
    prompt("Please enter a number between 8 and 128")
    console.log("Password does not meet criteria")
  }

  var passwordLowerCase = prompt("Should password include lowercase letters? Type any key to say yes, for no leave blank.");

  if (passwordLowerCase) {
    password = password + lowerCaseLetters
    console.log(password)
    console.log("Password will include lower case")
  } else {
    console.log("Password will not include lower case")
  }

  var passwordUpperCase = prompt("Should password include upper case letters? Type any key to say yes, for no leave blank.");

  if (passwordUpperCase) {
    password = password + upperCaseLetters
    console.log(password)
    console.log("Password will include upper case")
  } else {
    console.log("Password will not include upper case")
  }

  var passwordNumbers = prompt("Should password include numbers? Type any key to say yes, for no leave blank.")

  if (passwordNumbers) {
    password = password + numbers
    console.log(password)
    console.log("Password will include numbers")
  } else {
    console.log("No numbers needed")
  }

  var passwordSpecialChars = prompt("Should password include special characters? Special characters include:\n !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~")

  if (passwordSpecialChars) {
    password = password + specialCharacters
    console.log(password)
    console.log("Password will include special characters")
  } else {
    console.log("No special characters needed")
  }

  // Now the variable "password" is made up of all the characters that can be used


  // https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
  // https://www.codegrepper.com/code-examples/r/random+letter+from+string+javascript
  var text = "";
  for (var i = 0; i < passwordLength; i++)
    text += password.charAt(Math.floor(Math.random() * password.length));
  console.log(text)
  alert("Password generated!")
  return text;
// At this point the generated password is the variable text

  var generateBtn = document.querySelector("#generate");

}


// Refractor code starts here
// Assignment Code
var generateBtn = document.querySelector("#generate");

// this puts the password generated into the box where it now says "Your secure Passord"


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


