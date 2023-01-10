let menuIcon = document.querySelector(".menu-icon");
let sidebar = document.querySelector(".sidebar");

menuIcon.onclick = function () {
  sidebar.classList.toggle("small-sidebar");
};
