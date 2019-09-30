/*
 * Programming Quiz: Murder Mystery (3-4)
 */

// change the value of `room` and `suspect` to test your code

/*
let room = "gallery";
let suspect = "Ms. Van Cleve";

let weapon = "";
let solved = false;

if (room === "dining room" && suspect === "Mr. Parkes") {
    weapon = "knife";
    solved = true;
} else if (room === "gallery" && suspect === "Ms. Van Cleve") {
    weapon = "trophy";
    solved = true;
} else if (room === "billiards room" && suspect === "Mrs. Sparr") {
    weapon = "pool stick";
    solved = true;
} else if (room === "ballroom" && suspect === "Mr. Kalehoff") {
  weapon = "poison";
  solved = true;
} else {
    weapon = "";
    solved = false;
}


if (solved) {
	console.log(suspect+" did it in the "+room+" with the "+weapon+"!");
} else {
  console.log("You're free to go, "+suspect+".");
}
*/

/*
 * Programming Quiz - Checking Your Balance (3-5)
 */

/*
// change the values of `balance`, `checkBalance`, and `isActive` to test your code
let balance = -325.00;
let checkBalance = false;
let isActive = false;

// your code goes here

if (!checkBalance) {
  console.log("Thank you. Have a nice day!");
} else if (!isActive) {
  console.log("Your account is no longer active.");
} else if (isActive && balance > 0) {
  console.log("Your balance is $"+balance+".");
} else if (isActive && balance === 0) {
  console.log("Your account is empty.");
} else if (isActive && balance < 0){
  console.log("Your balance is negative. Please contact bank.");
} else {
  console.log("Please contact bank.")
}
*/

/*
 * Programming Quiz: Ice Cream (3-6)
 *
 * Write a single if statement that logs out the message:
 * 
 * "I'd like two scoops of __________ ice cream in a __________ with __________."
 * 
 * ...only if:
 *   - flavor is "vanilla" or "chocolate"
 *   - vessel is "cone" or "bowl"
 *   - toppings is "sprinkles" or "peanuts"
 *
 * We're only testing the if statement and your boolean operators. 
 * It's okay if the output string doesn't match exactly.

// change the values of `flavor`, `vessel`, and `toppings` to test your code
let flavor = "vanilla";
let vessel = "cone";
let toppings = "walnuts";
let iceCream = true;
let output = "I'd like two scoops of "+flavor+" ice cream in a "+vessel+" with "+toppings+".";


// Add your code here
if ((flavor === 'vanilla' || flavor === 'chocolate')&&(vessel === 'cone' || vessel === 'bowl')&&(toppings === 'sprinkles' || toppings === 'peanuts')) {
  console.log(output);
}
*/

/*
 * Programming Quiz: What do I Wear? (3-7)
 *
 * Using if/else statements, create a series of logical expressions that logs the size of a t-shirt based on the measurements of:
 *   - shirtWidth
 *   - shirtLength
 *   - shirtSleeve
 *
 * Use the chart above to print out one of the following correct values:
 *   - S, M, L, XL, 2XL, or 3XL

// change the values of `shirtWidth`, `shirtLength`, and `shirtSleeve` to test your code
let shirtWidth = 23;
let shirtLength = 30;
let shirtSleeve = 8.71;
let shirtSize = ""

// Write your if/else code here
if (shirtWidth >= 28  && shirtLength >= 34 && shirtSleeve >= 10.13 ) {
  shirtSize = "3XL";
  console.log(shirtSize);
} else if (shirtWidth >= 26 && shirtLength >= 33 && shirtSleeve >= 9.63 ) {
  shirtSize = "2XL";
  console.log(shirtSize);
} else if (shirtWidth >= 24 && shirtLength >= 31 && shirtSleeve >= 8.88) {
  shirtSize = "XL";
  console.log(shirtSize);
} else if (shirtWidth >= 22 && shirtLength >= 30 && shirtSleeve >= 8.63) {
  shirtSize = "L";
  console.log(shirtSize);
} else if (shirtWidth >= 20 && shirtWidth < 22 && shirtLength >= 29 && shirtSleeve >= 8.38) {
  shirtSize = "M";
  console.log(shirtSize);
} else if (shirtWidth >= 18 && shirtWidth < 20 && shirtLength >= 28 && shirtLength < 29 && shirtSleeve >= 8.13 && shirtSleeve < 8.38) {
  shirtSize = "S";
  console.log(shirtSize);
} else {
  shirtSize = "N/A";
  console.log(shirtSize);
}
*/

/*
 * Programming Quiz: Back to School (3-9)
 *
 * Write a switch statement to set the average salary of a person based on their type of completed education.
 *
 */

// change the value of `education` to test your code
let education = 'no high school diploma';

// set the value of this based on a person's education
let salary = 0;

// your code goes here
switch (education) {
  case 'no high school diploma':
    salary = 25636;
    break;
  case 'a high school diploma':
    salary = 35256;
    break;
  case 'an Associate\'s degree':
    salary = 41496;
    break;
  case 'a Bachelor\'s degree':
    salary = 59124;
    break;
  case 'a Master\'s degree':
    salary = 69732;
    break;
  case 'a Professional degree':
    salary = 89960;
    break;
  case 'a Doctoral degree':
    salary = 84396;
    break;
}
let output = 'In 2015, a person with '+education+' earned an average of $'+salary.toLocaleString("en-US")+'/year.';
console.log(output);