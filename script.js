// Assignment Code
var generateBtn = document.querySelector("#generate");

const characterAmountRange = document.getElementById('characterAmountRange');

const CharacterAmountNumber = document.getElementById('characterAmountNumber');

const includeUppercaseEl = document.getElementById('includeUppercase');

const includeNumbersEl = document.getElementById('includeNumbers');

const includeSymbolsEl = document.getElementById('includeSymbols');

const form = document.getElementById('passwordGenerator');

const password = document.getElementById('password');

form.addEventListener('submit', e=> {
  e.preventDefault()
  const CharacterAmount = CharacterAmountNumber.value
  const includeUppercaseEl = includeUppercaseEl.checked
  const includeNumbersEl = includeNumbersEl.checked
  const includeSymbolsEl = includeSymbolsEl.checked
  const password = generatePassword(CharacterAmount, includeUppercaseEl, includeNumbersEl, includeSymbolsEl);
  password.innerText = password
})

const uppercaseCharCodes = arrayLowToHigh(65,90)
const lowercaseCharCodes = arrayLowToHigh(97,122)
const numberCharCodes = arrayLowToHigh(48,57)
const symbolCharCodes = arrayLowToHigh(33,47) + arrayLowToHigh(58,64) + arrayLowToHigh(91,96) + arrayLowToHigh(123,126)


CharacterAmountNumber.addEventListener('input', syncCharacterAmount);
characterAmountRange.addEventListener('input', syncCharacterAmount);

//using char codes to make it cleaner
function generatePassword(CharacterAmount, includeUppercase, includeNumbers, includeSymbols) {
  let charCodes = lowercaseCharCodes
  if (includeUppercase) charCodes = charCodes.concat(uppercaseCharCodes)
  if (includeNumbers) charCodes = charCodes.concat(numberCharCodes)
  if (includeSymbols) charCodes = charCodes.concat(symbolCharCodes)
  
  const passwordCharacters = []
  for (let i = 0; i < CharacterAmount, i++;){
    const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
    passwordCharacters.push(String.fromCharCode(characterCode))
  }
  return passwordCharacters.join('')
}

function arrayLowToHigh(low, high) {
  const array = []
  for (let i = low; i <= high; i++) {
    array.push(i)
  }
  return array
}

function syncCharacterAmount(e) {
  const value = e.target.value
  characterAmountNumber.value = value
  characterAmountRange.value = value
}