/*
Purpose of the whichSchool function:
  Choose the correct school based on age
Arguments:
  Age
Output:
  String of School name
Criteria:
  Elementary School if age is below 13
  Secondary School if age is between 13 and 18 (both inclusive)
  Lighthouse Labs in all other cases.
*/

const whichSchool  = function (age) {
  
  if (age < 13) { //First your age is checked
    return "Elementary School"; //Then we return the appropriate answer as a string
  } else if (age >= 13 && age <= 18) {
    return "Secondary School";
  } else if (age < 0) {
    return "You don't exist. No school for you."
  } else if (age > 116) {
    return "Congratulations, you are the world's oldest person. Take a break, you've earned it. If you must go to school, go to Ligthouse Labs."
  } else {
    return "Lighthouse Labs";
  }
}