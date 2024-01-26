// Write a javascript function that checks 
// wheather a passed string is palindrome or not



function stringPalChecker(str){
    let reversed = str.split("").reverse().join("");
    let checker = (reversed === str) ? true : false;
    console.log(checker);
}
stringPalChecker("Harry");
stringPalChecker("poop");



// console.log("HEllo");