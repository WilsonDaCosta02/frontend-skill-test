const header = document.querySelector(".header");
const menuButton = document.querySelector(".mobile-menu-button");
const closeButton = document.querySelector(".mobile-close-button");

menuButton.addEventListener("click", () => {
  header.classList.add("menu-open");
});

closeButton.addEventListener("click", () => {
  header.classList.remove("menu-open");
});

document.querySelectorAll(".main-navigation a").forEach((link) => {
  link.addEventListener("click", () => {
    header.classList.remove("menu-open");
  });
});