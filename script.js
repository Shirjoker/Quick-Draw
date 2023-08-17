let r = 0
let g = 0
let b = 0
let colorpic = document.querySelector("input");
let color2 = document.getElementById("input2");
let numb1 = document.getElementById("input3")
let white = document.getElementById("white");
let black = document.getElementById("black");
let button0 = document.getElementById("button0")
let button1 = document.getElementById("button1")
let button2 = document.getElementById("button2")
console.log(colorpic.value)
let circolor = colorpic.value
let numb1Val = numb1.value
function setup(color) {
    createCanvas(1465, 500);
    color = 255
    background(255);
    numb1Val = 5
}

 
function draw() {

    fill(circolor)
    noStroke()
   ellipse(mouseX, mouseY, numb1Val, numb1Val)
    
    console.log(colorpic.value)
 
}
button0.onclick = function(event) {
    event.preventDefault();
    circolor = colorpic.value

}
button1.onclick = function(event) {
    event.preventDefault();
    background(color2.value)
    console.log(color2.value)
}
button2.onclick = function(event) {
    event.preventDefault();
    numb1Val = numb1.value

}






