import "./style.css";

console.log("General Kenobi!");

document.getElementById("menu-button").addEventListener("click", () => {
  const menu = document.getElementById("nav-menu");
  menu.classList.toggle("hidden");
});
