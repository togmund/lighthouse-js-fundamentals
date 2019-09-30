const isEven  = function (num) {
  return num % 2 === 0;
}

const tenIsEven = isEven(10);;

console.log("Evaluate the evenness of ten: "+tenIsEven);
console.log("Evaluate the evenness of eleven: "+isEven(11));