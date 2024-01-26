// Write  a javascript function to get the number of 
// occurences of each letter in specified string
// Apple
// {A: 1,
//  p: 2,
//  l: 1,
//  e: 1}


function occ(str) {
    let occurences = {};
    str.split("").forEach((element) => {
        if (occurences.hasOwnProperty(element) === false) {
            occurences[element] = 1
        }
        else {
            occurences[element]++;
        }
    });
    return occurences;
}

console.log(occ("Orange"));