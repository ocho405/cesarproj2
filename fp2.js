const alphabet = "abcdefghijklmnopqrstuvwxyz";

// ENCRYPT FUNCTION
function encrypt(message, shiftValue) {
  let encryptedMessage = "";
  let counter = 0;

  // Normalize shift (handles large + negative numbers)
  shiftValue = ((shiftValue % 26) + 26) % 26;

  for (let i = 0; i < message.length; i++) {
    let char = message[i];

    // Check if character is a letter
    if (/[a-zA-Z]/.test(char)) {
      let base = char === char.toUpperCase()
        ? "A".charCodeAt(0)
        : "a".charCodeAt(0);

      let shifted =
        ((char.charCodeAt(0) - base + shiftValue) % 26) + base;

      let newChar = String.fromCharCode(shifted);

      encryptedMessage += newChar;
      counter++;

      // After every 2 letters → add random letter
      if (counter === 2) {
        const randomLetter =
          alphabet[Math.floor(Math.random() * alphabet.length)];
        encryptedMessage += randomLetter;
        counter = 0;
      }
    } else {
      // Keep spaces/punctuation unchanged
      encryptedMessage += char;
    }
  }

  return encryptedMessage;
}

// DECRYPT FUNCTION
function decrypt(encryptedMessage, shiftValue) {
  let filtered = "";

  // Step 1: Remove every 3rd character (random letters)
  for (let i = 0; i < encryptedMessage.length; i++) {
    if (i % 3 !== 2) {
      filtered += encryptedMessage[i];
    }
  }

  let decryptedMessage = "";

  // Normalize shift again
  shiftValue = ((shiftValue % 26) + 26) % 26;

  // Step 2: Shift backward
  for (let i = 0; i < filtered.length; i++) {
    let char = filtered[i];

    if (/[a-zA-Z]/.test(char)) {
      let base = char === char.toUpperCase()
        ? "A".charCodeAt(0)
        : "a".charCodeAt(0);

      let shifted =
        ((char.charCodeAt(0) - base - shiftValue + 26) % 26) + base;

      let newChar = String.fromCharCode(shifted);

      decryptedMessage += newChar;
    } else {
      decryptedMessage += char;
    }
  }

  return decryptedMessage;
}