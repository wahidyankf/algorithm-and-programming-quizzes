// create a function that check whether a string containing set of parentheses is balance
// ex: ()()() -> true, )()()( -> false, ()()()( -> false

function balancedParens(string) {
	return !string.split('').reduce(function(previous, char) {
		if (previous < 0) {
			return previous;
		}
		if (char === '(') {
			return ++previous;
		}
		if (char === ')') {
			return --previous;
		}
		return previous;
	}, 0);
}

console.log(balancedParens('()()()')); // true
console.log(balancedParens(')()()(')); // false
console.log(balancedParens('()()(')); // false
