/**
 * Custom Cursor and Hover Effects
 *
 * This code implements a custom cursor that follows the user's mouse movements and provides mouseover and mouseout effects for specified HTML elements.
 *
 * Cursor Functionality:
 * - The cursor is represented by an element with the id "cursor."
 * - It follows the user's mouse movements and updates its position accordingly.
 *
 * Hover Effects Functionality:
 * - The 'hoverEffects' function adds mouseover and mouseout effects to specified HTML elements.
 * - Elements matching the provided selectors will trigger the cursor effects.
 * - On mouseover, the cursor is scaled down and a drop-shadow effect is applied.
 * - On mouseout, the cursor is restored to its default size and appearance.
 *
 * How I made it work?
 * - Included an HTML element with the id "cursor" to represent the custom cursor.
 * - Called the 'hoverEffects' function with an array of CSS selectors for elements that should trigger the cursor effects on mouseover and mouseout.
 *
 * Variables:
 * - cursor: The HTML element representing the custom cursor.
 *
 * Event Listeners:
 * - 'mousemove': Updates the cursor's position based on the user's mouse movements.
 *
 * arr - An array of CSS selectors for elements to apply hover effects to.
 */

const cursor = document.querySelector("#cursor");

window.addEventListener("mousemove", (e) => {
  const cursorSize = 50;
  const cursorX = e.clientX - cursorSize / 2;
  const cursorY = e.clientY - cursorSize / 2;
  cursor.style.left = cursorX + "px";
  cursor.style.top = cursorY + "px";
});

function hoverEffects(arr) {
  arr.forEach((a) => {
    const elements = document.querySelectorAll(a);
    elements.forEach((e) => {
      e.addEventListener("mouseover", () => {
        cursor.style.cssText =
          "filter: drop-shadow(0 0 1rem orange); scale: .5";
      });
      e.addEventListener("mouseout", () => {
        cursor.style.cssText = "filter: drop-shadow(0 0 0 orange); scale: 1";
      });
    });
  });
}

hoverEffects(["input", "a", "textarea", ".folder", "button"]);