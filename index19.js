
// Find the largest Number

// 1st method
function largestNumber(str){
    return str.reduce((acc, cur) => {
        (acc > cur) ? acc : cur, str[0];
    });
}

console.log(largestNumber([1, 3, 6, 3]));


function largestNumber(str) {
    return str.reduce((acc, cur) => acc > cur ? acc : cur);
  }
  
  console.log(largestNumber([1, 3, 6, 3]));



// 2nd method
let arr = [1,2,34,4];

console.log(Math.max(...arr));
