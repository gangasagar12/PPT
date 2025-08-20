// Typed.js initialization
document.addEventListener("DOMContentLoaded", () => {
  new Typed(".typed-text", {
    strings: ["Web Developer", "Python Programmer", "ML Enthusiast", "DSA Learner"],
    typeSpeed: 80,
    backSpeed: 50,
    backDelay: 1500,
    loop: true,
  });
});

// Navbar Active Link on Scroll
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });
  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// Hamburger Menu
const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".navbar");

hamburger.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

// Reveal on Scroll
const reveals = document.querySelectorAll(".reveal");
window.addEventListener("scroll", () => {
  reveals.forEach((reveal) => {
    const windowHeight = window.innerHeight;
    const revealTop = reveal.getBoundingClientRect().top;
    const revealPoint = 100;
    if (revealTop < windowHeight - revealPoint) {
      reveal.classList.add("active");
    }
  });
});

// Skills Progress Animation
const circles = document.querySelectorAll(".progress-ring-foreground");
const skillBoxes = document.querySelectorAll(".skill-box");

function animateSkills() {
  skillBoxes.forEach((box, index) => {
    const circle = circles[index];
    const percent = box.querySelector(".progress-circle").dataset.percent;
    const radius = 60;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (percent / 100) * circumference;
    circle.style.strokeDasharray = circumference;
    circle.style.strokeDashoffset = offset;
  });
}

window.addEventListener("scroll", () => {
  const skillsSection = document.querySelector("#skills");
  const skillsTop = skillsSection.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;
  if (skillsTop < windowHeight - 100) {
    animateSkills();
  }
});
