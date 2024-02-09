const folder = document.querySelectorAll(".folder");
const pages = document.getElementById("pages");
const projectsList = ["landingPages", "jsProjects", "reactProjects"];
const homeButton = document.getElementById("homeButton");

//default class, starts with 'selected'
folder[0].classList.add("selected");

/**
 * Tablet Effects Listener
 *
 * This listener is responsible for applying tablet effects, including toggling the "selected" class on folders and interacting with files inside the PC. It also toggles the "o0" class on pages to control their visibility.
 *
 * Listener Functionality:
 * - When a folder is clicked, it toggles the "selected" class on the clicked folder.
 * - It adds the "o0" class to all pages within the PC.
 * - It removes the "o0" class from the page corresponding to the clicked folder after a delay.
 * - It removes the "selected" class from all folders to ensure only the clicked folder is marked as selected.
 *
 **/
folder.forEach((fold, index) => {
  fold.addEventListener("click", () => {
    const pagesChildren = pages.children;

    for (let i = 0; i < pagesChildren.length; i++) {
      pagesChildren[i].classList.add("o0");
      if (projectsList[index] == pagesChildren[i].id) {
        setTimeout(() => {
          pagesChildren[i].classList.remove("o0");
        }, 500);
      }
    }

    folder.forEach((fold) => {
      fold.classList.remove("selected");
    });
    fold.classList.add("selected");
  });
});
