// Wtite a program to check two numbers and return true if one of the number is 100 or if the sum of the two number is 100


// Method - 1
function checkingValueOfFunction(num1, num2){
    let result = ((num1 === 100 || num2 === 100) || ((num1 + num2) === 100)) ? "true" : "false";
    return result;
}

console.log(checkingValueOfFunction(50, 50))



