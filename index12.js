// Loop an array of objects and remove all 
// objects which don't have gender's value


// METHOD 1
let arr1 = [
    {name: "Minhaj", gender: "male"},
    {name: "Harry", gender: "female"},
    {name: "Avcd", gender: "nonspecified"},
    {name: "Harsh", gender: "female"},
    {name: "aviniya", gender: "female"}
]


let newArr1 = arr1.filter((elem) => {
    return elem.gender === "male";
})

arr1 = newArr1;

console.log(arr1);






// Same METHOD 1
let arr2 = [{name : "Harry", gender: "male"},
{name: "Minhaj", gender: "male"},
{name: "Harshita", gender: "female"},
{name: "rashmika", gender: "female"}];

newArr2 = arr2.filter((elem) => {
    let condition = (elem.gender === "male") ? elem : elem = null;
    return condition;
})
arr2 = newArr2;
console.log(arr2);



// METHOD 2

let arr3 = [{name : "Harry", gender: "male"},
{name: "Harshita", gender: "female"},
{name: "Minhaj", gender: "male"},
{name: "rashmika", gender: "female"},
{name: "Joe Biden", gender: "male"}];

let count = 0;
arr3.forEach((elem) => {
    if(elem.gender !== "male") count++;   
});


for(var i = 1;i <= count;i++){
for(var j = 0;j<arr3.length;j++){
    if(arr3[j].gender !== "male"){
        arr3.splice(j,1);
    }
}
}



console.log(arr3);