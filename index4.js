// Make this work :
// duplicate:
// ([1,2,3,4,5]) ||| [1,2,3,4,5,1,2,3,4,5]


let value = [1,2,3,4,5];
function duplicate(val){
    return val.concat(val);
}

console.log(duplicate(value));