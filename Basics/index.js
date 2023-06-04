const readline = require('readline-sync');

let side1, side2, side3;

do {
  side1 = Number(readline.question("Enter value of side1: "));
  side2 = Number(readline.question("Enter value of side2: "));
  side3 = Number(readline.question("Enter value of side3: "));

  if (!(side1 + side2 > side3 && side2 + side3 > side1 && side1 + side3 > side2)) {
    console.log("Invalid triangle. The sum of any two sides must be greater than the third side. Please try again.");
  }
} while (!(side1 + side2 > side3 && side2 + side3 > side1 && side1 + side3 > side2));

let semiPerimeter = (side1 + side2 + side3) / 2;

let area = Math.sqrt(
  semiPerimeter *
  (semiPerimeter - side1) *
  (semiPerimeter - side2) *
  (semiPerimeter - side3)
);

console.log(`Area of Triangle using Heron's formula: ${area.toFixed(2)} square units`);
