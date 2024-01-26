// Write a javascript function that accepts a string
//  as a parameter and converts the first letter if 
// each word of the string in upper case



// 1.Example 1
function capitalizeKaro(str){
    allWords = str.split(" ").map(function(word){
        return word.charAt(0).toUpperCase() + word.substring(1);
    }).join(" ");
    return allWords;
}

console.log(capitalizeKaro("Harry and Minhaj are friends and the interestimg thing is Minhaj know harry from youtube"));


// 2.Example 2

let str2 = "hello my name is minhaj";
// function newStr(str){
//     let allWords = str.split(" ").
// }

function alphabeticStr(str){
    allWords = str.split(" ").map((word) => {
        return word.charAt(0).toUpperCase() + word.substring(1);
    })
    return allWords.join(" ");
}


console.log(alphabeticStr(str2));