// Your goal in this kata is to implement an difference function, which subtracts one list from another.

// It should remove all values from list a, which are present in list b.

// array_diff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// array_diff([1,2,2,2,3],[2]) == [1,3]

let a = [1, 2, 3, 2, 4];
let b = [1, 2];

function array_diff(a, b) {
  let deleteList = [];

  for (let i = 0; i < a.length; i++) {
    if (b.indexOf(a[i]) !== -1) {
      deleteList.push(i);
    }
  }

  for (let item in deleteList) {
    console.log(deleteList[item]);
    a.splice(deleteList[item] - item, 1);
  }
}

array_diff(a, b);

console.log(a);