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


