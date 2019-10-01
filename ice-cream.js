// Do not modify these first two lines
const iceCreamFlavours = ["chocolate", "vanilla", "cookies and cream", "rocky road", "strawberry"];
console.log(iceCreamFlavours);

// Ted's code begins here

// Add 'root beer' to the array
// No specified location, used the simplest method: .push
iceCreamFlavours.push("root beer");
console.log(iceCreamFlavours);

// Somone wants the first flavor. Log it.
// Arrays start at zero, sillybilly
console.log(iceCreamFlavours[0]);

// Somone wants the first flavor. Log it.
// No need to count with fingers with the .length method
console.log(iceCreamFlavours[iceCreamFlavours.length]);