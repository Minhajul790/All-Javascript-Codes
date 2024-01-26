// Calculate the sum of numbers in an array of numbers

let newArr = [1,2,3,4,5];
let sum = 0;

function sumOfArr(arr){
    for(let i = 0; i < arr.length; i++){
        sum = sum + arr[i]
    }
    return sum;
}

console.log(sumOfArr(newArr))



// Create a function that recieves an array of numbers and return an array containing all the positive numbers

// sol-1 
// let newArr = [-1, -21, 2, 3, 4, 5];
// let newArr2 = [];

// function positiveNumberOfArr(arr){
//     for(let i = 0; i< arr.length; i++){
//         if(arr[i] > 0){
//         newArr2.push(arr[i]);}
//     }
//     return newArr2;
    
// }
// console.log(positiveNumberOfArr(newArr))



// sol-2
// let newArr = [-1, -21, 2, 3, 4, 5];
// let newArr2 = [];

// function positiveNumberOfArr(arr){
//     for(elem of arr){
//         if(elem > 0){
//         newArr2.push(elem);}
//     }
//     return newArr2;
    
// }
// console.log(positiveNumberOfArr(newArr))

// sol-3 

// let newArr = [-1, -2, -3, 1, 2, 3];
// function positiveNumberOfArr(arr){
//     let result = arr.filter((elem) => elem > 0)

// }
// newArr2 = positiveNumberOfArr(newArr);
// console.log(positiveNumberOfArr(newArr2))