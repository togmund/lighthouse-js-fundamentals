/*
Purpose of the range function:
  Count the numbers in a range
Parameters:
  Number | Start
  Number | End
  Number | Step
Output:
  Array | numbers counted by steps
*/

const range = function (start, end, stop) {
  output = [start, end, stop];
  return output;
}

console.log(range(1,2,3));

/*
const countDownByHundred = function (num) {
  let output = 0; // Assume, unless told otherwise, that num will be less than 100
  for (let i = num; i > 100; i -= 100) {  // Starting with the num, count down by 100 until you reach a number of bottles that will no longer completely fill a box
    ++output;
  }
  return output;
}

const howManyHundreds = function (bottles) {
  let boxes = 0;  // Assume, unless told otherwise, that there will be no boxes to send
  bottles % 100 === 0 
    ? boxes += bottles / 100  // If the number is already neatly divisble by 100, divide it by 100
    : boxes += countDownByHundred(bottles); // If it isn't, it should count 100 at a time
  return boxes;
}
*/