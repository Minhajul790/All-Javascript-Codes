// Create a function that reverses an array

let arr = ["Minhaj", "Harry", "Paul"];
// let arr = [1, 2, 3, 4, 5, 6];

let reversed = arr.map((element) => {
    if (Number.isInteger(element)) {
        // Convert number to string, reverse, and then convert back to number
        return parseInt(element.toString().split("").reverse().join(""));
    } else {
        // Reverse the string
        return element.split("").reverse().join("");
    }
});

console.log(reversed);
