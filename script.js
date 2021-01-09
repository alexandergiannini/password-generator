
// Assignment code here
let lengthPrompt = 0;
let lowerCasePrompt = [];
let upperCasePrompt = [];
let numericPrompt = [];
let specialCharacterPrompt = [];


let lengthValue = lengthPrompt;
let lowerCaseValues = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; //can also make this one big string
let upperCaseValues = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let numericValues = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
let specialCharacterValues = ["!", "@", "#", "$", "%", "^","&", "*", "-", "_", "+", "=", ".", "/", "?", ";", ":"];


///// not needed
let lowerCase = 'abcdefghijklmnopqrstuvyxyz'
let upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
let numbers = '0123456789'
let special = '!@#$%^&*()-_+={}||[];:,.?/`~'

let upperCaseAndNumbers = 'BCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'
let upperCaseNumbersAndSpecial = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()-_+={}||[];:,.?/`~'

let lowerAndUpperCase = 'abcdefghijklmnopqrstuvWxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
let lowerUpperAndNum = 'abcdefghijklmnopqrstuvWxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'
let allValues = 'abcdefghijklmnopqrstuvWxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()-_+={}||[];:,.?/`~'
/////// not needed ^^^

// Get references to the #generate element
let generateBtn = document.querySelector("#generate");
//let lengthPrompt = window.prompt('Please enter the LENGTH of your password in DIGITS. It can be from 8 to 128 characters.')
let passwordText = document.querySelector("#password");


let generateLowerCase = function (lowerCaseValues) {
  return lowerCaseValues[Math.floor(Math.random() * lowerCaseValues.length)];
}

let generateUpperCase = function (upperCaseValues) {
  return upperCaseValues[Math.floor(Math.random() * upperCaseValues.length)];
}

let generateNumber = function (numericValues) {
  return numericValues[Math.floor(Math.random() * numericValues.length)];
}

let generateSpecialCharacter = function (specialCharacterValues) {
  return specialCharacterValues[Math.floor(Math.random() * specialCharacterValues.length)];
}

// Write password to the #password input
function writePassword() {
 // let password = generatePassword();
  let passwordText = document.querySelector("#password");


  // passwordText.value = password;

}





let generatePassword = function (lowerCase, upperCase, number, specialCharacter, length) {
/// TODOS: listed below

//// init pw variable

let generatedPassword = ''

if (lowerCasePrompt && upperCasePrompt && numericPrompt && specialCharacterPrompt) {
  console.log('Hi there!')
} else {
  console.group('No lowercase string')
}

//// filter out non selected prompts that weren't selected

//// Loop over length, call a generator function for each type

//// We need to add final password


//const typesCount = lowerCase + upperCase + number + specialCharacter + 
//console.log('typesCount:', typesCount)
//const typesArr = [{lowerCase}, {upperCase}, {number}, {specialCharacter}].filter(function () {

//})
//console.log('typesArr', typesArr)



 passwordText.textContent = "SamplePassWord!"
}

/// gotta figure out what to do with this
let randomFunction = {
  lower: generateLowerCase,
  upper: generateUpperCase,
  number: generateNumber,
  symbol: generateSpecialCharacter
}
/////

generateBtn.addEventListener("click", function () {
  lengthPrompt = window.prompt('Please enter the LENGTH of your password in DIGITS. It can be from 8 to 128 characterssssss.');

  if (lengthPrompt >= 8 && lengthPrompt <= 128) {
    lengthValue = +lengthPrompt; ///lenghtPrompt is now a number instead of a string.
    lowerCasePrompt = window.confirm('Would you like lower case letters to be included? Select OK for Yes or Cancel for NO');

    if (lowerCasePrompt || !lowerCasePrompt) {
      upperCasePrompt = window.confirm('Would you like upper case letters to be included in your password?');
    }

    if (upperCasePrompt || !upperCasePrompt) {
      numericPrompt = window.confirm('Would you like any numbers to be included in your password?');
    }

    if (numericPrompt || !numericPrompt) {
      specialCharacterPrompt = window.confirm('Would you like any special characters to be included in your password?');
    }

    if (specialCharacterPrompt || !specialCharacterPrompt) {
      window.alert('Generating password right now');
      passwordText = generatePassword(lowerCaseValues, upperCaseValues, numericValues, specialCharacterValues, lengthValue);
      console.log(generateLowerCase(lowerCaseValues));
    }

  } else if (lengthPrompt <= 7) {
    window.alert('Password length is too short.');
  } else if (lengthPrompt >= 129) {
    window.alert('Password length is too long.');
  } else if (typeof lengthPrompt === 'string' || typeof lengthPrompt === 'boolean') {
    window.alert('Please enter a number.');
  } else {
    window.alert('Please enter a number.');
  }

console.log(lengthValue) /// this displays the length value
console.log(lowerCasePrompt)
});

console.log(generateLowerCase(lowerCaseValues))
console.log(generateUpperCase(upperCaseValues))
console.log(generateNumber(numericValues))
console.log(generateSpecialCharacter(specialCharacterValues))
console.log(lengthValue)
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