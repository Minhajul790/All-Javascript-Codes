// How to check if an object is an array or not


let arr1 = [1,2,2,3];
let obj1 = {
    name:"harry",
    Uid : "22BAS10105"
}
function checkArray(elem){
    console.log(Array.isArray(elem));
}
checkArray(obj1);
checkArray(arr1);