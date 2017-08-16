// You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

// Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).

//some test cases for you...
let walk = [ 'n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's' ];
let walk2 = [ 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e' ];
let walk3 = [ 'w' ];
let walk4 = [ 'n', 'n', 'n', 's', 'n', 's', 'n', 's', 'n', 's' ];

function isValidWalk(walk) {
  //insert brilliant code here
  let coordinate = [ 0, 0 ];

  if (walk.length !== 10) {
    return false;
  }

  for (let step = 0; step < walk.length; step++) {
    if (walk[step] === 'n') {
      coordinate[0] += 1;
    } else if (walk[step] === 's') {
      coordinate[0] -= 1;
    } else if (walk[step] === 'e') {
      coordinate[1] += 1;
    } else if (walk[step] === 'w') {
      coordinate[1] -= 1;
    }
  }

  if (coordinate[0] === 0 && coordinate[1] === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isValidWalk(walk));
console.log(isValidWalk(walk2));
console.log(isValidWalk(walk3));
console.log(isValidWalk(walk4));
