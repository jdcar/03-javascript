
var generateBtn = document.querySelector("#generate")

// Prompts for password criteria

function generatePassword() {

  // Variables of all the potential password characters
  const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz"
  const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  const numbers = "01234567890123456789"
  const specialCharacters = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
  // Starts password as an empty string
  let passwordCharacters = "";

  let passwordLength = prompt("What length should the password be? Choose a number between 8 and 128");
  // Ask for length of passwords
  if (passwordLength >= 8 && passwordLength <= 128) {
    // if (passwordLength >= 0 && passwordLength <= 1) {


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

  // VALIDATION

  // var arrayLowerCase = lowerCaseLetters.split("");
  // var arrayUpperCase = upperCaseLetters.split("");
  // var arrayNumbers = numbers.split("");
  // var arraySpecialCharacters = specialCharacters.split("");
  // var arrayOfPassword = password.split("");

  // // Checks lower case
  // if (passwordLowerCase) {
  //   count = 0;
  //   for (var i = 0; i < arrayLowerCase.length; i++) {
  //     for (var j = 0; j < arrayOfPassword.length; j++) {
  //       if (arrayLowerCase[i] === arrayOfPassword[j]) {
  //         count++;
  //         if (count > 0) {
  //           console.log("Password is valid")
  //           writePassword();
  //         } else {
  //           console.log("Password has no lowercase letters, generate a new one!")
  //           generatePassword();
  //         }
  //       }
  //     }
  //   }
  // }

  // // Checks upper case
  // if (passwordUpperCase) {
  //   count = 0;
  //   for (var i = 0; i < arrayUpperCase.length; i++) {
  //     for (var j = 0; j < arrayOfPassword.length; j++) {
  //       if (arrayUpperCase[i] === arrayOfPassword[j]) {
  //         count++;
  //         if (count > 0) {
  //           console.log("Password is valid")
  //           writePassword();
  //         } else {
  //           console.log("Password has no upper case letters, generate a new one!")
  //           generatePassword();
  //         }
  //       }
  //     }
  //   }
  // }
  // // Checks numbers
  // if (passwordNumbers) {
  //   count = 0;
  //   for (var i = 0; i < arrayNumbers.length; i++) {
  //     for (var j = 0; j < arrayOfPassword.length; j++) {
  //       if (arrayNumbers[i] === arrayOfPassword[j]) {
  //         count++;
  //         if (count > 0) {
  //           console.log("Password is valid")
  //           writePassword();
  //         } else {
  //           console.log("Password has no numbers, generate a new one!")
  //           generatePassword();
  //         }
  //       }
  //     }
  //   }
  // }
  // // Checks Special characters
  // if (passwordSpecialChars) {
  //   count = 0;
  //   for (var i = 0; i < arraySpecialCharacters.length; i++) {
  //     for (var j = 0; j < arrayOfPassword.length; j++) {
  //       if (arraySpecialCharacters[i] === arrayOfPassword[j]) {
  //         count++;
  //         if (count > 0) {
  //           console.log("Password is valid")
  //           writePassword();
  //         } else {
  //           console.log("Password has no special characters, generate a new one!")
  //           generatePassword();
  //         }
  //       }
  //     }
  //   }
  // }

  // End VALIDATION

  // Function that writes password to the box
  function writePassword() {
    document.querySelector("#password").innerHTML = password;

  }

  // Call the function that writes password to box

  writePassword();

  return password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword, function (event) {
  event.preventDefault();

});


