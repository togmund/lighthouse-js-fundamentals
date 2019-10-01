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

/*
Purpose of the ageCalculator function:
  How many boxes can be filled all the way up with the number of bottles of syrup we have on hand
Parameters:
  Number | Syrup bottles on hand
Output:
  Number | Boxes that can be filled completely


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



const donats = ["glazed", "powdered", "jelly"];
const mixedData = ["abcd", 1, true, undefined, null, "all the things"];
const arraysInArrays = [
  [1, 2, 3],
  ["Julia", "James"],
  [true, false, true, false]
];

const donuts = ["glazed", "chocolate frosted", "boston cream", "powdered", "sprinkled", "maple", "coconut", "jelly"];


donuts[2] = "cinnamon twist";
donuts[4] = "salted caramel";
donuts[5] = "shortcake eclair";

console.log(donuts);



const udaciFamily = [];

udaciFamily[0] = "Julia";
udaciFamily[1] = "James";
udaciFamily[2] = "Ted";

console.log(udaciFamily);



let captain = "Mal";
let second = "Zoe";
let pilot = "Wash";
let companion = "Inara";
let mercenary = "Jayne";
let mechanic = "Kaylee";

let crew = [
  captain,
  second,
  pilot,
  companion,
  mercenary,
  mechanic
];
console.log(crew);

let prices = [1.23, 48.11, 90.11, 8.50, 9.99, 1.00, 1.10, 67.00];
prices[0] = 44.00;
prices[2] = 44.00;
prices[6] = 44.00;
console.log(prices);


let donuts = ["glazed", "chocolate frosted", "Boston creme", "glazed cruller", "cinnamon sugar", "sprinkled"];
console.log(donuts.length);
donuts.push("powdered");
console.log(donuts.length);
donuts.pop();
console.log(donuts.length);
donuts.splice(1, 1, "chocolate cruller", "creme de leche");
console.log(donuts.length);
console.log(donuts);
donuts = ["cookies", "cinnamon sugar", "creme de leche"];
console.log(donuts);
donuts.splice(-2, 0, "chocolate frosted", "glazed");
console.log(donuts);


let spectrum = ["Red", "Orange", "Yellow", "Green", "Blue", "Purple"];
let rainbow = ["Red", "Orange", "Blackberry", "Blue"];
rainbow.splice(2,1,"Yellow", "Green");
rainbow.splice(rainbow.length,0,"Purple");
console.log(spectrum);
console.log(rainbow);



let team = ["Oliver Wood", "Angelina Johnson", "Katie Bell", "Alicia Spinnet", "George Weasley", "Fred Weasley", "Harry Potter"];

let hasEnoughPlayers = function (roster) {
  return roster.length >= 7;
}

console.log(hasEnoughPlayers(team));



let captain = "Mal";
let second = "Zoe";
let pilot = "Wash";
let companion = "Inara";
let mercenary = "Jayne";
let mechanic = "Kaylee";

let crew = [
  captain,
  second,
  pilot,
  companion,
  mercenary,
  mechanic
];

console.log(crew);

var doctor = "Simon";
var sister = "River";
var shepherd = "Book";

crew.push(doctor, sister, shepherd);

console.log(crew);



let donuts = ["jelly donut", "chocolate donut", "glazed donut"];

// the variable `i` is used to step through each element in the array
for (let i = 0; i < donuts.length; i++) {
    donuts[i] += " hole";
    donuts[i] = donuts[i].toUpperCase();
}
console.log(donuts);



 // Inline Array Method

words = ["cat", "in", "hat"];
words.forEach(function(word, num, all) {
  console.log("Word " + num + " in " + all.toString() + " is " + word);
});

*/

/*
 * Programming Quiz: Another Type of Loop (6-8)
 *
 * Use the existing `test` variable and write a `forEach` loop
 * that adds 100 to each number that is divisible by 3.
 *
 * Things to note:
 *  - you must use an `if` statement to verify code is divisible by 3
 *  - you can use `console.log` to verify the `test` variable when you're finished looping


var test = [12, 929, 11, 3, 199, 1000, 7, 1, 24, 37, 4,
  19, 300, 3775, 299, 36, 209, 148, 169, 299,
  6, 109, 20, 58, 139, 59, 3, 1, 139
];

// Write your code here
test.forEach(function(element,index) {
  if (element % 3 === 0) {
    test.splice(index,1, element + 100);
  }
});

console.log(test);


  // Map Example
var donuts = ["jelly donut", "chocolate donut", "glazed donut"];

var improvedDonuts = donuts.map(function(donut) {
  donut += " hole";
  donut = donut.toUpperCase();
  return donut;
}); 
 */

