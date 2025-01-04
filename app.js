const menuMobile = document.querySelector("#menu-mobile");
const sidebar = document.querySelector(".sidebar");

const sidebarClose = document.querySelector("#sidebar-close");

const blackScreen = document.querySelector(".blackscreen");

menuMobile.addEventListener("click", (e) => {
  e.preventDefault();
  sidebar.style.display = "flex";
  blackScreen.style.opacity = "1";
  blackScreen.style.visibility = "visible";
  blackScreen.style.pointerEvents = "auto";
});
sidebarClose.addEventListener("click", (e) => {
  e.preventDefault();
  sidebar.style.display = "none";
  blackScreen.style.opacity = "0";
  blackScreen.style.visibility = "hidden";
  blackScreen.style.pointerEvents = "none";
});
