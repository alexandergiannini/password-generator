
// Assignment code here
let lengthPrompt = '';
let lowerCasePrompt = [];
let upperCasePrompt = [];
let numericPrompt = [];
let specialCharacterPrompt = [];


let lengthValue = lengthPrompt
let lowerCaseValues = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
let upperCaseValues = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
let numericValues = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
let specialCharacterValues = ["!", "@", "#", "$", "%", "^","&", "*", "-", "_", "+", "=", ".", "/", "?", ";", ":"]


// Get references to the #generate element
let generateBtn = document.querySelector("#generate");
//let lengthPrompt = window.prompt('Please enter the LENGTH of your password in DIGITS. It can be from 8 to 128 characters.')

let generateLowerCase = function (lowerCaseValues) {
  return lowerCaseValues[Math.floor(Math.random() * lowerCaseValues.length)]
}

let generateUpperCase = function (upperCaseValues) {
  return upperCaseValues[Math.floor(Math.random() * upperCaseValues.length)]
}

let generateNumber = function (numericValues) {
  return numericValues[Math.floor(Math.random() * numericValues.length)]
}

let generateSpecialCharacter = function (specialCharacterValues) {
  return specialCharacterValues[Math.floor(Math.random() * specialCharacterValues.length)]
}

// Write password to the #password input
function writePassword() {
 // let password = generatePassword();
  let passwordText = document.querySelector("#password");


  // passwordText.value = password;

}

generateBtn.addEventListener("click", function () {
  lengthPrompt = window.prompt('Please enter the LENGTH of your password in DIGITS. It can be from 8 to 128 characterssssss.')

  if (lengthPrompt >= 8 && lengthPrompt <= 128) {
    lowerCasePrompt = window.confirm('Would you like lower case letters to be included? Select OK for Yes or Cancel for NO')

    if (lowerCasePrompt || !lowerCasePrompt) {
      upperCasePrompt = window.confirm('Would you like upper case letters to be included in your password?')
    }

    if (upperCasePrompt || !upperCasePrompt) {
      numericPrompt = window.confirm('Would you like any numbers to be included in your password?')
    }

    if (numericPrompt || !numericPrompt) {
      specialCharacterPrompt = window.confirm('Would you like any special characters to be included in your password?')
    }

    if (specialCharacterPrompt || !specialCharacterPrompt) {
      window.alert('Generating password right now')
    }

  } else if (lengthPrompt <= 7) {
    window.alert('Password length is too short.')
  } else if (lengthPrompt >= 129) {
    window.alert('Password length is too long.')
  } else if (typeof lengthPrompt === 'string' || typeof lengthPrompt === 'boolean') {
    window.alert('Please enter a number.')
  } else {
    window.alert('Please enter a number.')
  }


});

console.log(generateLowerCase(lowerCaseValues))
console.log(generateUpperCase(upperCaseValues))
console.log(generateNumber(numericValues))
console.log(generateSpecialCharacter(specialCharacterValues))
// Add event listener to generate button
////use boolean values??
///Make the values global
///remove let keyword inside event listener
///generate password --> 
///// All 

///window.confirm
///include in for loop --> let randomNumber = Math.floor(Math.random() * 4 + 1)
///let lowerCaseLetter = 'abcd' --> can index this by array

///generateBtn.addEventListener("click", writePassword) DUPLICATED the above if i need to use again (was in starter code)


//// originally in if statement with addEventListener