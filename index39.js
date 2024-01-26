// Spread Operator means to open up all the elements of an array( ... )
// arr = [2, 5, 6, 7];
// function avg(a, b, c){
//     return a+b+c/3
// }

// let a = avg(...arr);

// let a = [3, 5, ...arr, 7];
// console.log(a);



let obj1 = {
    name : "Harry",
    class : "5b",
    favLan : "Javascript"
}

// let obj2 = {}

// obj2.name = obj1.name;
// obj2.class = obj1.class;
// obj2.favLan = "Pyhton";

let obj2 = {...obj1, favLan: "Python"}
console.log(obj2);