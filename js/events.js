// event -> mouse move , click , double click
// event listener -> listeneing the evenet (click)
// event action 

// function handleClick(){
//    const element = document.getElementById("first")
//     element.textContent = "Strike is coming"
// }

// const element = document.getElementById("first")
// element.onclick = function handleClick(){
//     element.textContent = " strike is coming "
// }

// the best practice is 

element = document.getElementById("first")
element.addEventListener('click',()=>{
    element.textContent = "strike is coming"
})

element.addEventListener('click',()=>{
    element.style.backgroundColor = "brown"
})

//document.queryselectorAll(h1) -> this will select all h1 element
// instead of one and stores them in a node list

// const all = document.querySelectorAll("h1")
// all.forEach((el)=>{
//     console.log(el)
// })

// events includes ->
// click , dblclick , mousedown , mouseup, mousemove, mouseenter, mouseleave

