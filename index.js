const switchWrapper = document.querySelector(".switch-wrapper");
const checkbox = document.querySelector(".checkbox");
const html = document.querySelector("html");
const body = document.querySelector("body");
const slider = document.querySelector(".slider");
const highlightStyle = document.querySelector(".highlight");

if (localStorage.getItem("toggled") === null) {
  localStorage.setItem("toggled", "light");
}

html.classList.toggle(localStorage.toggled);
body.classList.toggle(localStorage.toggled);

function toggleColor() {
  if (localStorage.toggled != "light") {
    highlightStyle.setAttribute("href", "highlight/styles/github.min.css");
    slider.classList.remove("noTransition");
    html.classList.remove("dark");
    body.classList.remove("dark");
    html.classList.add("light");
    body.classList.add("light");
    localStorage.toggled = "light";
  } else {
    highlightStyle.setAttribute(
      "href",
      "highlight/styles/github-dark-dimmed.min.css"
    );
    slider.classList.remove("noTransition");
    html.classList.remove("light");
    body.classList.remove("light");
    html.classList.add("dark");
    body.classList.add("dark");
    localStorage.toggled = "dark";
  }
}

if (html.classList.contains("dark")) {
  slider.classList.add("noTransition");
  highlightStyle.setAttribute(
    "href",
    "highlight/styles/github-dark-dimmed.min.css"
  );
  checkbox.checked = true;
} else {
  slider.classList.remove("noTransition");
  highlightStyle.setAttribute("href", "highlight/styles/github.min.css");
  checkbox.checked = false;
}

const photo = document.querySelector("figure > img");
const figure = document.querySelector("figure");
const header = document.querySelector("header");
const contactPictures = document.querySelectorAll(".contact-picture");

// add all transitions after page load
window.addEventListener("load", () => {
  photo.style.transition = "filter .2s";
  figure.style.transition = "border-color .2s";
  body.style.transition = "background-color .2s, color .2s";
  header.style.transition = "background-color .2s";
  contactPictures.forEach((contactPicture) => {
    contactPicture.style.transition = "filter .2s";
  });
});

/* burger menu */

const menuBtn = document.querySelector(".menu-icon");
const nav = document.querySelector(".nav");
const modeBtn = document.querySelector(".switch-wrapper");
const navList = document.querySelector(".nav-links");

function toggleMenu() {
  if (!menuBtn.classList.contains("active")) {
    menuBtn.classList.add("active");
    body.style.overflow = "hidden";
    nav.style.top = "0";
    modeBtn.style.top = "280px";
  } else {
    menuBtn.classList.remove("active");
    body.style.overflow = "visible";
    nav.style.top = "-370px";
    modeBtn.style.top = "-70px";
  }
}

menuBtn.addEventListener("click", toggleMenu);

// hide menu
document.addEventListener("click", (e) => {
  if (e.clientY > 369 && menuBtn.classList.contains("active")) {
    toggleMenu();
    console.log(e.clientY);
  } else if (e.target.classList.contains("nav-link")) {
    toggleMenu();
  }
});

// fix behaviour of switcher (during resizing the window)
window.addEventListener("resize", () => {
  if (window.innerWidth >= 991) {
    modeBtn.style.transition = "none";
    modeBtn.style.top = "0";
    setTimeout(() => (modeBtn.style.transition = "top 0.5s"), 100);
  } else if (window.innerWidth < 991 && menuBtn.classList.contains("active")) {
    modeBtn.style.transition = "none";
    modeBtn.style.top = "280px";
    setTimeout(() => (modeBtn.style.transition = "top 0.5s"), 100);
  } else if (window.innerWidth < 991 && !menuBtn.classList.contains("active")) {
    modeBtn.style.transition = "none";
    modeBtn.style.top = "-70px";
    setTimeout(() => (modeBtn.style.transition = "top 0.5s"), 100);
  }
});

/* console log description */

const styles = [
  "font-size: 30px; color: rgb(2, 120, 151);",
  "font-size: 16px; color: rgb(2, 120, 151);",
  "font-size: 16px; color: #fff; background-color: lightgreen; border-radius: 50%; padding: 5px;",
];

console.log("%cTitle", styles[0]);
console.log("%c1. Вёрстка валидная %c+10", styles[1], styles[2]);
console.log("%c2. Вёрстка семантическая: %c+20", styles[1], styles[2]);
