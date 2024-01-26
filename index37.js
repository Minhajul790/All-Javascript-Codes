// How to get the value of the properties of the objects using Destructuring

let obj1 = {
    name1 : "Harry",
    class1 : "5b",
    favLan : "Javascript"
}

// name1 = obj1.name1;
// class1 = obj1.class1;
// favLan = obj1.favLan;


let {name1, class1, favLan} = obj1; //Destructuring
console.log(name1, class1, favLan);