// Write a javascript function to get the first element of an array.
// Passing a parameter 'n' will return the first 'n' elements of the array


function retrieve(arr, n=1){
    if(n<=arr.length){
    for(i = 0; i<n; i++){
        console.log(arr[i]);
        }
    }
    else{
        console.log(n + " to elements hi nahi hai");
    }
}


retrieve([1, 2, 3, 4, 5], 5);