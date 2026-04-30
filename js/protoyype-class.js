// Prototype and classes

const obj = {
    name:"Rohit",
    age:38,
    greet: function(){
        console.log("Hello Ji")
    }
};


// console.log(obj.greet());
// obj.greet()

// console.log(obj.hasOwnProperty("names"));
// console.log(obj.toString());

const arr = [10,20,30];

// console.log(arr.length)

const obj2 = {
    account:30
}


obj2.__proto__ = obj; 

console.log(obj2.name) // khudke ke upr check kr agar nhi h toh papa ke pass ja


console.log(obj.hasOwnProperty("name"))

// class initial