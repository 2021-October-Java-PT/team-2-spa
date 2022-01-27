import About from "./components/About";
import Contact from "./components/Contact";

const app = document.querySelector("#app");

pageStart();

function pageStart() {
  about();
  contact();
}

function about() {
  const aboutElem = document.querySelector();
  aboutElem.addEventListener("click", () => {
    app.innerHTML = About();
  });
}

function navContact() {
  const contactElem = document.querySelector();
  contactElem.addEventListener("click", () => {
    app.innerHTML = Contact();
  });
}
