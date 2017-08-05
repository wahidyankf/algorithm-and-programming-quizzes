// Define a function isPrime that takes one integer argument and returns true or false depending on if the integer is a prime.

// Per Wikipedia, a prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

// Example

// isPrime(5)
// => true
// Assumptions

// You can assume you will be given an integer input.
// You can not assume that the integer will be only positive. You may be given negative numbers.

function isPrime(num) {
  //TODO
  if (num === 0 || num === 1 || num < 0) {
    return false
  } else if (num === 2) {
    return true
  } else if (num > 1) {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false
      }
    }
    return true
  }
}

console.log(isPrime(0));
console.log(isPrime(1));
console.log(isPrime(2));
console.log(isPrime(3));
console.log(isPrime(5));
console.log(isPrime(9));
console.log(isPrime(13));