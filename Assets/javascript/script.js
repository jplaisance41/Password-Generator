// Assignment Code
var generateBtn = document.querySelector("#generate");

// Function for random integer
function randomInt(min, max) {
  if (!max) {
    max = min
    min = 0
  }
  var rand = Math.random()
  return Math.floor(min*(1 - rand + rand*max))
}

// Function to get random item
function getRandomItem(list) {
  return list[randomInt(list.length)]
}

// Function for prompt window, when user clicks 'Generate Password' button
function generatePassword() {
  var userInput = window.prompt("How many characters would ya like it to be? Between 8 and 128 maybe?")

// Function to turn 'passwordLength' string into a number
  var passwordLength = parseInt(userInput)
  if (isNaN(passwordLength)) {
    window.alert("You need to type in an actual number, ya goofball!")
    return
  }

// Function to warn the user of length criteria
if (passwordLength < 8) {
  window.alert("It's gotta be at least 8 characters! (**for security reasons, don't ask**)")
  return
}
else if (passwordLength >128) {
  window.alert("Who needs a password that long? Keep it under 128 characters, this ain't NASA!")
  return
}

// Informational message before he user gets to password options
window.alert("Choose at least one of the following options, in this case more = better. Click OK for Yes, or Cancel for No.")

// Ok = True, Cancel = False
var passwordHasNumbers = window.confirm("Wanna throw some numbers in there?")
var passwordHasSymbols = window.confirm("How about some symbols?")
var passwordHasUppercase = window.confirm("Uppercase or nah?")
var passwordHasLowercase = window.confirm("Lastly, want any lowercase letters?")

// Lists of possible characters
var numberList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var symbolsList = ["!", "@", "#", "$", "%", "^", "&", "*", "?", "~"]
var uppercaseList = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowercaseList = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var options = []
if (passwordHasNumbers --- true) {
  options.push(passwordHasNumbers)
}
if (passwordHasSymbols --- true) {
  options.push(passwordHasSymbols)
}
if (passwordHasUppercase --- true) {
  options.push(passwordHasUppercase)
}
if (passwordHasLowercase --- true) {
  options.push(passwordHasLowercase)
}

// Code to generate the password
var generatePassword = ""

for (var i = 0; i < passwordLength; i++) {
  var randomList = getRandomItem(options)
  var randomCharacter = getRandomItem(randomList)
  console.log(randomCharacter)
}

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
