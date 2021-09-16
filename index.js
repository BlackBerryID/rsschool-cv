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
  } else if (
    e.target.classList.contains("nav-link") &&
    menuBtn.classList.contains("active")
  ) {
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
  "font-size: 30px; color: rgb(2, 120, 151); text-decoration: underline;",
  "font-size: 14px; color: rgb(2, 120, 151);",
  "font-size: 14px; color: #fff; background-color: #8AB4F8; border-radius: 35%; padding: 2px;",
  "font-size: 12px; color: rgb(2, 120, 151);",
];

console.log("%cСамооценка", styles[0]);
console.log("%c1. Вёрстка валидная %c+10", styles[1], styles[2]);
console.log("%c2. Вёрстка семантическая: %c+20", styles[1], styles[2]);
console.log(
  "%cВ коде страницы присутствуют семантические теги HTML5: 1. figure 2. footer 3. header 4. nav 5. section (2 балла за каждый). Используются заголовки h1-h6 (2 балла за каждый)",
  styles[3]
);
console.log(
  "%c3. Для оформления СV используются css-стили %c+10",
  styles[1],
  styles[2]
);
console.log(
  "%c4. Контент размещается в блоке, который горизонтально центрируется на странице. Фоновый цвет, если он есть, тянется во всю ширину страницы. %c+10",
  styles[1],
  styles[2]
);
console.log(
  "%c5. Вёрстка адаптивная: ни на одном из разрешений экрана до 320px включительно   не появляется горизонтальная полоса прокрутки, при этом всё содержание   страницы сохраняется. %c+10",
  styles[1],
  styles[2]
);
console.log(
  "%c6. Есть адаптивное бургер-меню. Ссылки в пунктах меню ведут на основные разделы CV. При кликах по пунктам меню реализована плавная прокрутка по якорям. При уменьшении ширины экрана меню становится адаптивным. Внешний вид адаптивного   меню можно скопировать с макета музея. %c+10",
  styles[1],
  styles[2]
);
console.log(
  "%c7. На странице СV присутствует изображение - фото или аватарка автора CV, пропорции изображения не искажены, у изображения есть атрибут alt. %c+10",
  styles[1],
  styles[2]
);
console.log(
  "%c8. Контакты для связи и перечень навыков оформлены в виде списка ul > li. %c+10",
  styles[1],
  styles[2]
);
console.log(
  "%c9. CV содержит контакты для связи, краткую информацию о себе, перечень навыков, информацию об образовании и уровне английского. %c+10",
  styles[1],
  styles[2]
);
console.log(
  "%c10. CV содержит пример моего кода (решение задачи с сайта codewars) с подсветкой кода. Для подсветки кода используется js-библиотека highlight.js. %c+10",
  styles[1],
  styles[2]
);
console.log(
  "%c11. CV содержит изображения-ссылки на выполненные вами проекты. При клике по изображению страница проекта открывается в новой вкладке. У каждого проекта есть название, небольшое описание, указан перечень используемых технологий. %c+10",
  styles[1],
  styles[2]
);
console.log(
  "%c12. CV выполнено на английском языке. %c+10",
  styles[1],
  styles[2]
);
console.log(
  "%c13. Выполнены требования к Pull Request: есть ссылка на задание, скриншот страницы СV, ссылка на деплой страницы CV на GitHub Pages, выполнена самооценка (самооценка расписана по пунктам критериев оценки. Указан балл за каждый пункт). %c+10",
  styles[1],
  styles[2]
);
console.log(
  "%c14. Есть видеорезюме автора CV на английском языке. Видеорезюме встраивается в страницу CV как видео, а не в виде кнопки или ссылки. Продолжительность видео 3-5 минут (±15 секунд). В описание видео на YouTube добавлена ссылка на его транскрипцию на английском языке (например, в документе Google Docs). %c+10",
  styles[1],
  styles[2]
);
console.log(
  "%c15. Дизайн, оформление, качество выполнения CV не ниже чем в примерах CV, приведённых в материалах к заданию. %c+10",
  styles[1],
  styles[2]
);
console.log("%cИтого: 160/160", styles[0]);
console.log(
  "%cНадеюсь вам понравилось моё CV. Буду рад видеть ваши замечания и предложения по улучшению в дискорд BlackBerryID #3277. Хорошего дня!",
  styles[3]
);
