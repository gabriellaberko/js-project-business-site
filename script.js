/*
Include a responsive hamburger menu that's visible on smaller screens but hidden on bigger screens.
When you click, all links in your navbar become visible, and when you click again, they are hidden

- What will your menu items look like?
- What should happen when you click the hamburger icon?
- How will you show and hide the menu?
*/


/* create variables for hamburger menu icon and nav links */ 
const hamburgerIcon = document.getElementById("icon")

const navLinks = document.getElementById("links")

/* display nav links when hamburger menu icon is clicked */ 
hamburgerIcon.onclick = () => {
   navLinks.style.display = "block";
}

/* TO-DO: hide the nav links again when links have been clicked (but only for mobile) or when you click on icon again */