# JS-Practice

## JS Programs with Output

1. Write a JavaScript program to display the current day and time in the following format.  
Sample Output : Today is : Tuesday.

<pre>
```javascript
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
</pre>


### Output
>Today's Day - Friday
Current Time - 7 : 01 : 53 PM

1. Write a JavaScript program to display the current day and time in the following format.  
Sample Output : Today is : Tuesday.

```

```

### Output
>