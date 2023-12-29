let nodes = [];

  function setup() {
    canvas = createCanvas(windowWidth, windowHeight); 
    canvas.position(0, 0);
    canvas.style('z-index', '-1');
  
    for (let i = 0; i < 150; i++) {
      nodes.push(new Node(random(width), random(height)));
    }
  }

  function draw() {
    background(255);
    for (let node of nodes) {
      node.update();
      node.show();
    }
  
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        let distance = dist(nodes[i].x, nodes[i].y, nodes[j].x, nodes[j].y);
        if (distance < 400) {
          stroke('#e3f2fd');
          line(nodes[i].x, nodes[i].y, nodes[j].x, nodes[j].y);
        }
      }
    }
  }
  
  class Node {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.size = random(10, 20);
      this.vel = p5.Vector.random2D().mult(random(0.5, 1));
    }
  
    update() {
      this.x += this.vel.x;
      this.y += this.vel.y;
      this.edges();
    }
  
    edges() {
      if (this.x < 0 || this.x > width) {
        this.vel.x *= -1;
      }
      if (this.y < 0 || this.y > height) {
        this.vel.y *= -1;
      }
    }
  
    show() {
      fill('#0d47a1');
      noStroke();
      ellipse(this.x, this.y, this.size, this.size);
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