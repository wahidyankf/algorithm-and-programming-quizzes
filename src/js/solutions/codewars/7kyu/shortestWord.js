// x Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

function findShort(s) {
  s = s.split(' ');
  let shortest = 0;

  for (let i = 0; i < s.length; i++) {
    if (i === 0) {
      shortest = s[i].length;
    } else {
      if (s[i].length < shortest) {
        shortest = s[i].length;
      }
    }
  }
  return shortest;
}

console.log(findShort('turns out random test cases are easier than writing out basic ones'));
console.log(findShort('bitcoin take over the world maybe who knows perhaps'));