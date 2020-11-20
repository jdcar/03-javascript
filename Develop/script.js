
var generateBtn = document.querySelector("#generate")

// Prompts for password criteria

function generatePassword() {

  // Variables of all the potential password characters
  const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz"
  const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  const numbers = "0123456789"
  const specialCharacters = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
  // Starts password as empty string
  let passwordCharacters = "";

  let passwordLength = prompt("What length should the password be? Choose a number between 8 and 128");
  // Ask for length of passwords
  if (passwordLength >= 8 && passwordLength <= 128) {

    console.log("Password is correct length")
    console.log(passwordLength)
  } else {
    alert("Please enter a number between 8 and 128")
    // restart program if password is wrong length
    console.log("Password does not meet criteria")
    generatePassword();
  }
  // Prompt for including lower case letters
  var passwordLowerCase = prompt("Should password include lowercase letters? Type any key to say yes, for no leave blank.");

  if (passwordLowerCase) {
    passwordCharacters = passwordCharacters + lowerCaseLetters
    console.log(passwordCharacters)
    console.log("Password will include lower case")
  } else {
    console.log("Password will not include lower case")
  }
  // Prompt for including upper case letters
  var passwordUpperCase = prompt("Should password include upper case letters? Type any key to say yes, for no leave blank.");

  if (passwordUpperCase) {
    passwordCharacters = passwordCharacters + upperCaseLetters
    console.log(passwordCharacters)
    console.log("Password will include upper case")
  } else {
    console.log("Password will not include upper case")
  }
  // Prompt for including numbers
  var passwordNumbers = prompt("Should password include numbers? Type any key to say yes, for no leave blank.")

  if (passwordNumbers) {
    passwordCharacters = passwordCharacters + numbers
    console.log(passwordCharacters)
    console.log("Password will include numbers")
  } else {
    console.log("No numbers needed")
  }
  // Prompt for incuding special characters
  var passwordSpecialChars = prompt("Should password include special characters? Special characters include:\n !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~")

  if (passwordSpecialChars) {
    passwordCharacters = passwordCharacters + specialCharacters
    console.log(passwordCharacters)
    console.log("Password will include special characters")
  } else {
    console.log("No special characters needed")
  }

  // Now the variable "password" is made up of all the characters that can be used
  // https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
  // https://www.codegrepper.com/code-examples/r/random+letter+from+string+javascript

  // Selects random characters for password at correct length
  var password = "";
  for (var i = 0; i < passwordLength; i++)
    password += passwordCharacters.charAt(Math.floor(Math.random() * passwordCharacters.length));
  console.log(password)

  alert("Password generated!: " + "\n" + password)


  function writePassword() {
    document.querySelector("#password").innerHTML = password;

  }

  writePassword();

  return password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword, function (event) {
  event.preventDefault();

});






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


