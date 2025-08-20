// let a=24;
// console.log(a);
// var a = 2;
// var a = 5;
// console.log(a);

// const a = 20;
// console.log(a);
// a = 45; not allowed
// console.log(a);

// let b = 20;
// console.log(b);


// scoping

var a = 2;
console.log(a);
{
    var a = 20;
    console.log(a);
}
console.log(a);
//let
let b = 2;
console.log(b);
{
    let b = 20;
    console.log(b);
}

console.log(b);

//equality
console.log(12 == "12");
console.log(12 === "12");

// function add(){
//     return 12+23;
// }
// let sum = add();
// console.log(sum);

// function add(a,b){
//     return a+b;
// }
// let val = add(12,23);
// console.log(val);

//hoisting
// let val = add(12,23);
// console.log(val);
// function add(a,b){
//     return a+b;
// }

//function as variable

// const data = function(a,b){
//     return a-b;
// }
// let sub = data(20,10)
// console.log(sub);

//function as variable with hoisting

var data = function (a, b) {
    return a - b;
}
let sub = data(20, 10)
console.log(sub);

//arrow function

const sum = (a, b) => {
    return a + b;
}
console.log(sum(10, 20));

const add = (a, b) => a + b;
console.log(add(a, b));

//iife
(() => {
    console.log("invoked");
})()

//default parameter in function
function greet(name="Saniya"){
    console.log("Hello,"+" "+ name + "!");  
}
greet("Rohini");
greet();

