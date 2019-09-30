/*
Purpose of the loopyLighthouse function:
  Prints the numbers from 100 to 200 with three exceptions:
  If the number is a multiple of 3, print the string "Loopy" instead of the number.
  If the number is a multiple of 4, print the string "Lighthouse" instead of the number.
  If the number is a multiple of both 3 and 4, print the string "LoopyLighthouse" instead of the number.
Arguments:
  Start
  Finish
Output:
  A log of either numbers or words as declared in the purpose
*/

    // Built as a function for re-usability
const loopyLighthouse = function (start,finish) {
  for (let x = start; x < finish + 1; x++) {
    // Build the output one line at a time

    // Empty it first
    let output = "";

    // Test against our three exceptions

    // Add Loopy to the output where it meets the critera
    if (x % 3 === 0) {
      output += "Loopy";
    }
    // Add Lighthouse to the output where it meets the critera
    if (x % 4 === 0) {
      output += "Lighthouse";
    }
    // Simply add the number to the output if it has arrived at this line empty
    if (output === "") {
      output = x;
    }

    // Log the result
    console.log(output);
  }
}
    //Call the function
loopyLighthouse(100,200);