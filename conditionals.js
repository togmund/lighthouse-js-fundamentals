const raining = false;
const temperature = 22;

if (raining) {
  console.log("Don't forget your umbrella!");
} else if (!raining) {
  console.log("Don't forget your hat!")
}

if (temperature < -60 || temperature > 60) {
  console.log("Are you out of your mind!? You can't go outside!")
} else if (temperature < 0) {
  console.log("Make sure you pick out a scarf!")
} else if (temperature < 15){
  console.log("Short sleeves won't cut it!")
} else {
  console.log("Short sleeves are fine.")
}

console.log("Now you're ready to go outside!")