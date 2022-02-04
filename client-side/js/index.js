import about from "./Components/About";
import contact from "./Components/Contact";
import header from "./Components/Header";
import footer from "./Components/Footer";
import home from "./Components/home";
import NinjaTurtles from "./Components/NinjaTurtles";
import Art from "./Components/Art";
import apiHelpers from "./apiHelpers";

const app = document.querySelector("#app");

pageStart();

function pageStart() {
  about();
  contact();
  header();
  footer();
  home();
}

function header(){
  const headerElem = document.querySelector('.header');
  headerElem.innerHTML = header();
}

function footer(){
  const footerElem = document.querySelector('.footer');
  footerElem.innerHTML = footer();
}

function about() {
  const aboutElem = document.querySelector('.nav-list__aboutUs');
  aboutElem.addEventListener("click", () => {
    const app = document.querySelector('#app');
    app.innerHTML = about();
  });
}

function contact() {
  const contactElem = document.querySelector('.nav-list__contact');
  contactElem.addEventListener("click", () => {
    const app = document.querySelector('#app');
    app.innerHTML = contact();
  });
}

function home() {
  const homeElem = document.querySelector('.nav-list__home');
  homeElem.addEventListener('click', ()=> {
    const app = document.querySelector('#app');
    app.innerHTML = home();
  })

  
}