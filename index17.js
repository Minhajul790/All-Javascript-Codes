// Write a javascript program to compute the union of two arrays

let newArr = [1,2,3,4,5,6,7,8,9,10];
let newArr2 = [9,10,11,12,13,14,15,16,17,18];

function union(arr1, arr2){
    console.log([...new Set(arr1.concat(arr2))]);
    // return [...new Set(arr1.concat(arr2))]; It basically does not take the repeated value
}
console.log(union(newArr, newArr2));