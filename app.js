const toggleLinks = document.querySelectorAll(".toggle-links");
const openMenu = document.querySelector(".toggle-menu .open");
const closeMenu = document.querySelector(".toggle-menu .close");
const toggleMenu = document.querySelector(".toggle-menu");
const links = document.querySelector(".nav .links");

toggleLinks.forEach((btn) => {
  btn.addEventListener("click", () => {
    toggleLinks.forEach((btn) => {
      btn.classList.remove("active");
    });
    btn.classList.add("active");
  });
});

openMenu.addEventListener("click", () => {
  toggleMenu.classList.add("active");
  links.classList.add("active");
});

closeMenu.addEventListener("click", () => {
  toggleMenu.classList.remove("active");
  links.classList.remove("active");
});
