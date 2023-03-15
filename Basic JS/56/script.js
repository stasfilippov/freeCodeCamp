'use strict';
function nextInLine(arr, item) {
  // Only change code below this line
  arr.push(item);

  let removeNumb = arr.shift();

  return removeNumb;
  // Only change code above this line
}

// Setup
let testArr = [1, 2, 3, 4, 5];

