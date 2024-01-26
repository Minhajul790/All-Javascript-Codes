// Write a javascript function to clone an array



// 1st METHOD USING SPREAD OPERATOR

let arr = [5, 6, 7, 8];

cloneArr = (arr2) => {
    return [...arr,...arr2]
}
console.log(cloneArr([5, 6, 7]));



// 2nd MEHTOD USING forEach
let newArr = [1, 2, 3, 4];
cloneArr = (arr) => {
    arr.forEach((elem) => {
        newArr.push(elem);
    })
    return newArr;
}

console.log(cloneArr(arr));




// 3rd MEHOD USING MAP

let newArr2 = [1, 2, 3, 4];
cloneArr2 = (arr) => {
    let cloned = newArr2.map((elem) => {
    
    })
    return cloned;
}
console.log(cloneArr2(arr));


let numbers = [1, 2, 3];
double = (x) => x * 2;

console.log([...numbers, ...numbers.map(double)]);