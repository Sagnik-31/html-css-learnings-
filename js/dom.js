const newElement = document.createElement("h2")
newElement.textContent = "strike is coming"
newElement.id = "second"

const element = document.querySelector("#first")
element.before(newElement)

const newElement2 = document.createElement("h3");
newElement2.textContent = "diwali aa rhi hain";
newElement2.style.backgroundColor = "brown";
newElement2.classList.add("diwali")
newElement2.classList.add("another")
newElement2.setAttribute("hello","ji");
element.before(newElement2)


// creating list ->

const list = document.createElement("li")
list.textContent = "milk"

const list2 = document.createElement("li")
list2.textContent = "Cake"

const list3 = document.createElement("li")
list3.textContent = "Halwa"

const list4 = document.createElement("li")
list4.textContent = "paneer"

// const UnorderElement = document.getElementById("listing")

// UnorderElement.append(list,list2)
// UnorderElement.prepend(list3)

// const mnth = document.getElementById("ten")
// UnorderElement.before(mnth)


const arr = ["milk", "halwa", "paneer", "tofu", "tea"]



const UnorderElement = document.getElementById("listing")

//not a good practice

// for(let food of arr){
//     const list = document.createElement("li")
//     list.textContent = food;
//     UnorderElement.append(list)
// }

//best practice for list 
const fragment = document.createDocumentFragment();

for (let food of arr){
    const list = document.createElement("li");
    list.textContent = food;
    fragment.append(list);
}
UnorderElement.append(fragment);

// for deleting element
// const s1 = document.getElementById("first")
// s1.remove()

