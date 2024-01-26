// Write a JavaScript program to get the current date.
// Expected Output :
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

let today = new Date()
let years = today.getFullYear();
let days = today.getDay();
let months = today.getMonth();

console.log(months + "-" + days + "-" + years);