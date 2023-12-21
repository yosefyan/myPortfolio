const hamburgerMenu = document.getElementById("hamburgerMenu");
const navBarContainer = document.getElementById("navBarContainer");

/**
 * Toggle Navigation Bar on Hamburger Menu Click
 *
 * This code attaches a click event listener to the hamburgerMenu element and toggles the "active" class on the navBarContainer when the hamburger menu is clicked.
 *
 *  hamburgerMenu - The element representing the hamburger menu icon.
 *  navBarContainer - The element representing the navigation bar container that toggles visibility.
 */
hamburgerMenu.addEventListener("click", () =>
  navBarContainer.classList.toggle("active")
);
