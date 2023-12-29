let circleSize;
let maxSize = 600; 
let minSize = 500; 
let beatTime = 0;
let beatSpeed = 0.05; 

var canvas;

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0);
    canvas.style('z-index', '-1');
    circleSize = minSize;
}

function draw() {
  clear(); 

  let targetSize = sin(beatTime) > 0 ? maxSize : minSize;
  circleSize = lerp(circleSize, targetSize, 0.05);


  fill(200, 27, 46);
  noStroke();
  ellipse(width / 2, height / 2, circleSize);


  beatTime += beatSpeed;
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