import loadHome from "./home";
import loadMenu from "./menu";
import loadContact from "./contact";

const tabs = { home: loadHome, menu: loadMenu, contact: loadContact };

document.querySelectorAll("nav button").forEach((button) => {
  button.addEventListener("click", () => {
    const content = document.getElementById("content");
    content.innerHTML = "";
    tabs[button.dataset.tab]();
  });
});

loadHome();