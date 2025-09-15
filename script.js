const hamburgerIcon = document.getElementById("hamburgerIcon")
const crossIcon = document.getElementById("crossIcon")
const navBar = document.getElementById("nav")
const menuIcon = document.getElementById("menuIcon")
const navLinks = document.getElementById("links");

function expandCollapseHamburgerMenu() {
  if (navLinks.style.display === "block") {
    navLinks.style.display = "none";
    navBar.style.backgroundColor = "transparent";
  } else {
    navLinks.style.display = "block";
    navBar.style.backgroundColor = "#eeeeee21"; 
  }
}

/* add/remove the CSS for the class hidden (which is display: none) to the different menu icons */
function changeMenuIcon() {
  hamburgerIcon.classList.toggle("hidden");
  crossIcon.classList.toggle("hidden");
}

menuIcon.onclick = () => {
  expandCollapseHamburgerMenu();
  changeMenuIcon();
}


