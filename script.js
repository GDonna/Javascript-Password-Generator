// Assignment Code

//This is where it is selecting the part tagged "generate" from the HTML, and assigning it variable "generateBtn"
var generateBtn = document.querySelector("#generate");
//Arrat of special characters to be included in the password
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
    '.',
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
    'z',
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
    'Z',
  ];
  
var characterArray =[]
// Function for getting a random element from an array
function getRandom(arr) {
    var randIndex = Math.floor(Math.random() * arr.length);
    var randElement = arr[randIndex];
  
    return randElement;
  }
  
function generatePassword() {
    var userChoice = window.prompt("How long do you want your password to be?");
    //parseInt will define the answer as a number of characters
    var length = parseInt(userChoice);
    if (length < 8 || length > 128) {
        alert ("Must be between 8 - 128 characters in length");
        return;
    }

    var includeLowercase = confirm ("Include Lowercase?")
    var includeUppercase = confirm ("Include Uppercase?")
    var includeNumbers = confirm ("Include Numbers?")
    var includeCharacters = confirm ("Include Special Characters?")
    console.log("Answers", length, includeLowercase, includeUppercase, includeNumbers, includeCharacters)

    if (includeUppercase) {
        characterArray = characterArray.concat(upperCasedCharacters);
    }
    
    if (includeLowercase) {
        characterArray = characterArray.concat(lowerCasedCharacters);
    }

    if (includeNumbers) {
        characterArray = characterArray.concat(numericCharacters);
    }

    if (includeCharacters) {
        characterArray = characterArray.concat(specialCharacters);
    }

    console.log("Character Array", characterArray);

//<-- Pick number of random characters out of the concatenated [characterArrays] -->

        // Array to store types of characters to include in password
    var result = [];

        // For loop to iterate over the password length from the options object, selecting random indices from the array of possible characters and concatenating those characters into the result variable
    for (var i = 0; i < length; i++) {
        var possibleCharacter = getRandom(characterArray);

        result.push(possibleCharacter);
    };

return result.join("");
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
