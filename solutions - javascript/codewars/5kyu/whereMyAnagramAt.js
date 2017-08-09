// What is an anagram? Well, two words are anagrams of each other if they both contain the same letters. For example:

// 'abba' & 'baab' == true

// 'abba' & 'bbaa' == true

// 'abba' & 'abbba' == false
// Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none. For example:

// anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']

// anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']

// anagrams('laser', ['lazing', 'lazy',  'lacer']) => []

function anagrams(word, words) {
  let anagram = [];

  const createMap = (array) => {
    let wordMap = new Map();
    for (let i = 0; i < array.length; i++) {
      if (wordMap.has(array[i])){
        wordMap.set(array[i], wordMap.get(array[i])+1);
      } else {
        wordMap.set(array[i], 1);
      }
    }
    return wordMap;
  };

  const compareDict = (map1, map2) => {
    // check the composition of map
    if (map1.size !== map2.size){
      return false;
    }
    // iter map and check the member of map
    for (let [key, val] of map1){
      if(map2.has(key)){
        if(val !== map2.get(key)){
          return false;
        }
      } else {
        return false;
      }
    }
    return true;
  };

  let wordMap = createMap(word);

  for (let i = 0; i < words.length; i++) {
    let wordsMap = createMap(words[i]);
    // check length
    if (compareDict(wordMap, wordsMap)){
      anagram.push(words[i]);
    }
  }

  return anagram;
}

console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada'])); // => ['aabb', 'bbaa']
console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer'])); // => ['carer', 'racer']
console.log(anagrams('laser', ['lazing', 'lazy', 'lacer'])); // => []