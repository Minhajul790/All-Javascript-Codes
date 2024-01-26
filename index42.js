// Reduce basically works with the first two elements of an array, then leaves those two elements and works with the next element and then process and then works with the next one an so on

let a = [1, 5, 3, 6, 8];

let a4 = a.reduce((val1, val2) => {
    return val1 + val2;
})
console.log(a4);