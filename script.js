/*
Include a responsive hamburger menu that's visible on smaller screens but hidden on bigger screens.
When you click, all links in your navbar become visible, and when you click again, they are hidden

- What will your menu items look like?
- What should happen when you click the hamburger icon?
- How will you show and hide the menu?
*/


/* create variable for hamburger menu icon and nav links */ 
const hamburgerIcon = document.getElementById("hamburgerIcon")
const crossIcon = document.getElementById("crossIcon")
const navBar = document.getElementById("nav")
const menuIcon = document.getElementById("menuIcon")
const navLinks = document.getElementById("links");



function expandCollapseHamburgerMenu() {
  if (navLinks.style.display === "block") {
    navLinks.style.display = "none";
  } else {
    navLinks.style.display = "block";
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


