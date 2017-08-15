// This time we want to write calculations using functions and get the results. Let's have a look at some examples:

// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3
// Requirements:

// There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy (divided_by in Ruby)
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand

let n = function(digit) {
	return function(operation) {
		return operation ? operation(digit) : digit;
	};
};

let zero = n(0);
let one = n(1);
let two = n(2);
let three = n(3);
let four = n(4);
let five = n(5);
let six = n(6);
let seven = n(7);
let eight = n(8);
let nine = n(9);

function plus(rightArg) {
	return function(leftArg) {
		return leftArg + rightArg;
	};
}

function minus(rightArg) {
	return function(leftArg) {
		return leftArg - rightArg;
	};
}

function times(rightArg) {
	return function(leftArg) {
		return leftArg * rightArg;
	};
}

function dividedBy(rightArg) {
	return function(leftArg) {
		return leftArg / rightArg;
	};
}

console.log(seven(times(five()))); // must return 35
console.log(four(plus(nine()))); // must return 13
console.log(eight(minus(three()))); // must return 5
console.log(six(dividedBy(two()))); // must return 3
