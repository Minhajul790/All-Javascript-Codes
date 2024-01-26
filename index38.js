// Wap to convert Feb to feb in Array Using Splice Method



// Sol-1 :

const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
let newMonth = month.splice(1,1,"feb");
// console.log(month);
console.log(newMonth);





// Sol-2 : Using Index Of method as per I know till now it's the best way


const months = ["Jan", "Feb", "Dec", "Apr", "May", "Jun"];
let indexOfMonth = months.indexOf("Dec");
if(indexOfMonth != -1){
    updateMonths = months.splice(indexOfMonth, 1, "Mar");
    console.log(months);
}
else{
    console.log("No Such Data Found");
}
console.log(updateMonths);

