// random color generator

const body = document.querySelector("body");
const output = document.querySelector("#output");
const cBtn = document.querySelector(".cBtn");
const gBtn = document.querySelector(".gBtn");
const input = document.querySelector("input");


// addEvenListener in generate button
gBtn.addEventListener('click' , generatorButton);


// make a generator button
function generatorButton(){
    const red = Math.ceil(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.round(Math.random() * 255);
    let generateColor = `rgb(${red} , ${green} , ${blue})`;
    input.style.background = generateColor ;
    show(generateColor);
} 



// show color code in input value
function show(gColor) {
    output.value = gColor ;
    copyColor(gColor);
}

// addEvenListener in copy button
cBtn.addEventListener('click' , copyColor);

// copy color code 
function copyColor () {
    navigator.clipboard.writeText(output.value);
}








// make a  digital clock
// const clock = document.querySelector(".clock");

// // addEven functions property
// setInterval(function() {
//     let date = new Date();
//     clock.innerHTML = date.toLocaleTimeString();
// })
