// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples:

// spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
// spinWords( "This is a test") => returns "This is a test" 
// spinWords( "This is another test" )=> returns "This is rehtona test"

// duplicate encoder

let word1 = "din";
let word2 = "recede";
let word3 = "Success";
let word4 = "(( @";

function duplicateEncode(word){
    // ...
    let tempDict = {};
    let encoded = "";
    for (let letter in word){
      if (word[letter].toLowerCase() in tempDict) {
        tempDict[word[letter].toLowerCase()] += 1;
      } else {
        tempDict[word[letter].toLowerCase()] = 1;
      }
    }
    for (let letter in word){
      if (tempDict[word[letter].toLowerCase()] > 1) {
        encoded += ")";
      } else {
        encoded += "(";
      }
    }
    return encoded;
}

console.log(duplicateEncode(word1));
console.log(duplicateEncode(word2));
console.log(duplicateEncode(word3));
console.log(duplicateEncode(word4));