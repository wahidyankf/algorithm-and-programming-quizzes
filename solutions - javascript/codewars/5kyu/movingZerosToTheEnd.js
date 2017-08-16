// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

var moveZeros = function(arr) {
  let temp = '';
  arrayLength = arr.length;
  for (let i = 0; i < arrayLength; i++) {
    if (arr[i] === 0) {
      arr.push(arr.splice(i, 1)[0]);
      i -= 1;
      arrayLength -= 1;
    }
  }

  return arr;
};

console.log(moveZeros([ false, 1, 0, 1, 2, 0, 1, 3, 'a' ]));
