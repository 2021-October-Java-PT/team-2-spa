import about from "./Components/About";
import contact from "./Components/Contact";
import Header from "./Components/Header";
import header from "./Components/Header";
import footer from "./Components/Footer";

const app = document.querySelector("#app");

pageStart();

function pageStart() {
  about();
  contact();
  header();
  footer();

}

function header(){
  const headerElem = document.querySelector('.header');
  headerElem.innerHTML = Header();
}

function footer(){
  const footerElem = document.querySelector('.footer');
  footerElem.innerHTML = Feader();
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
