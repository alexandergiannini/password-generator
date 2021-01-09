
// Assignment code here
let lengthPrompt = 0;
let lowerCasePrompt;
let upperCasePrompt;
let numericPrompt;
let specialCharacterPrompt;
let userChoicesPWArray = [];
let updatedArray;


let lengthValue = lengthPrompt;
let lowerCaseValues = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; //can also make this one big string
let upperCaseValues = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let numericValues = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
let specialCharacterValues = ["!", "@", "#", "$", "%", "^", "&", "*", "-", "_", "+", "=", ".", "/", "?", ";", ":"];


// Get references to the #generate element
let generateBtn = document.querySelector("#generate");
//let lengthPrompt = window.prompt('Please enter the LENGTH of your password in DIGITS. It can be from 8 to 128 characters.')
let passwordText = document.querySelector("#password");


let generateLowerCase = function (lowerCaseValues) {
  return lowerCaseValues[Math.floor(Math.random() * lowerCaseValues.length)]; // returns single random value....could push them into an array
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

////I need this to match the lengthValue, only sputing out one value at a time
let generateUpdatedArray = function (updatedArray) {
  return updatedArray[Math.floor(Math.random() * updatedArray.length)]
  
}

// Write password to the #password input
function writePassword() {
  // let password = generatePassword();
  let passwordText = document.querySelector("#password");


  // passwordText.value = password;

}





let generatePassword = function (array) {
  /// TODOS: listed below

  //// init pw variable

  let generatedPassword = ''

  for (let i = 0; i < lengthValue; i++) {

  }


  //// filter out non selected prompts that weren't selected

  //// Loop over length, call a generator function for each type

  //// We need to add final password

  if (lowerCasePrompt && upperCasePrompt && numericPrompt && specialCharacterPrompt) { /// all values
    updatedArray = userChoicesPWArray.concat(lowerCaseValues, upperCaseValues, numericValues, specialCharacterValues);


////May need to edit this.
   } else if (!lowerCasePrompt && !upperCasePrompt && !numericPrompt && !specialCharacterPrompt) { ////lower upper and numbers
      window.alert('Oops.')
      updatedArray = []


  } else if (lowerCasePrompt && upperCasePrompt && numericPrompt) { ////lower upper and numbers
   updatedArray = userChoicesPWArray.concat(lowerCaseValues, upperCaseValues, numericValues )

 } else if (lowerCasePrompt && upperCasePrompt && specialCharacterPrompt) { ///lower upper and special 
  updatedArray = userChoicesPWArray.concat(lowerCaseValues, upperCaseValues, specialCharacterValues)

  } else if (lowerCasePrompt && numericPrompt && specialCharacterPrompt) {
   updatedArray = userChoicesPWArray.concat(lowerCaseValues, numericValues, specialCharacterValues)

  } else if (upperCasePrompt && numericPrompt && specialCharacterPrompt) {
   updatedArray = userChoicesPWArray.concat(upperCaseValues, numericValues, specialCharacterValues)

 } else if (lowerCasePrompt && upperCasePrompt) {
  updatedArray = userChoicesPWArray.concat(lowerCaseValues, upperCaseValues)
 } else if (lowerCasePrompt && numericPrompt) {
  updatedArray = userChoicesPWArray.concat(lowerCaseValues, numericValues)
 } else if (lowerCasePrompt && specialCharacterPrompt) {
  updatedArray = userChoicesPWArray.concat(lowerCaseValues, specialCharacterValues)
 } else if (upperCasePrompt && numericPrompt) {
  updatedArray = userChoicesPWArray.concat(upperCaseValues, numericValues)
 } else if (upperCasePrompt && specialCharacterPrompt) {
  updatedArray = userChoicesPWArray.concat(upperCaseValues, specialCharacterValues)
 } else if (numericPrompt && specialCharacterPrompt) {
  updatedArray = userChoicesPWArray.concat(numericValues, specialCharacterValues)
 } else if (lowerCasePrompt) {
  updatedArray = userChoicesPWArray.concat(lowerCaseValues)
 } else if (upperCasePrompt) {
  updatedArray = userChoicesPWArray.concat(upperCaseValues)
 } else if (numericPrompt) {
  updatedArray = userChoicesPWArray.concat(numericValues)
 } else if (specialCharacterPrompt) {
  updatedArray = userChoicesPWArray.concat(specialCharacterValues)
 } 

 passwordText.textContent = generateUpdatedArray(updatedArray) ///this is good.

///passwordText.textContent = updatedArray ---> dont delete this, this may be key
 console.log(updatedArray) /////This definitely displays the updated array
//passwordText.textContent = generateUpdatedArray(updatedArray) ///This becomes undefined when NO prompts are shown. 

  //passwordText.textContent = "SamplePassWord!"
}

generateBtn.addEventListener("click", function () {// attach the event listener once the password is generated. 

//consider taking out most of the error handling 
//make and wrap in a function this generating of a password
//once you have the users choices, make it random,  then use a loop to iterate the number they selected

  lengthPrompt = window.prompt('Please enter the LENGTH of your password in DIGITS. It can be from 8 to 128 characterssssss.');

  if (lengthPrompt >= 8 && lengthPrompt <= 128) {
    lengthValue = +lengthPrompt; ///lenghtPrompt is now a number instead of a string.
    lowerCasePrompt = window.confirm('Would you like lower case letters to be included? Select OK for Yes or Cancel for NO');

    upperCasePrompt = window.confirm('Would you like upper case letters to be included in your password?');

    numericPrompt = window.confirm('Would you like any numbers to be included in your password?');

    specialCharacterPrompt = window.confirm('Would you like any special characters to be included in your password?');

    window.alert('Generating Password now.')

    generatePassword(updatedArray)
    //passwordText.textContent = generatePassword()

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