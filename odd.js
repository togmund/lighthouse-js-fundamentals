/*
Purpose of the isOddEvaluator function:
  To generate a plaintext response to the question of whether an input number is Odd.
Arguments:
  A number for testing
Output:
  A Plaintext evaluation of whether the number is Odd
*/

const isOdd  = function (num) {
  return num % 2 !== 0;
}

const isOddEvaluator = function (entry) {
  let output = "";
  isOdd(entry)
    ? output += "I have evaluated "+entry+" as odd."
    : output += "I have evaluated "+entry+" as not odd.";
  return output;
}

console.log(isOddEvaluator(4));