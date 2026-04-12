parent = document.getElementById("parent")

parent.addEventListener('click',(e)=>{
    // console.log(e.target)
    e.target.textContent = "i am clicked"
})

// e ki help se parent ke andar jitne bhi child honge
// unko trigger karne pe pata chal jayega kon trigger hua


// for(let child of parent.children){
//     console.log(child);
//     child.addEventListener('click',()=>{
//         child.textContent = "I am Clicked";
//     })
// }
