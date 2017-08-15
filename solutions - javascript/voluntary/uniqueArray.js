// given the following array:
// var numbers = [1, 1, 2, 3, 4, 4];
// Your function should return
// [1, 2, 3, 4]

function uniqueArray(array) {
  return array.reduce((previous, e) => {
    let isThere = previous.some(f => {
        return f === e;
    });
    
    if (isThere === false){
        previous.push(e)
    }
    
    return previous;
  }, []);
}

console.log(uniqueArray([1, 1, 2, 3, 4, 4]));
console.log(uniqueArray(["a", "a", "b", "c", "b", "e", "d", "e"]));
