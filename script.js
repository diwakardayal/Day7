console.log("purpose...");

// function fullName(firstname, lastname) {
//   console.log(firstname + lastname);
// }

// fullName("Diwakar", " dayal");

// function addNumbers(no1, no2) {
//   return no1 + no2;
// }
// console.log(addNumbers(2, 5));

// function areaOfRectangle(length, width) {
//   return length * width;
// }

// console.log(areaOfRectangle(2, 5));

// function perimeter(l, b) {
//   return 2 * (l + b);
// }

// console.log(perimeter(2, 4));

// function volumeOfRectPrism(l, b, h) {
//   return l * b * h;
// }

// console.log(volumeOfRectPrism(2, 3, 5));

// function areaofCircle(r) {
//   return 3.14 * r * r;
// }

// console.log(areaofCircle(2));

// function circumference(r) {
//   return 2 * 3.14 * r;
// }

// console.log(circumference(3));

// function density(m, v) {
//   return m / v;
// }

// console.log(density(2, 3));

// function speed(d, t) {
//   return d / t;
// }
// console.log(speed(4, 1));

// function weight(m, g) {
//   return m * g;
// }

// console.log(weight(2, 4));

// function convertCtoF(c) {
//   return (c * 9) / 5 + 32;
// }

// console.log(convertCtoF(2));

function bmi(k, h) {
  return (k / h) * h;
}

// switch(bmi(60,5)){
//     case
// }

console.log("\n " + bmi(60, 1.6) + " \n");

if (bmi(60, 1.7) < 18.5) {
  console.log("underweight");
} else if (bmi(60, 5) > 18.5 && bmi(60, 5) < 24.9) {
  console.log("Normal weight");
} else if (bmi(60, 5) <= 25 && bmi(60, 5) < 29.9) {
  console.log("Overweight");
} else if (bmi(60, 5) > 30) {
  console.log("obese");
}
