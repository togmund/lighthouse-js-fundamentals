/*
Purpose of the ageCalculator function:
  Plaintext explanation of a person's age based on three inputs
Parameters:
  name – a string representing someone's name
  yearOfBirth – a number representing their year of birth
  currentYear – a number representing the current year
Output:
  A string explaining how old a person is.
*/

  // A function that calculates the difference between dates
const birthDateDiff = function (yearOfBirth, currentYear) {
  return currentYear - yearOfBirth;
}
  // Takes in the parameters, calls the birtDateDiff function to grab an age, then concatencates it to a readable string.
const ageCalculator = function (name, yearOfBirth, currentYear) {
  return name + " is " + birthDateDiff(yearOfBirth,currentYear) + " years old.";
}
  // Calls the calculator function and produces an output.
console.log(ageCalculator("Ted", 1989, 2019));