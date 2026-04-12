const grandparent = document.querySelector(".grandparent")
const parent = document.querySelector(".parent")
const child = document.querySelector(".child")

grandparent.addEventListener('click',()=>{
    console.log("grandparent is clicked")
},false)

parent.addEventListener('click',()=>{
    console.log("parent is clicked")
},false)

child.addEventListener('click',()=>{
    console.log("child is clicked")
},false)

//capture phase off hain: event hain usko down to up (bubbling phase) tab trigger kiya jayega
//capture phase on hain: top se down aooge us time pe event ko trigger kar diya jayega

// by default capture phase off rehta hain
