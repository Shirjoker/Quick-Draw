let r = 0
let g = 0
let b = 0
let colorpic = document.querySelector("input");
let color2 = document.getElementById("input2");
let white = document.getElementById("white");
let black = document.getElementById("black");
let button0 = document.getElementById("button0")
console.log(colorpic.value)


function setup(color) {
    createCanvas(1400, 500);
    color = 255
    background(255);
}

 
function draw() {

    fill(colorpic.value)
   ellipse(mouseX, mouseY, 5, 5)
    
    console.log(colorpic.value)
 
}
button0.click = function(event) {
    event.preventDefault();
    background(color2.value)

}





