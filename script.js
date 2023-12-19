"Use strict"
const message = document.querySelector("#message");
const color =  ["red", "blue", "green", "yellow", "purple"];
const nums = [1, 2, 3, 4, 5];
const ul = document.querySelector("ul");

const form = document.querySelector("form")

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const li = document.createElement("li")
    const name = e.target.name.value;
    const age = e.target.age.value;
    li.innerText = `Name: ${name} Age: ${age}`;
    ul.appendChild(li);
});

for (let i = 0; i < color.length; i++) {
    const p = document.createElement("p");
    p.innerText = color[i];
    message.appendChild(p);
}

let counter = 0;
while (counter < 5) {
    const p = document.createElement("p");
    p.innerText = `Count: ${counter + 1}`;
    message.appendChild(p);
    counter++;
}

const newNums = nums.map((number) => number * 2);

const odds = nums.filter((number) => number % 2 !== 0);

function forEachMethod() {
    const li = document.createElement("li");
    li.innerText = number;
    UserActivation.appendChild(li);
}

forEachMethod();

// reference type manipulation
const myArray1 = [1, 2, 3];
const myArray2 = myArray1;
myArray1.push("New value");
console.log(myArray2);

// primitive type manipulation
let myNum = 5;
let myNum2 = myNum1;
myNum1 = 10;
console.log(myNum2);

