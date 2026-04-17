fetch("https://api.github.com/users") //promise ke 3 state -> pending, fullfilled, reject

// promise fullfilled
.then((response)=>{ // convert json string to js object

    if (!response.ok) { 
        throw new Error(`Data is not present in server`);
    }
    return response.json()
})

.then((data)=>{ //read , can acess js object properties
    
    const parent = document.getElementById('parent');
    

    for(let i=0; i < data.length; i++){

    const image = document.createElement('img');
    image.src = data[i].avatar_url;
    image.style.width = "40px";
    image.style.height = "40px";
    parent.append(image)
                                }
})

// promise rejected
.catch((error)=>{
    const parent = document.getElementById('parent');
    parent.textContent = error.message;
})

// ** whenever server responds the promise will be considered as fullfilled 
// like a typo in the url but even tho the server responds 

// reject -> (server se baat hi nhi kar paya)
// internet down
// server down
// DNS down


// creating promise
// const p1 = new Promise((resolve,reject)=>{
//     resolve("hello");
// })

// // consuming promise
// p1.then((response)=>{
//     console.log(response);
// })
// p1.catch((error)=>{
//     console.log(error)
// })