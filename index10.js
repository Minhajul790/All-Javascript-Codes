// WAP to loop an array and add all members of it


let arr2 = [1, 2, 3, 4, 5];
let sum = 0;
add = (arr) => {
    c = arr.forEach((element) => {
        sum = sum + element;
        
    })
    return sum;    
}
// add(arr);
// console.log(add(arr));
console.log(add(arr2));