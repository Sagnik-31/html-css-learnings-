
async function github(){ 

const response = await fetch("https://api.github.com/users");
const data = await response.json()
console.log(data)

}

// always use await with async function as standalone using await will
// wait until it is finished and wont execute next lines of code 

github();
console.log("hi sagnik")