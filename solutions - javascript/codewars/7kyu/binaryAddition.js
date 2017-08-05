// Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

// The binary number returned should be a string.

let a = 1;
let b = 7;

function addBinary(a, b){
  let digit = [];
  let remainder = 0;
  let excess = a+b;

  while (excess !== 0){
    remainder = excess % 2;
    excess = Math.floor(excess/2);
    digit.push(remainder);
  }

  return digit.reverse().join("");
}

console.log(addBinary(a, b));