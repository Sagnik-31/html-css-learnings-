// async -> makes a function return a promise
// await -> makes an async function wait for a promise
// allows to write asynchronous code in synchronus manner

async function github(){ 
try{
const response = await fetch("https://api.github.com/users");
const data = await response.json()
console.log(data)}

catch(error){
    console.log(error.message)
}

}

// always use await with async function as standalone using await will
// wait until it is finished and wont execute next lines of code 

github();
console.log("hi sagnik")

async function userDetail(params) {
    
    // const comment = await fetch("userComment");
    // const photos = await fetch("userPhoto");
    // const chat = await fetch("chat");

    const [comment,photos,chat]= await Promise.all([fetch("userComment"),fetch("photo"),fetch("chat")]);
    // fetch all at once
}