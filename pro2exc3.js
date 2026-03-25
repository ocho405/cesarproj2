// Step 1
const randomDecimal = Math.random();


// Step 2
const range = 33 - 3 + 1;


// Question 1
// We add 1 so that both 3 and 33 are included.


// Step 3
const randomInRange = randomDecimal * range;


// Question 2
// This makes the number bigger so it fits our range.


// Step 4
const randomInt = Math.floor(randomInRange);


// Question 3
// We use Math.floor so the number is always a whole number
// and does not go over the limit.


// Step 5
const shiftValue = randomInt + 3;


// Question 4
// Adding 3 moves the number so it starts at 3 instead of 0.