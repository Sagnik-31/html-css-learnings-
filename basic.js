// function outerFunction() {
//   let outerVar = "Hello";

//   function innerFunction() {
//      console.log(outerVar); 
//   }

//   innerFunction();
// } 
// outerFunction();

// higher order func - taking another function as an argument

// function greet(name, userName){
//     name(userName) // this is function
//     console.log("hello how ru")
// }

// function userName(name){
//     console.log("hi", name)
// }

// greet(userName,"raj")

// function random(name, userid){
//     name(userid)
//     console.log("hello rahul how are you")
// }

// function userid(name){
//     console.log("hello", name)
// }
// random(userid, "raj")



// function calculate(a,b, operation){
//     return operation(a,b)
// }

// function add(x,y){
//     return x+y
// }

// function sub(x,y){
//     return x-y
// }

// function multi(x,y){
//     return x-y
// }

// function division(x,y){
//     return x/y
// }

// calculate(12,12,add)

// function checkNumber(num, operation) {
//     return operation(num);
// }

// function evenOrOdd(n) {
//     if (n % 2 === 0) {
//         return "Even";
//     } else {
//         return "Odd";
//     }
// }

function printTable(num, operation) {
    operation(num);
}
function table(n) {
    for (let i = 1; i <= 10; i++) {
        console.log(n + " x " + i + " = " + (n * i));
    }
}
printTable(7, table);