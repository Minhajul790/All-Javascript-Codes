// WAP for an array of numbers and strings, only
//  add those numbers which are not strings


// Method 1

let myArr = [1, 2, 3, 4, 5, "Harry", "Minhaj", "Paul"];
let sum = 0;

sumOfNumbers = (arr) => {

    arr.forEach(element => {
        if(arr[element] % 1 == 0)
        {
            // arr[element] = true;
            sum = arr[element] + sum;
        }
        else{
            arr[element] = 0;
            sum = arr[element] + sum;
        }        
    }
    );
return sum;



}

console.log(sumOfNumbers(myArr));




// METHOD 2

let myArr2 = [1, 2, 3, 4, 5, "Harry", "Minhaj", "Paul"];
let sum2 = 0;

sumOfNumbers = (arr) => {

    arr.forEach(element => {
        if(element % 1 == 0)
        {
            sum2 = sum2 + element;
        }      
    }
    );
return sum2;



}

console.log(sumOfNumbers(myArr2));

























