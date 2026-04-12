bulb = document.querySelector(".bulb")
btn = document.querySelector(".btn")

flag = 0

btn.addEventListener('click',()=>{

    if(flag==0){
    bulb.style.backgroundColor = "yellow"
    console.log("clicked")
    flag = 1
    }
    else{
        bulb.style.backgroundColor = "transparent"
        console.log("clicked again")
        flag = 0
    }
})