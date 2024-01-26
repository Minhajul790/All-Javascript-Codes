// Write a JavaScript program to display the current day and time in the following format.
// Today is : Tuesday.
// Current time is : 10 PM : 30 : 38

let today = new Date();
let day = today.getDay();

let dayList = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
console.log("Today is : " + dayList[day] + ".");

// Getting current time

let hours = today.getHours();
let minutes = today.getMinutes();
let seconds = today.getSeconds();

// Now Giving Logic

// Making am or pm using ternary operator

let prepand = (hours >= 12) ? "PM" : "AM";


// Making the time in 24 hours format

hours = (hours >= 12) ? hours - 12 : hours;

// Special case when hours is 0

if(hours === 0 && prepand === "PM")
{
    if(minutes === 0 && seconds === 0)
    {
        hours = 12;
        prepand = "Noon"
    }
    else{
        hours = 12;
        prepand ="PM";
    }
}
if(hours === 0 && prepand === "AM"){
    if(minutes === 0 && seconds === 0){
        hours = 12;
        prepand = "Midnight";
    }
    else{
        hours = 12;
        prepand = "AM"
    }
}
console.log("Current time is : " + hours + " "  + prepand + " : " + minutes + " : " + seconds);


// I really Enjoyed This One