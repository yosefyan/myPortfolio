const navLis = document.querySelectorAll(".navLi");
const line = document.getElementById("line");

/**
 * Navbar Events Listener
 *
 * This function attaches event listeners to navigation list items (navLis) and responds to specified events (click, mouseover, and mouseout) to create interactive navbar effects. It modifies the appearance of a line element to indicate the selected item.
 *
 *  listener - The type of event to listen for ("click", "mouseover" or "mouseout").
 *
 * Listener Functionality:
 * - "click": Adds a border to the selected item and moves the line below it.
 * - "mouseover": Highlights the item with a temporary background color.
 * - "mouseout": Removes the temporary background color when the mouse exits the item.
 *
 *  navLis - The collection of navigation list items to attach the listener to.
 *  line - The line element used for visual effects.
 */
function navBarEvents(listener) {
  [...navLis].forEach((nav) => {
    nav.addEventListener(listener, (n) => {
      const linesStyle = line.style;
      const { x, width } = n.target.getBoundingClientRect();
      listener == "mouseout"
        ? (linesStyle.opacity = 0)
        : (linesStyle.cssText = `cursor: pointer; transform: translateX(${x}px); opacity: 1; width: ${width}px; border: 2px solid ${
            listener == "mouseover" ? "#d3d3d32e" : "#fad37196"
          }`);
    });
  });
}
navBarEvents("click");
navBarEvents("mouseover");
navBarEvents("mouseout");
