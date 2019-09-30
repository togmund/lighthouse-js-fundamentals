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
 *

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
*/

/*
 * Programming Quiz: JuliaJames (4-1)
 

let x = 1;

while (x < 21) {
    // Build the output one line at a time
    let output = "";
    // Test against our three circumstances
    if (x % 3 === 0) { output += "Julia"; }
    if (x % 5 === 0) { output += "James"; }
    if (output === "") { output = x; }
    // Log the result
    console.log(output);
    // Increment x
    x += 1;
}


let num = 99;

while (num > -1) {
    // Build the output one line at a time
    let output = "";
    // Test against our two circumstances
    if (num === 1) {
      output = num+" bottle of juice on the wall! "+num+" bottle of juice! Take one down, pass it around... "+num+" bottle of juice on the wall!";
    }
    if (output === "") {
        output = num+" bottles of juice on the wall! "+num+" bottles of juice! Take one down, pass it around... "+num+" bottles of juice on the wall!";
    }
    // Log the result
    console.log(output);
    // Increment x
    num -= 1;
}

let t = 60;

while (t > -1) {
    // Build the output one line at a time
    let output = "";
    // Test against our three circumstances
    if (t === 50) { output += "Orbiter transfers from ground to internal power"; }
    if (t === 31) { output += "Ground launch sequencer is go for auto sequence start"; }
    if (t === 16) { output += "Activate launch pad sound suppression system"; }
    if (t === 10) { output += "Activate main engine hydrogen burnoff system"; }
    if (t === 6) { output += "Main engine start"; }
    if (t === 0) { output += "Solid rocket booster ignition and liftoff!"; }
    if (output === "") { output = "T-"+t+" seconds"; }
    // Log the result
    console.log(output);
    // Increment x
    t -= 1;
}



for (var i = 0; i <= 6; i = i + 2) {
  console.log(i);
}



/*
 * Programming Quiz: Changing the Loop (4-4)
 */

// rewrite the while loop as a for loop
/*
var x = 9;
while (x >= 1) {
    console.log("hello " + x);
    x = x - 1;
}

A factorial is calculated by multiplying a number by all the numbers below it. For instance, 3! or "3 factorial" is 3 * 2 * 1 = 6

3! = 3 * 2 * 1 = 63!=3∗2∗1=6
4! = 4 * 3 * 2 * 1 = 244!=4∗3∗2∗1=24
5! = 5 * 4 * 3 * 2 * 1 = 1205!=5∗4∗3∗2∗1=120



const factorialize  = function (factor) {
  let output = factor;
  for (let i = factor; i = 1; i--) {
    output *= i;
    return output;
  }
}
console.log(factorialize(3));



let solution = 1;
for (let i = 1; i < 13; i++) {
  solution *= i;
}
console.log(solution);



for (let row = 0; row < 26; row++) {
  for (let seat = 0; seat < 100; seat++) {
    console.log(row + "-" + seat);
  }
}



function findAverage(x, y) {
  var answer = (x + y) / 2;
  return answer;
}

var avg = findAverage(5, 9);
console.log(avg);


function laugh(num) {
  let output = "";
  for (let i = 0; i < num; i++) {
    output += 'ha';
  }
  return output + '!';
}
console.log(laugh(3));



function addTen(x) {
  return x + 10;
}

function divideByThree(y) {
  return y / 3;
}

let result = addTen(2);
console.log(divideByThree(result));



function makeLine(length) {
  let line = "";
  for (let j = 1; j <= length; j++) {
    line += "* ";
  }
  return line + "\n";
}

function buildTriangle(max) {
  let output = "";
  for (let k = 1; k <= max; k++) {
    output += makeLine(k);
  }
  return output;
}

console.log(buildTriangle(3));

// function expression catSays
let catSays = function(max) {
  let catMessage = "";
  for (let i = 0; i < max; i++) {
    catMessage += "meow ";
  }
  return catMessage;
};

// function declaration helloCat accepting a callback
function helloCat(callbackFunc) {
  return "Hello " + callbackFunc(3);
}

// pass in catSays as a callback function
console.log(helloCat(catSays));



// function declaration that takes in two arguments: a function for displaying
// a message, along with a name of a movie
function movies(messageFunction, name) {
  messageFunction(name);
}

// call the movies function, pass in the function and name of movie
movies(function displayFavorite(movieName) {
  console.log("My favorite movie is " + movieName);
}, "Finding Nemo");

*/

// Anonymous Function Expression
let laugh = function(max) {
  let output = "";
  for (let i = 0; i < max; i++) {
    output += "ha";
  }
  return output+"!";
};
console.log(laugh(10));

// Named Function Expression
let cry = function weep(max) { // The difference is the weep
  let output = "";
  for (let i = 0; i < max; i++) {
    output += "boohoo";
  }
  return output+"!";
};
console.log(cry(1));

// Inline Function Expression
function emotions(myString, myFunc) {
  console.log("I am " + myString + ", " + myFunc(2));
}
emotions(
  "happy",
  // Here's the Inline part. The function is the 2nd argument
  function laugh(max) {
    let output = "";
    for (let i = 0; i < max; i++) {
      output += "ha";
    }
    return output+"!";
  }
);