/*
Purpose of the lastIndexOf function:
  To find the last instance of a given value in a given array
Parameters:
  Array | Array to be searched
  Number | Value to find
Conditions:
  If the Value never occurs, return -1
Output:
  Number | Index of the last instance of that value
*/

const lastIndexOf = function (array, value) {
  let index = ""; // Set an empty index
  return index; // Reurn the array
}

/*
const lastIndexOf = function (start, end, step) {
  let output = []; // Create an empty array
  if ((start != undefined && end != undefined && step != undefined) && (start < end) && (step > 0)) { // All of our conditions must be met
    for (let i = start; i < end + 1; i += step) { // Build a for loop with the arguments
      output.push(i); // Push the running count into the array
    }
  } else {
    output.splice(0, output.length); // Empty the array if any conditions fail
  }
  return output; // Reurn the array
}
*/