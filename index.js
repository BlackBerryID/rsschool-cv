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
