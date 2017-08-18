// Snail Sort

// Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

// array = [[1,2,3],
//          [4,5,6],
//          [7,8,9]]
// snail(array) #=> [1,2,3,6,9,8,7,4,5]
// For better understanding, please follow the numbers of the next array consecutively:

// array = [[1,2,3],
//          [8,9,4],
//          [7,6,5]]
// snail(array) #=> [1,2,3,4,5,6,7,8,9]
// This image will illustrate things more clearly:

// NOTE: The idea is not sort the elements from the lowest value to the highest; the idea is to traverse the 2-d array in a clockwise snailshell pattern.

// NOTE 2: The 0x0 (empty matrix) is represented as [[]]

const snail = function(array) {
  // go right, bottom, left, up, right
  let sorted = [];
  let options = [];
  let operation = null;

  const goRight = [0, 1];
  const goLeft = [0, -1];
  const goTop = [-1, 0];
  const goBottom = [1, 0];

  let coordinate = [];
  let optionIndex = null;

  // change coordinate
  const move = (currentCoordinate, operation) => {
    let resultingCoordinate = [];
    if (operation == 'right') {
      resultingCoordinate = [
        coordinate[0] + goRight[0],
        coordinate[1] + goRight[1]
      ];
    } else if (operation == 'left') {
      resultingCoordinate = [
        coordinate[0] + goLeft[0],
        coordinate[1] + goLeft[1]
      ];
    } else if (operation == 'bottom') {
      resultingCoordinate = [
        coordinate[0] + goBottom[0],
        coordinate[1] + goBottom[1]
      ];
    } else if (operation == 'top') {
      resultingCoordinate = [
        coordinate[0] + goTop[0],
        coordinate[1] + goTop[1]
      ];
    }
    return resultingCoordinate;
  };

  // get the options index
  const searchOptionIndex = coordinate => {
    for (let i = 0; i < options.length; i++) {
      if (options[i][0] === coordinate[0]) {
        if (options[i][1] === coordinate[1]) {
          return i;
        }
      }
    }
    return -1;
  };

  // check visibility of a move
  const visible = (operation, coordinate) => {
    let resultingCoordinate = move(coordinate, operation);
    if (searchOptionIndex(resultingCoordinate) === -1) {
      return false;
    }
    return true;
  };

  // determine next operation
  const nextOperation = (currentOperation, currentCoordinate) => {
    if (currentOperation == 'initial') {
      return 'right';
    } else if (visible(currentOperation, currentCoordinate)) {
      return currentOperation;
    } else {
      if (currentOperation == 'right') {
        return 'bottom';
      } else if (currentOperation == 'bottom') {
        return 'left';
      } else if (currentOperation == 'left') {
        return 'top';
      } else if (currentOperation == 'top') {
        return 'right';
      }
    }
  };

  // check if empty
  if (array.length === 1) {
    return array[0];
  }

  // create available coordinate
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      options.push([i, j]);
    }
  }

  //
  while (options.length > 0) {
    if (operation === null) {
      operation = 'initial';
      coordinate = [0, 0];
    } else if (operation == 'right') {
      coordinate = move(coordinate, operation);
    } else if (operation == 'left') {
      coordinate = move(coordinate, operation);
    } else if (operation == 'top') {
      coordinate = move(coordinate, operation);
    } else if (operation == 'bottom') {
      coordinate = move(coordinate, operation);
    }
    sorted.push(array[coordinate[0]][coordinate[1]]);
    optionIndex = searchOptionIndex(coordinate);
    options.splice(optionIndex, 1);
    operation = nextOperation(operation, coordinate);
  }

  return sorted;
};

let array1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(snail(array1)); // => [1,2,3,6,9,8,7,4,5]
let array2 = [[1, 2, 3, 1], [4, 5, 6, 4], [7, 8, 9, 7], [7, 8, 9, 7]];
console.log(snail(array2)); // => [1, 2, 3, 1, 4, 7, 7, 9, 8, 7, 7, 4, 5, 6, 9, 8]
console.log(snail([1])); // => [1]
console.log(snail([[1, 2, 3, 4]])); // => [1, 2, 3, 4]
console.log(snail([])); // => []
console.log(snail([[]])); // => []
