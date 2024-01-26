// Write a javascript program to shuffle an array


let newArr = [1,2,3,4,5,6,7,8,9,10];

function doShuffle(arr){
    let totalShuffleArea = arr.length;
    while(totalShuffleArea > 0){
        totalShuffleArea--;
        indexToBeExchanged = Math.floor(Math.random() * totalShuffleArea); // THIS IS THE MAGIC LINE OF THE COMPLETE CODE
        temp = arr[totalShuffleArea];
        arr[totalShuffleArea] = arr[indexToBeExchanged];
        arr[indexToBeExchanged] = temp;
    }
    return arr;
}

console.log(doShuffle(newArr));

// I got real fun while executing this code. Actually the thing is sometimes some specific keyword we should memorize or at least know those keywords so that at least we can search on google and get it very easily and we can use it in our code