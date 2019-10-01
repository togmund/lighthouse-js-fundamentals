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

const concat = function (arrayOne, arrayTwo) {
  let combinedArray = []; // Set an empty index
  for (let i = 0; i < arrayOne.length; i++){
    combinedArray.push(arrayOne[i]); // Push each arrayOne entry to combinedArray
  }
  for (let i = 0; i < arrayTwo.length; i++){
    combinedArray.push(arrayTwo[i]); // Push each arrayTwo entry to combinedArray
  }
  return combinedArray; // Reurn the combined index
}

// Tests
console.log(concat([ 1, 2, 3 ], [ 4, 5, 6 ]), "=?", [ 1, 2, 3, 4, 5, 6 ]);
console.log(concat([ 0, 3, 1 ], [ 9, 7, 2 ]), "=?", [ 0, 3, 1, 9, 7, 2 ]);
console.log(concat([], [ 9, 7, 2 ]), "=?", [ 9, 7, 2 ]);
console.log(concat([ 5, 10 ], []), "=?", [ 5, 10 ]);
