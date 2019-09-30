/*
Purpose of the calculateRectangleArea function:
  Calculate the area of a rectangle with the formula (length × width)
Parameters:
  Number | Length
  Number | Width
Output:
  Number | Area
*/

const calculateRectangleArea = function (length, width) {
  let area; // Don't declare a starting value forcing a return of undefined on bad inputs
  if (length < 0 || width < 0) { // Test against negative values
    return area;
  } else {
    area = length * width; // If it passes the negative test, set the value to the result of the area formula
  }
  return area;
}

/*
Purpose of the calculateTriangleArea function:
  Calculate the area of a triangle with the formula (base × height / 2)
Parameters:
  Number | Base
  Number | Height
Output:
  Number | Area
*/

const calculateTriangleArea = function (base, height) {
  let area; // Don't declare a starting value forcing a return of undefined on bad inputs
  if (base < 0 || height < 0) { // Test against negative values
    return area;
  } else {
    area = (base * height) / 2;  // If it passes the negative test, set the value to the result of the area formula
  }
  return area;
}

/*
Purpose of the calculateCircleArea function:
  Calculate the area of a circle with the formula (π × radius^2)
Parameters:
  Number | Radius
Output:
  Number | Area
*/

const calculateCircleArea = function (radius) {
  let area; // Don't declare a starting value forcing a return of undefined on bad inputs
  if (radius < 0) { // Test against negative values
    return area;
  } else {
    area = Math.PI * (radius * radius);  // If it passes the negative test, set the value to the result of the area formula
  }
  return area;
}