/*
 * Programming Quiz: I Got Bills (6-9)
 *
 * Use the .map() method to take the bills array below and create a second array
 * of numbers called totals. The totals array should contains each amount from the
 * bills array but with a 15% tip added. Log the totals array to the console.
 *
 * For example, the first two entries in the totals array would be:
 *
 * [57.76, 21.99, ... ]
 *
 * Things to note:
 *  - each entry in the totals array must be a number
 *  - each number must have an accuracy of two decimal points


var bills = [50.23, 19.12, 34.01,
  100.11, 12.15, 9.90, 29.11, 12.99,
  10.00, 99.22, 102.20, 100.10, 6.77, 2.22
];

var totals = bills.map(function(amount) {
  amount = amount * 1.15;
  amount = amount.toFixed(2);
  amount = Number(amount);
  return amount;
});

console.log(totals);

let donutBox = [
  ["glazed", "chocolate glazed", "cinnamon"],
  ["powdered", "sprinkled", "glazed cruller"],
  ["chocolate cruller", "Boston creme", "creme de leche"]
];

// here, donutBox.length refers to the number of rows of donuts
for (var row = 0; row < donutBox.length; row++) {
  // here, donutBox[row].length refers to the length of the donut array currently being looped over
  for (var column = 0; column < donutBox[row].length; column++) {
    console.log(donutBox[row][column]);
  }
}


let numbers = [
  [243, 12, 23, 12, 45, 45, 78, 66, 223, 3],
  [34, 2, 1, 553, 23, 4, 66, 23, 4, 55],
  [67, 56, 45, 553, 44, 55, 5, 428, 452, 3],
  [12, 31, 55, 445, 79, 44, 674, 224, 4, 21],
  [4, 2, 3, 52, 13, 51, 44, 1, 67, 5],
  [5, 65, 4, 5, 5, 6, 5, 43, 23, 4424],
  [74, 532, 6, 7, 35, 17, 89, 43, 43, 66],
  [53, 6, 89, 10, 23, 52, 111, 44, 109, 80],
  [67, 6, 53, 537, 2, 168, 16, 2, 1, 8],
  [76, 7, 9, 6, 3, 73, 77, 100, 56, 100]
];

for (let row = 0; row < numbers.length; row++) {
  for (let column = 0; column < numbers[row].length; column++) {
    numbers[row][column] % 2 === 0
      ? numbers[row][column] = "even"
      : numbers[row][column] = "odd";
  }
}

console.log(numbers);
*/

/*
 * Programming Quiz: Umbrella (7-1)


var umbrella = {
  color: "pink",
  isOpen: true,
  open: function() {
      if (umbrella.isOpen === true) {
          return "The umbrella is already opened!";
      } else {
          umbrella.isOpen = true;
          return "Julia opens the umbrella!";
      }
  },
  // your code goes here
  close: function() {
    if (umbrella.isOpen === false) {
        return "The umbrella is already closed!";
    } else {
        umbrella.isOpen = false;
        return "Julia closes the umbrella!";
    }
  }
};
console.log(umbrella);
umbrella.close();
console.log(umbrella);



var sister = {
  name: "Sarah",
  age: 23,
  parents: ["alice", "andy"],
  siblings: ["julia"],
  favoriteColor: "purple",
  pets: true,
  paintPicture: function() { return "Sarah paints!"; }
};

sister.paintPicture();

// two equivalent ways to use the key to return its value
sister["parents"] // returns [ "alice", "andy" ]
sister.parents // also returns ["alice", "andy"]

var myObj = { 
  color: "orange",
  shape: "sphere",
  type: "food",
  eat: function() { return "yummy" }
};

myObj.eat(); // method
myObj.color; // property


let breakfast = {
  name: "The Lumberjack",
  price: 9.95,
  ingredients: ["eggs", "sausage", "toast", "hashbrowns", "pancakes"]
};
*/

/*
 * Programming Quiz: Bank Accounts 1 (7-3)
 * add a printAccountSummary() method that returns the following account message:
 * Welcome!
 * Your balance is currently $1000 and your interest rate is 1%.


let savingsAccount = {
  balance: 1000,
  interestRatePercent: 1,
  deposit: function addMoney(amount) {
      if (amount > 0) {
          savingsAccount.balance += amount;
      }
  },
  withdraw: function removeMoney(amount) {
      let verifyBalance = savingsAccount.balance - amount;
      if (amount > 0 && verifyBalance >= 0) {
          savingsAccount.balance -= amount;
      }
  },
  // your code goes here
  printAccountSummary: function () {
    let output = "";
    output += "Welcome! \nYour balance is currently $" + savingsAccount.balance + " and your interest rate is " + savingsAccount.interestRatePercent + "\%.";
    return output;
  }
};

console.log(savingsAccount.printAccountSummary());

console.log(savingsAccount.balance);
console.log(savingsAccount.withdraw = 50);
console.log(savingsAccount.removeMoney = 50);


let facebookProfile = {
  name: "",
  friends: 0,
  messages: [],
  postMessage: function(message) {
    facebookProfile.messages.push(message);
  },
  deleteMessage: function(index) {
    facebookProfile.messages.splice(index,1);
  },
  addFriend: function() {
    facebookProfile.friends++;
  },
  removeFriend: function() {
    facebookProfile.friends--;
  }
};

*/

/*
 * Programming Quiz: Donuts Revisited (7-6)
 */

var donuts = [
  { type: "Jelly", cost: 1.22 },
  { type: "Chocolate", cost: 2.45 },
  { type: "Cider", cost: 1.59 },
  { type: "Boston Cream", cost: 5.99 }
];

// your code goes here

donuts.forEach(function(donuts) {
  console.log(donuts.type + " donuts cost $" + donuts.cost + " each");
});