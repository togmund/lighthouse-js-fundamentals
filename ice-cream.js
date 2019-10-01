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

// Somone wants the last flavor. Log it.
// No need to count with fingers with the .length method
// the -1 is nescessary because arrays start at zero, sillybilly
console.log(iceCreamFlavours[iceCreamFlavours.length - 1]);

// Someone wants to know how many options there are.
// Crack out good ole .length again
console.log(iceCreamFlavours.length);
