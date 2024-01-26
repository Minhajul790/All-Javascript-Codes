// Write a js program to create a new string adding "New!" in front of a given strin.
// If a given string begins with "New!" already then return the original array



let addingAnotherStringInString = (str) => {
    str.split(" ").map((elem) => {
        if(elem.hasOwnProperty("New")) {return str}
        else{return str + " New"} 
})
    
}

console.log(addingAnotherStringInString('this is '));


// Method - 2

const addNewStr = (str) => (str.indexOf('New') === 0) ? str : `"New" ${str}`;

console.log(addNewStr('Hello Offers'));