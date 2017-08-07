// write a function that take a phone number as an input and
// return a string that grouped that phone number as a triple number
// separated by -
// note that the minimum member of grouped number is 2
// so 
// 00-44   48  5555 8361 -> 004-448-555-583-61
// 0 - 22 1985--324 -> 022 198 53 25
// 555372654 -> 555 372 654

function solution(S) {
  // write your code in JavaScript (Node.js 6.4.0)
  let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let filtered = [];
  let processedNumber = [];
  let formattedNumber = "";

  for (let i = 0; i < S.length; i++) {
    if (S[i] in numbers) {
      filtered.push(S[i]);
    }
  }

  if (filtered.length % 3 === 0) {
    for (let i = 0; i < filtered.length; i++) {
      if ((i + 1) % 3 === 0) {
        processedNumber.push(filtered[i]);
        processedNumber.push("-");
      } else {
        processedNumber.push(filtered[i]);
      }
    }
    formattedNumber = processedNumber.splice(0, processedNumber.length - 1).join("");
  } else {
    for (let i = 0; i < filtered.length; i++) {
      if (filtered.length - i > 4) {
        if ((i + 1) % 3 === 0) {
          processedNumber.push(filtered[i]);
          processedNumber.push("-");
        } else {
          processedNumber.push(filtered[i]);
        }
      } else if (filtered.length - i === 3) {
        processedNumber.push(filtered[i]);
        processedNumber.push("-");
      } else {
        processedNumber.push(filtered[i]);
      }
    }
    formattedNumber = processedNumber.join("");
  }

  return formattedNumber;
}

console.log(solution("00-44   48  5555 8361"));
console.log(solution("0 - 22 1985--324"));
console.log(solution("555372654"));