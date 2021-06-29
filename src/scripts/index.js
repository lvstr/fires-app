import "regenerator-runtime";
import "../styles/main.css";
import "../styles/menu.css";
import "./views/index";
import "css-skeletons";
import "../styles/fontawesome/css/font-awesome.min.css";
import swRegister from "./utils/sw-register";

import App from "./views/app";

const app = new App({
  button: document.querySelector(".menu-toggle"),
  drawer: document.querySelector(".nav"),
  content: document.querySelector(".app"),
});

window.addEventListener("hashchange", () => {
  app.renderPage();
});

window.addEventListener("load", () => {
  app.renderPage();
});

const links = document.querySelectorAll("hero-section a, footer-section a");

for (const link of links) {
  link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;

  scroll({
    top: offsetTop,
    behavior: "smooth",
  });
}

swRegister();
