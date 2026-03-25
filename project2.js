const friend = "BRUTUS";
const shiftValue = 3;

const alphabet = "abcdefghijklmnopqrstuvwxyz";

let result = "";

for (let i = 0; i < friend.length; i++) {

  let currentLetter = friend[i];
  let lowerLetter = currentLetter.toLowerCase();

  let index = alphabet.indexOf(lowerLetter);

  let shiftedIndex = index + shiftValue;

  if (shiftedIndex >= alphabet.length) {
    shiftedIndex = shiftedIndex % alphabet.length;
  }

  let newLetter = alphabet[shiftedIndex];

  result = result + newLetter.toUpperCase();
}

console.log(result);