const friend = "BRUTUS";
const shiftValue = 3;
const alphabet = "abcdefghijklmnopqrstuvwxyz";

function encryptLetter(letter, shift) {
  // Find where the letter exists in the alphabet
  const index = alphabet.indexOf(letter.toLowerCase());

  // Move forward by shift value
  const newIndex = (index + shift) % alphabet.length;

  console.log(letter, "->", alphabet[newIndex]);

  
  return alphabet[newIndex];
}
function encryptMessage(word, shift) {
  let encryptedMessage = "";

  // go through each letter
  for (let i = 0; i < word.length; i++) {
    encryptedMessage += encryptLetter(word[i], shift);
  }

  // DEBUG checkpoint
  console.log("Encrypted:", encryptedMessage);

  return encryptedMessage;
}

function decryptLetter(letter, shift) {
  const index = alphabet.indexOf(letter.toLowerCase());

  // move backwards
  const newIndex = (index - shift + alphabet.length) % alphabet.length;

  console.log(letter, "->", alphabet[newIndex]);

  return alphabet[newIndex];
}
function decryptMessage(word, shift) {
  let decryptedMessage = "";

  for (let i = 0; i < word.length; i++) {
    decryptedMessage += decryptLetter(word[i], shift);
  }

  console.log("Decrypted:", decryptedMessage);

  return decryptedMessage;
}
const encrypted = encryptMessage(friend, shiftValue);
decryptMessage(encrypted, shiftValue);
