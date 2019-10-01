const packingList = ["bowls", "plates", "pots", "pans", "eating utensils", "glasses", "cups", "cooking utensils",];

// Who needs cooking utensils when you have eating utensils?
packingList.pop();
// What, am I going to forget my cast iron?
packingList.push("cast iron");

console.log("Kitchen stuff to pack:");
let i = 0;
while (i < packingList.length) {
  console.log(packingList[i]);
  i++;
}