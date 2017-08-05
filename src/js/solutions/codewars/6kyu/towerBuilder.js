// Build Tower by the following given argument:
// number of floors (integer and always greater than 0).

// Tower block is represented as *

// Python: return a list;
// JavaScript: returns an Array;
// C#: returns a string[];
// PHP: returns an array;
// C++: returns a vector<string>;
// Haskell: returns a [String];
// Have fun!

// for example, a tower of 3 floors looks like below

// [
//   '  *  ', 
//   ' *** ', 
//   '*****'
// ]
// and a tower of 6 floors looks like below

// [
//   '     *     ', 
//   '    ***    ', 
//   '   *****   ', 
//   '  *******  ', 
//   ' ********* ', 
//   '***********'
// ]
// Go challenge Build Tower Advanced once you have finished this :)

function towerBuilder(nFloors) {
  let tower = [];
  for (let i = 0; i < nFloors; i++) {
    let temp = "";

    let floor = "";
    for (let j = 0; j < 2*i+1; j++){
      floor += "*";
    }
    
    let separator = "";
    if (i === nFloors - 1) {
      separator = "";
    } else {
      for (let j = 0; j < (nFloors - i)-1;j = j+1){
        separator += " ";
      }
    }
    temp += separator + floor + separator;
    tower.push(temp);
  }
  return tower;
}

console.log(towerBuilder(1));
console.log(towerBuilder(2));
console.log(towerBuilder(3));
console.log(towerBuilder(6));