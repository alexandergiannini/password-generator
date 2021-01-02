
// Assignment code here


// Get references to the #generate element
let generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");


  // passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", function () {
  let lengthPrompt = window.prompt('Please enter the LENGTH of your password in DIGITS. It can be from 8 to 128 characters.')

  if (lengthPrompt >= 8 && lengthPrompt <= 128) {
    let characterPrompt = window.prompt('Please enter any special characters in the password. That includes lowercase, uppercase, numeric, and special characters.')

//// this if may not be needed. 
    if (characterPrompt === undefined || characterPrompt === null) {
      window.alert('Please try again.')
    }
//////


  } else if (lengthPrompt <= 7) {
    window.alert('Password character length is too short.')
  } else if (lengthPrompt >= 129) {
    window.alert('Password character length is too long.')
  } else if (typeof lengthPrompt === 'string' || typeof lengthPrompt === 'boolean') {
    window.alert('Please enter a number.')
  } else {
    window.alert('Please enter a number.')
  }
});



///generateBtn.addEventListener("click", writePassword) DUPLICATED the above if i need to use again (was in starter code)