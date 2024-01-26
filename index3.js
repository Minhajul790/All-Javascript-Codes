// WAP to check if a number is an integer or not


// METHOD 1
let num = 1;
let c = Number.isInteger(num);
console.log(c);



// METHOD 2
let val = 7;
let int = (val%1 === 0) ? "Integer" : "Not Integer!";
console.log(int);