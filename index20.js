// 2 object programs


// Write a function that takes two strings 
// (a and b) as arguments. Create an object
// that has a property 
// with key 'a' and a value of 'b'. Return
// the object.

function myFunction(a, b){
    return {[a]: b};
}

console.log(myFunction("name", "rain"));


// Write a function that takes two arrays 
// (a and b) as arguments. Create an object
//  that has properties with keys 'a' and 
// corresponding values 'b'. Return the 
// object.

function myFunction(a, b){
    let result = [];
    for(let i = 0;i < b.length;i++){
        result.push({[a[i]]: b[i]});
    }
    return result;
}

console.log(myFunction(["name", "occupation", "age"], ["Harry", "Student", 29]));









