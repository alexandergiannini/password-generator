
// Assignment code here


// Get references to the #generate element
let generateBtn = document.querySelector("#generate");
//let lengthPrompt = window.prompt('Please enter the LENGTH of your password in DIGITS. It can be from 8 to 128 characters.')


// Write password to the #password input
function writePassword() {
 // let password = generatePassword();
  let passwordText = document.querySelector("#password");


  // passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", function () {
  let lengthPrompt = window.prompt('Please enter the LENGTH of your password in DIGITS. It can be from 8 to 128 characters.')

  if (lengthPrompt >= 8 && lengthPrompt <= 128) {
    let lowerCasePrompt = window.prompt('Would you like lower case letters to be included? Please answer YES or NO.')

    if (lowerCasePrompt === 'yes' || lowerCasePrompt === 'YES' || lowerCasePrompt === 'Yes' || lowerCasePrompt === 'no' || lowerCasePrompt === 'No' || lowerCasePrompt === 'NO') {
     let upperCasePrompt = window.prompt('Sounds good; would you like to upper case letters to be included?')

     if (upperCasePrompt === 'yes' || upperCasePrompt === 'YES' || upperCasePrompt === 'Yes' || upperCasePrompt === 'no' || upperCasePrompt === 'No' || upperCasePrompt === 'NO') {
      let numericPrompt = window.prompt('Sounds good; would you like to include any numbers?')

      if (numericPrompt === 'yes' || numericPrompt === 'YES' || numericPrompt === 'Yes' || numericPrompt === 'no' || numericPrompt === 'No' || numericPrompt === 'NO' ) {
        let specialValuePrompt = window.prompt('Sounds good; Would you like to add any special characters?')

        if (specialValuePrompt === 'yes' || specialValuePrompt === 'YES' || specialValuePrompt === 'Yes' || specialValuePrompt === 'no' || specialValuePrompt === 'No' || specialValuePrompt === 'NO' ) {
          window.alert('Generating password right now.')
        } else {
          window.alert('Please answer yes or no if u want to include special characters.') /////for special characters
        }
      }
      else {
        window.alert('Please answer the question properly.') ////for numeric prompts
      }

    } 
    else {
      window.alert('Please answer YES or NO to thissss.') //// for uppercase letters
    }

    }
    else {
      window.alert('Please answer YES or NO.') /////for lowercase letters
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



///generateBtn.addEventListener("click", writePassword) DUPLICATED the above if i need to use again (was in starter code)


//// originally in if statement with addEventListener


//// this if may not be needed. 
  ///  if (characterPrompt === undefined || characterPrompt === null) {
  ///    window.alert('Please try again.')
  ///  }
//////