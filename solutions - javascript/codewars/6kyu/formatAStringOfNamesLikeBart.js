// Given: an array containing hashes of names

// Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.

// Example:

// list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// // returns 'Bart, Lisa & Maggie'

// list([ {name: 'Bart'}, {name: 'Lisa'} ])
// // returns 'Bart & Lisa'

// list([ {name: 'Bart'} ])
// // returns 'Bart'

// list([])
// // returns ''
// Note: all the hashes are pre-validated and will only contain A-Z, a-z, '-' and '.'.

function list(names) {
  //your code here
  let nameList = '';
  let separator = '';
  console.log(names.length);

  for (let i = 0; i < names.length; i++) {
    console.log(i);

    if (i === 0) {
      separator = '';
    } else if (i === names.length - 1) {
      separator = ' & ';
    } else {
      separator = ', ';
    }

    nameList += separator;
    nameList += names[i].name;
    console.log(nameList);
  }

  console.log('...');
  return nameList;
}

console.log(
  list([
    {
      name: 'Bart'
    },
    {
      name: 'Lisa'
    },
    {
      name: 'Maggie'
    }
  ])
);
console.log(
  list([
    {
      name: 'Bart'
    },
    {
      name: 'Lisa'
    }
  ])
);
console.log(
  list([
    {
      name: 'Bart'
    }
  ])
);
console.log(list([]));
