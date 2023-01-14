// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
// Essentially what kind of character do you want, should return options
  // 'Choose password length' prompt (between 10 and 64)
  // Allow user input
  // Password should be validated if 10>=i<=64, else alert "invalid password length"
  // Show password options (OK for Y, Cancel for N):
    // uppercase
    // lowercase
    // numeric
    // special
    // ...else alert 'password must contain at least one of these character types'
  // String randomised characters based on options user chosen
  // Display string in box
function getPasswordOptions() {

}

// Function for getting a random element from an array
// Should return random element ""
function getRandom(arr) {

}

// Function to generate password with user input
// 
function generatePassword() {
  let password = "";
  
  // insert logic
  
  return password;
}
// Already implemented in HTML
  // Get references to the #generate element
  var generateBtn = document.querySelector('#generate');

  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector('#password');

    passwordText.value = password;
  }

  // Add event listener to generate button
  generateBtn.addEventListener('click', writePassword);


// DO NOT FORGET TO TAKE OUT CONSOLE.LOG
// READ THE ERRORS FOR CLUES