// Write a function that takes an object (a) and a string (b)
//  as argument. Return true if the object has a property with
//  key 'b'. Return false otherwise. Hint: test case 3 is a bit
//  tricky because the value of property 'z' is undefined. But
//  the property itself exists.


let obj = {
    name: "Minhaj",
    id: 12327186
}

let isProperty = (obj['name'] !== undefined)? true: false;

console.log(isProperty);