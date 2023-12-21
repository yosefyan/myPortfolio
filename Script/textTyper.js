/**
 * Typewriter Text Animation
 *
 * This code creates a typewriter effect to animate text changes on an HTML element with the id "changeText." It iterates through an array of words and displays each word character by character, simulating typing and backspacing effects.
 *
 * How I made it work?
 * - The HTML element with id "changeText" is used to display the animated text.
 * - Modify the 'words' array to include the text you want to display in the animation.
 * - The animation loops through the 'words' array and types each word character by character.
 * - After displaying all words, the animation starts over.
 *
 * Variables I used:
 * - changeText: The HTML element to display the animated text.
 * - words: An array of words or phrases to be displayed in the animation.
 * - i: Index of the current word in the 'words' array.
 * - j: Index of the character within the current word.
 * - deleteMode: Indicates whether the animation is in delete (backspace) mode.
 *
 * Function:
 * - typeWriter: The main animation function responsible for typing and backspacing.
 *   - It sets the 'deleteMode' when the end of a word is reached.
 *   - It uses setTimeout for timing to control typing and backspacing speed.
 *   - The text is updated on the 'changeText' element to display the animation.
 *
 * Note:
 * - The animation runs indefinitely, cycling through the 'words' array.
 * - You can adjust the timing and delete mode speed by modifying the setTimeout values.
 */
const changeText = document.getElementById("changeText");

const words = [
  "The Cosmos.",
  "Creativity.",
  "Insights.",
  "Global Challenges.",
  "Perspectives.",
  "The Spirit Of Innovation Itself.",
];

let i = 0;

let j = 0;

let deleteMode = false;

const typeWriter = () => {
  //if we went to the end of the sentence + not deleting
  if (!deleteMode && j == words[i].length) {
    deleteMode = true;
    j--;
  }
  // to determine the velocity of typing/removing
  setTimeout(typeWriter, deleteMode ? 70 : 300);

  // if its not deleting and it didnt finish
  if (!deleteMode && j < words[i].length) {
    changeText.innerHTML = words[i].slice(0, j + 1);
    j++;
    // if its in deleting mode
  } else if (deleteMode && j >= 0) {
    changeText.innerHTML = words[i].slice(0, j);
    j--;
  } else {
    i++;
    // area of exisiting words
    if (i < words.length) {
      deleteMode = false;
      j = 0;
    }
    // area of non-existing words
    else {
      i = -1;
    }
  }
};

typeWriter();
