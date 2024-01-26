// Write a js program to reverse a number

function reverseNum(num){
    return num.toString().split("").reverse().join("");
}

console.log(reverseNum(12345));