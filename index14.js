// Write a javascript function to get the last element of an array.
// Passing a parameter 'n' will return the last 'n' elements of the array


function retrieve(arr, n=1){
    if(n<=arr.length){
    for(i = 0; i<n; i++){
        console.log(arr[arr.length - 1 - i]);
        }
    }
    else{
        console.log(n + " numbers of elements are not there");
    }
}


retrieve([1, 2, 3, 4, 5], 5);