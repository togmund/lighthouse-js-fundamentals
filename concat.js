/*
Purpose of the concat function:
  Concatencate two arrays
Parameters:
  Array | arrayOne, the first array
  Array | arrayTwo, the second array
Conditions:
  None
Output:
  Array | combinedArray, the combination of the arrays
*/

const concat = function (argument) {
  let output = ""; // Set an empty index
  return output; // Reurn the value
}

// Tests
console.log(concat([ 1, 2, 3 ], [ 4, 5, 6 ]), "=?", [ 1, 2, 3, 4, 5, 6 ]);
console.log(concat([ 0, 3, 1 ], [ 9, 7, 2 ]), "=?", [ 0, 3, 1, 9, 7, 2 ]);
console.log(concat([], [ 9, 7, 2 ]), "=?", [ 9, 7, 2 ]);
console.log(concat([ 5, 10 ], []), "=?", [ 5, 10 ]);

/*
const lastIndexOf = function (array, value) {
  let index = ""; // Set an empty index
  let matchedPosition = []; // Set an empty variable to store matched positions
  for (let i = 0; i < array.length; i++) { // Iterate through index
    if (array[i] === value) {
      matchedPosition.push(i); // Push each matched position to the matchedPosition array
    }
  }
  matchedPosition.length > 0// Make sure there are matched positions
    ? index = matchedPosition[matchedPosition.length - 1] // If there are matched positions, grab the position with the greatest index in the matchedPosition array
    : index = -1; // If there are no matched positions, store -1 as the index
  return index; // Reurn the value
}
*/