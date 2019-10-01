const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
console.log("\n");
console.log("While loop: ");
let i = 0;
while (i < ingredients.length) {
  console.log(ingredients[i]);
  i++;
}
console.log("\n");

// Write a for loop that prints out the contents of ingredients:
console.log("For loop: ");
for (let i = 0; i < ingredients.length; i++) {
  console.log(ingredients[i]);
}
console.log("\n");

// Write any loop (while or for) that prints out the contents of ingredients backwards:
console.log("Reversed for loop: ");
for (let i = ingredients.length - 1; i > -1; i--) {
  console.log(ingredients[i]);
}
console.log("\n");