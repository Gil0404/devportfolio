const menuNav = () => {
  const navbarmenu = document.getElementById("navbarmenu");
  const burgerbuttton = document.getElementById("burgermenu");
  const closeburgerbutton = document.getElementById("closemenu");

  const toggleMenu = () => {
    navbarmenu.classList.toggle("sm:flex");
    navbarmenu.classList.toggle("xsm:flex");
    closeburgerbutton.classList.toggle("sm:flex");
    closeburgerbutton.classList.toggle("xsm:flex");
    burgerbuttton.classList.toggle("sm:hidden");
    burgerbuttton.classList.toggle("xsm:hidden");
  };
  burgerbuttton.addEventListener("click", toggleMenu);
  closeburgerbutton.addEventListener("click", toggleMenu);
};
document.addEventListener("DOMContentLoaded", menuNav);
