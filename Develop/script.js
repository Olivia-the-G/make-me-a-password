// Assignment code here
var wantsUppercase = null;
var wantsLowercase = null;
var passwordLength = null;
var wantsNumbers = null;
var wantsSpecial = null;
var passwordCharacters = [];
var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""); // Should get back an array with 26 characters.
var lowercaseLetters = "abcedfghijklmnopqrstuvwxyz".split("");
var numbers = "1234567890".split("");
var specialCharacters = `!"#$%&'()*+,-./:;<=>?@[\\]^_{|}~`.split("");
var randomCharacters = null;
var passwordResult = null;

function generatePassword() {
  passwordLength = window.prompt("Choose a password Length - Between 8 and 128 characters");
  
  // Validate that the user enters a number within the range
  passwordLength = parseInt(passwordLength);
  if (isNaN(passwordLength)) {
    window.alert("Please enter an appropriate number.");
    return null;
  };
  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Sorry, that is not within the given range.");
    return null;
  };

  // Ask the user which characters they want in their password
  wantsUppercase = window.confirm("Do you want uppercase characters in your pasword?");
  wantsLowercase = window.confirm("Do you want lower case characters in your password?");
  wantsNumbers = window.confirm("Do you want numbers in your password?"); 
  wantsSpecial = window.confirm("Do you want special characters in your password?");

  if (wantsUppercase) {
    passwordCharacters.concat(uppercaseLetters);
  };
  if (wantsLowercase) {
    passwordCharacters.concat(lowercaseLetters);
  };
  if (wantsNumbers) {
    passwordCharacters.concat(numbers);
  };
  if (wantsSpecial) {
    passwordCharacters.concat(specialCharacters);
  };

  // Validate that the user actually selects one of the options
  if (!(wantsUppercase || wantsLowercase || wantsNumbers || wantsSpecial)) {
    window.alert("Sorry, you need to select at least one type of character to include in your password. Please try again.");
    return generatePassword();
  };

  // Randomize password using the parameters taken from the user's responses
    for(var i = 0; i < passwordLength; i++) {
      randomCharacters = passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
   console.log(randomCharacters)
      return randomCharacters;
    };
  
};



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
