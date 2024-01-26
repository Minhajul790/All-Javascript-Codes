// A little revising again from the basics



console.log("Hello World");


var myName = "Minhajul Islam Shihab";
var myAge = 22;
console.log("My age is",myAge);



// Section 4 : Data Types in Javascript


// Types of Operator

var myAge = 22;
console.log(myAge);
console.log(typeof(myAge));

var iAmMinhaj = true;
console.log(iAmMinhaj);
console.log(typeof(iAmMinhaj));


// What the Output comes when two strings are substracted from each other?
// Ans : NaN(Not a Number)
// and NaN is the property of the global Object


var myPhoneNumber = 9056463790
var myName = 'Minhajul'

console.log(isNaN(myPhoneNumber));
console.log(isNaN(myName));



// Expressions and Operator
var x = 5;
var y = 5;

console.log("is both the x and y are equal or not" +  x == y);
console.log(x == y);

console.log(`is both the x and y are equal : ${x == y}`);







// Postfix Increment

var num = 15;

var newNum = num++ + 5;

console.log(num);
console.log(newNum);



// PreFix Increment

var num = 15;

var newNum = ++num + 5;

console.log(num);
console.log(newNum);




// Again For the Prefix and Postfix Decrement the process is same.The postfixed decrement evaluates the expresion at first and then increment the value and the prefix increment at first increase the value and then evaluate the expression





// Comparison Operator
var a = 4;
var b = 3;
console.log(a >= b);


// Logical Operator
// &&
// ||
// !
// Result always comes in boolean either true or false


var a = 5;
var b = -20;
console.log((a>b) || (b>0));




// String Concatination Operator
// This operator (+) concatenates two strings values together
// Returning another string that is the union of the two operand strings


console.log("Hello World" + "This is my first dynamic website");

var myName = "Harry";
console.log(myName + " Minhaj");
console.log(myName + " Coding Friend");





// Exponentiation Operator
console.log(3**3)








// == only compare with the value
// ===compares with both the value and data type
var a = 5;
var b = "5";
console.log(a==b);
console.log(a===b);





// If we put falsy values in if()scope the function will execute the else part
// 0,"",undefined,null,NaN,false are Falsy Values in Javascript

if(score = 0)
{console.log("OMG! We loss the game")}
else{
    console.log("Yah we won the game")
}




// Conditional(Ternary) Operator

// The conditional Operator is the only javascript operator that takes three operands

// Syntax : variablename = (condition) ? value1:value2

var age = 17;
if(age >= 18){
    console.log("You are eligible to vote");
}
else{
    console.log("You are not eligible to vote")
}

var age = 17;
console.log((age>=18) ? "You can vote" : "You can't vote");





// WAP to print table for 8
// 8* 1
// 8* 2
// 8* 3
// 8* 4

for(var num = 1;num<=10;num++){
    var tableOf = 12;
    console.log(tableOf + "*" + num + "=" + tableOf *num);
}



// Function definition
// Function Calling
// A javascript function is a block of code which is designed to performa  particular task
// Return Keyword







// Not a Good Way To Call A Function 

function sum(a, b){
    console.log(total = a+b);
}
var funExp = sum(3, 5);




// Good way to design  a function

function sum(a, b){
    return total = a+b;
}
var funExp = sum(3, 5);
console.log(funExp);




// Anonymous Function
// It means basically defining function without specifying fumction name



var funExp = function(a,b){  
    return total = a + b;
}                              

console.log("The sum of two number is " + funExp(2,5));




function bioData(){
    var myName = 'Minhaj';
    
}





























