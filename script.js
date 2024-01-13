let container = document.getElementById("container");
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let inner = document.getElementById("inner");


function colorChange() {
    let str = "01234567789abcdef";
    let finalStr = "#";

    for(let i = 0; i < 6; i++) {
        let randomIdx = Math.floor(Math.random() * str.length);
        finalStr += str[randomIdx];
    }
    container.style.backgroundColor = finalStr;
}
btn1.addEventListener("click", colorChange);

let shape = ["diamond","triangle-up","circle","square","star-five"];

function changeShape() {
    let shapes = Math.floor(Math.random() * shape.length);
    inner.setAttribute("id", shape[shapes]);
} 

btn2.addEventListener("click", changeShape);