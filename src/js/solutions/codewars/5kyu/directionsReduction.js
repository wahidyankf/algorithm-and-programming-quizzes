// once upon a time, on a way through the old wild west,…

// … a man was given directions to go from one point to another. the directions were "north", "south", "west", "east". clearly "north" and "south" are opposite, "west" and "east" too. going to one direction and coming back the opposite direction is a needless effort. since this is the wild west, with dreadfull weather and not much water, it's important to save yourself some energy, otherwise you might die of thirst!

// how i crossed the desert the smart way.

// the directions given to the man are, for example, the following:

// ["north", "south", "south", "east", "west", "north", "west"].
// or

// { "north", "south", "south", "east", "west", "north", "west" };
// or (haskell)

// [north, south, south, east, west, north, west]
// you can immediatly see that going "north" and then "south" is not reasonable, better stay to the same place! so the task is to give to the man a simplified version of the plan. a better plan in this case is simply:

// ["west"]
// or

// { "west" }
// or (haskell)

// [west]
// or (rust)

// [west];
// other examples:

// in ["north", "south", "east", "west"], the direction "north" + "south" is going north and coming back right away. what a waste of time! better to do nothing.

// the path becomes ["east", "west"], now "east" and "west" annihilate each other, therefore, the final result is [] (nil in clojure).

// in ["north", "east", "west", "south", "west", "west"], "north" and "south" are not directly opposite but they become directly opposite after the reduction of "east" and "west" so the whole path is reducible to ["west", "west"].

// task

// write a function dirreduc which will take an array of strings and returns an array of strings with the needless directions removed (w<->e or s<->n side by side).

// the haskell version takes a list of directions with data direction = north | east | west | south. the clojure version returns nil when the path is reduced to nothing. the rust version takes a slice of enum direction {north, south, east, west}.

// examples

// dirreduc(["north", "south", "south", "east", "west", "north", "west"]) => ["west"]
// dirreduc(["north", "south", "south", "east", "west", "north"]) => []
// see more examples in "example tests"

// note

// not all paths can be made simpler. the path ["north", "west", "south", "east"] is not reducible. "north" and "west", "west" and "south", "south" and "east" are not directly opposite of each other and can't become such. hence the result path is itself : ["north", "west", "south", "east"].

function dirReduc(arr) {
  // ...
  // iteration, check reduction
  let originalLength = arr.length;
  let arrayLength = arr.length;
  if (arrayLength > 1) {
    for (let i = 0; i < arrayLength; i++) {
      if (arr[i].toLowerCase() == 'north') {
        if (i + 1 < arrayLength) {
          if (arr[i + 1].toLowerCase() == 'south') {
            arr.splice(i, 2);
            i -= 1;
            arrayLength -= 2;
          }
        }
      } else if (arr[i].toLowerCase() == 'south') {
        if (i + 1 < arrayLength) {
          if (arr[i + 1].toLowerCase() == 'north') {
            arr.splice(i, 2);
            i -= 1;
            arrayLength -= 2;
          }
        }
      } else if (arr[i].toLowerCase() == 'east') {
        if (i + 1 < arrayLength) {
          if (arr[i + 1].toLowerCase() == 'west') {
            arr.splice(i, 2);
            i -= 1;
            arrayLength -= 2;
          }
        }
      } else if (arr[i].toLowerCase() == 'west') {
        if (i + 1 < arrayLength) {
          if (arr[i + 1].toLowerCase() == 'east') {
            arr.splice(i, 2);
            i -= 1;
            arrayLength -= 2;
          }
        }
      }
    }
  }
  console.log(arr);
  if (originalLength !== arrayLength) {
    dirReduc(arr);
  }
  return arr;
}

console.log(
  'First: ' +
    dirReduc(['NORTH', 'SOUTH', 'SOUTH', 'EAST', 'WEST', 'NORTH', 'WEST'])
);
console.log('Second: ' + dirReduc(['NORTH', 'WEST', 'SOUTH', 'EAST']));
console.log(
  'Third: ' + dirReduc(['NORTH', 'SOUTH', 'EAST', 'WEST', 'EAST', 'WEST'])
);
