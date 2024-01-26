// Write a javascript function that returns
// a passed string with letters in alphabetical
// order

// dcba will become abcd




function alphabeticStr(str){
    let sortedStr = str.split("").sort().join("");
    console.log(sortedStr);
}

alphabeticStr("adcbe")