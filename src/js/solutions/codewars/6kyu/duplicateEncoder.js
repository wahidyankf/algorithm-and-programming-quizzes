// The goal of this exercise is to convert a string to a new string where each character in the new string is '(' if that character appears only once in the original string, or ')' if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples:
// "din" => "((("
// "recede" => "()()()"
// "Success" => ")())())"
// "(( @" => "))(("

let word1 = 'din';
let word2 = 'recede';
let word3 = 'Success';
let word4 = '(( @';

function duplicateEncode(word) {
  // ...
  let tempDict = {};
  let encoded = '';
  for (let letter in word) {
    if (word[letter].toLowerCase() in tempDict) {
      tempDict[word[letter].toLowerCase()] += 1;
    } else {
      tempDict[word[letter].toLowerCase()] = 1;
    }
  }
  for (let letter in word) {
    if (tempDict[word[letter].toLowerCase()] > 1) {
      encoded += ')';
    } else {
      encoded += '(';
    }
  }
  return encoded;
}

console.log(duplicateEncode(word1));
console.log(duplicateEncode(word2));
console.log(duplicateEncode(word3));
console.log(duplicateEncode(word4));