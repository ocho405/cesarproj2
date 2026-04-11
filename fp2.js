const alphabet = "abcdefghijklmnopqrstuvwxyz";

// ENCRYPT FUNCTION
function encrypt(message, shiftValue) {
  let encryptedMessage = "";
  let counter = 0;

  shiftValue = ((shiftValue + 26) % 26);

  for (let char of message) {
    if (/[a-zA-Z]/.test(char)) {
      let base = char === char.toUpperCase() ? 65 : 97;

      let shifted =
        ((char.charCodeAt(0) - base + shiftValue) % 26) + base;

      encryptedMessage += String.fromCharCode(shifted);
      counter++;

      // add noise every 2 letters
      if (counter === 2) {
        const randomLetter =
          alphabet[Math.floor(Math.random() * alphabet.length)];
        encryptedMessage += randomLetter;
        counter = 0;
      }
    } else {
      encryptedMessage += char;
    }
  }

  return encryptedMessage;
}

// DECRYPT FUNCTION (FIXED)
function decrypt(encryptedMessage, shiftValue) {
  let filtered = "";
  let letterCounter = 0;

  shiftValue = ((shiftValue + 26) % 26);

  // Step 1: remove noise letters
  for (let char of encryptedMessage) {
    if (/[a-zA-Z]/.test(char)) {
      letterCounter++;

      // remove every 3rd letter (noise)
      if (letterCounter % 3 === 0) continue;

      filtered += char;
    } else {
      filtered += char;
    }
  }

  let decryptedMessage = "";

  // Step 2: reverse shift
  for (let char of filtered) {
    if (/[a-zA-Z]/.test(char)) {
      let base = char === char.toUpperCase() ? 65 : 97;

      let shifted =
        ((char.charCodeAt(0) - base - shiftValue + 26) % 26) + base;

      decryptedMessage += String.fromCharCode(shifted);
    } else {
      decryptedMessage += char;
    }
  }

  return decryptedMessage;
}
