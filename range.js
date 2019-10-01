/*
Purpose of the range function:
  Count the numbers in a set range by set intervals
Parameters:
  Number | Start
  Number | End
  Number | Step
Conditions:
  Return an empty array if
    any arguments are undefined,
    the range doesn't make sense,
    the interval isn't positive
Output:
  Array | numbers counted by steps
*/

const range = function (start, end, step) {
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

console.log(range(0, 10, 0));
console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
