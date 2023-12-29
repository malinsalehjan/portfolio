let t = 20;
let tIncr = 200;
var canvas;


function setup() {

  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  canvas.style('z-index', '-1');
  background(260);

  stroke(40, 40);
  strokeWeight(1.5);
  noFill();
}

function draw() {
  if (isMouseOverCanvas()) {
    
    let xNoise = noise(t);
    let yNoise = noise(t + 4000);
    let x = map(xNoise, 0, 1, mouseX - 200, mouseX + 200);
    let y = map(yNoise, 0, 1, mouseY - 200, mouseY + 200);
    

    for (let angle=0; angle<200; angle+=10){
      ellipse(x,y,angle);
    }

    t += tIncr;
  }
  
  if (mouseIsPressed === true) {
    let r = random(0, 255);
    let g = random(0, 255);
    let b = random(0, 255);
    stroke(r, g, b);
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
}

function isMouseOverCanvas() {
  return mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height;
}


function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}



const targetElement = document.querySelector("footer");
const contactLink = document.getElementById("contact");


contactLink.addEventListener('click', () => {
    targetElement.scrollIntoView({ behavior: "smooth" });
  
});


const targetel = document.querySelector(".portfolio");
const project = document.getElementById("portfolios");

project.addEventListener('click', () => {
    targetel.scrollIntoView({ behavior: "smooth" });
  
});


const heading = document.getElementById("jumping-heading");

heading.addEventListener("click", () => {
    heading.classList.add("clicked");

    setTimeout(() => {
        heading.classList.remove("clicked");
    }, 200); 
});
