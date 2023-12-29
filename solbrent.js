var canvas;
let t = 0;
let tIncr = 2000;
function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0,0);
    canvas.style('z-index', '-1');

}

function draw(){
    if (mouseX > 0 && mouseY > 0) {

        let xNoise = noise(t);
        let yNoise = noise(t + 400);
        let x = map(xNoise, 0, 1, mouseX - 200, mouseX + 200);
        let y = map(yNoise, 0, 1, mouseY - 200, mouseY + 200);
    
    
        strokeWeight(0.2);
        let uvColor = color(map(mouseX, 0, windowWidth, 0, 255), map(mouseY, 0, windowHeight, 0, 255), 150);
        stroke(uvColor);
        line(0, 0, x, y);


        t += tIncr;
    }
}

const targetElement = document.querySelector("footer");
const contactLink = document.getElementById("contact");


contactLink.addEventListener('click', () => {
    targetElement.scrollIntoView({ behavior: "smooth" });
  
});

const heading = document.getElementById("jumping-heading");

heading.addEventListener("click", () => {
    heading.classList.add("clicked");

    setTimeout(() => {
        heading.classList.remove("clicked");
    }, 200); 
});

let currentSlide = 0;
const slides = document.getElementsByClassName("sprint");
const buttons = document.getElementsByClassName("sprint-btn");
const totalSlides = slides.length;

function showSlide(n) {
    if (n >= totalSlides) {
        n = 0;
    } else if (n < 0) {
        n = totalSlides - 1;
    }
    currentSlide = n; 


    for (let i = 0; i < totalSlides; i++) {
        slides[i].style.display = "none";
        buttons[i].classList.remove("active");
    }

    slides[currentSlide].style.display = "block";
    buttons[currentSlide].classList.add("active");
}

function moveSlide(step) {
    showSlide(currentSlide + step);
}

window.onload = function() {
    showSlide(currentSlide);
};

window.onscroll = function() { checkScroll() };

function checkScroll() {
  var mybutton = document.getElementById("backToTop");


  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function scrollToTop() {
  window.scrollTo({top: 0, behavior: 'smooth'});
}