# JS-Practice

## JS Programs with Output

1. Write a JavaScript program to display the current day and time in the following format.  
Sample Output : Today is : Tuesday.


```js
let today = new Date();
let day = today.getDate();
let hours = (today.getHours() % 12) || 12;
let minutes = today.getMinutes().toString().padStart(2, '0');
let sec = today.getSeconds().toString().padStart(2, '0');

let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

console.log(`Today's Day - ${days[day]}`);

let AM_PM = today.getHours() < 12 ? "AM" : "PM";

console.log(`Current Time - ${hours}:${minutes}:${sec} ${AM_PM}`);
```



### Output
```
Today's Day - Friday
Current Time - 7 : 01 : 53 PM
```

2. Write a JavaScript program to find the area of a triangle where three sides are given.  


```
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

```

### Output
```
Enter value of side1: 23
Enter value of side2: 20
Enter value of side3: 27
Area of Triangle using Heron's formula: 224.50 square units
```
