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
<br/>


2. Write a JavaScript program to find the area of a triangle where three sides are given.  


```js
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
<br/>

3. Write a JavaScript program to determine whether a year is a leap year in the Gregorian calendar for a range of years.  


```js
const readline = require('readline-sync');

let start, end;
start = Number(readline.question("Enter start of year range : "))
end = Number(readline.question("Enter end of year range : "))

for(let year = start; year <= end; year++ ){
    let isLeapYear = false

    if (year % 4 === 0){
      if (year % 100 !== 0 || year % 400 === 0 ){
          isLeapYear = true
      }
    }

    console.log(`${year} - ${isLeapYear ? "Leap Year" : "Not"}`)
}
```

### Ouptut
```
Enter start of year range : 2023
Enter end of year range : 2028
2023 - Not
2024 - Leap Year
2025 - Not
2026 - Not
2027 - Not
2028 - Leap Year
```
<br/>

4. Write a JS program to calculate the days left before Christmas.  


```js
let today = new Date();
let christmas = new Date(today.getFullYear(), 11, 25); 
let oneDay = 24 * 60 * 60 * 1000; 

let daysLeft = Math.ceil((christmas - today) / oneDay);

console.log("Days left for Christmas:", daysLeft);
```

### Ouptut
```
Days left for christmas :  173
```
<br/>

5. Write a JS program to remove a character at the specified position in a given string and return the modified string.  


```js
const readline = require('readline-sync');

let str = "JavaScript program";
console.log("String : ",str)
let position = Number(readline.question("Enter index number of character : "))

let charArray = str.split('')

if (position >= 0 && position < charArray.length){
  charArray.splice(position,1); 

console.log("Modified String : ",charArray.join(''))

} else {
  console.log("Invalid position")
}
```

### Ouptut
```
String :  JavaScript program
Enter index number of character : 11
Modified String :  JavaScript rogram
```
<br/>

6. Write a JS program to create a new string from a given string by 
1) first character of the given string added to the front and back.
2) changing the position of the first and last characters.
   The string length must be broader than or equal to 1.  


```js
const readline = require('readline-sync');
let str = "JavaScript program";
console.log("String: ", str);

//console.log("Modified String : ", str.slice(str.length-3) + str + str.slice(str.length-3));

if (str.length >= 1) {
  let charArray = str.split('');

  charArray.push(charArray[0]);
  charArray.unshift(charArray[charArray.length - 1]);

  console.log("Modified String (Part 1): ", charArray.join(''));

  charArray = str.split('');
  charArray.pop();
  charArray.push(str[0]);
  charArray.shift();
  charArray.unshift(str[str.length - 1]);

  console.log("Modified String (Part 2) : ", charArray.join(''));
} else {
  console.log("String length must be greater than or equal to 1.");
}
```

### Ouptut
```
String:  JavaScript program
Modified String (Part 1):  JJavaScript programJ
Modified String (Part 2) :  mavaScript prograJ
```
<br/>

7. Write a JavaScript program to replace every character in a given string with the character following it in the alphabet.


```js
const readline = require('readline-sync');
let str = "JavaScript program";
console.log("String: ", str);

for (let i = 0; i < str.length; i++) {

  const charCode = str.charCodeAt(i);
  str = str.replace(str[i], String.fromCharCode(charCode+1));
}

console.log("Replaced String: ", str);
```

### Ouptut
```
String:  JavaScript program
Replaced String:  KbwbTdsjqu!qsphsbn
```
<br/>

3.  


```js

```

### Ouptut
```

```
<br/>