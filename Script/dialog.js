const project = document.querySelectorAll(".project");
const dialog = document.querySelector("#dialog");

const closeDialog = document.querySelector("#closeDialog");
const spaceshipBG = document.querySelector("#spaceshipBG");

const projTitle = document.querySelector("#projTitle");
const projDesc = document.querySelector("#projDesc");

const preview = document.querySelector("#preview");
const download = document.querySelector("#download");
const theIcons = document.querySelector("#theIcons");
download.setAttribute("download", "");

/**
 * Project Data Object
 *
 * This object stores data related to various projects, including their descriptions and download links. The projects are categorized into "landingPages" and "javaScript" sections.
 *
 * Data Structure:
 * - The data object is structured as follows:
 *   - "landingPages": An object containing data for landing page projects.
 *   - "comingSoon": An object containing data for upcoming projects.
 *   - Each project is identified by a numeric key and contains the following properties:
 *     - "subTitle": A brief description of the project.
 *     - "href": The link to the project's HTML page.
 *     - "dHref": The link to download the project's ZIP archive.
 *
 * Example Usage:
 * - To access the subTitle of the first landing page project:
 *   data.landingPages[1].subTitle
 *
 */
const data = {
  landingPages: {
    1: {
      subTitle: "This project was focused on building your path of success.",
      href: "./Projects/landingPages/langindPages/landingPage1/landingPage1.html",
      dHref: "./Projects/landingPages/landingPage1/landingPage1.zip",
    },
    2: {
      subTitle: "This project invites you to obtain any rewards.",
      href: "./Projects/landingPages/landingPage2/landingPage2.html",
      dHref: "./Projects/landingPages/landingPage2/landingPage2.zip",
    },
    3: {
      subTitle:
        "This project offers you a free coffee by submitting a brief form.",
      href: "./Projects/landingPages/landingPage3/landingPage3.html",
      dHref: "./Projects/landingPages/landingPage3/landingPage3.zip",
    },
    4: {
      subTitle: "This project emphasizes their way of leading you forward.",
      href: "./Projects/landingPages/landingPage4/landingPage4.html",
      dHref: "./Projects/landingPages/landingPage4/landingPage4.zip",
    },
    5: {
      subTitle:
        "This project offers you a free ticket by submitting a brief form.",
      href: "./Projects/landingPages/landingPage8/landingPage8.html",
      dHref: "./Projects/landingPages/landingPage8/landingPage8.zip",
    },
    6: {
      subTitle: "This project provides you a full guidelines of calmness.",
      href: "./Projects/landingPages/landingPage9/landingPage9.html",
      dHref: "./Projects/landingPages/landingPage9/landingPage9.zip",
    },
    7: {
      subTitle: "This project brings you the scent of the world.",
      href: "./Projects/landingPages/landingPage5/landingPage5.html",
      dHref: "./Projects/landingPages/landingPage5/landingPage5.zip",
    },
    8: {
      subTitle: "This project gives you a free consultation.",
      href: "./Projects/landingPages/landingPage6/landingPage6.html",
      dHref: "./Projects/landingPages/landingPage6/landingPage6.zip",
    },
    9: {
      subTitle: "This project makes you think outside the box.",
      href: "./Projects/landingPages/landingPage7/landingPage7.html",
      dHref: "./Projects/landingPages/landingPage7/landingPage7.zip",
    },
  },
  javaScript: {
    10: {
      subTitle:
        "Sumsphere is a versatile calculator web app with a soft and visually pleasing design, providing real-time calculation of mathematical expressions for efficient and enjoyable use.",
      href: "https://yosefyan.github.io/SumSphere",
      dHref: "./Projects/javaScriptZips/SumSphere.zip",
    },
    11: {
      subTitle:
        "PurrfectRecall is a memory game featuring adorable cat-themed cards, offering an entertaining experience of matching pairs while enjoying random cat photos.",
      href: "https://yosefyan.github.io/PurrfectRecall",
      dHref: "./Projects/javaScriptZips/PurrfectRecall.zip",
    },
    12: {
      subTitle:
        "TerraVista is an informative web application that utilizes an existing API to showcase detailed information about global capital cities, providing users with an engaging exploration experience.",
      href: "https://yosefyan.github.io/TerraVista",
      dHref: "./Projects/javaScriptZips/TerraVista.zip",
    },
    13: {
      subTitle:
        "Weathere! is a dynamic weather app that offers real-time updates from a weather API, featuring a visually engaging interface with color changes based on the time of day and night, ensuring users stay informed about city weather details.",
      href: "https://yosefyan.github.io/Weathere",
      dHref: "./Projects/javaScriptZips/Weathere.zip",
    },
    14: {
      subTitle:
        "MathPath is a challenging brain-training game where players solve random mathematical expressions, strategically selecting numbers to progress, adding a unique twist by limiting the reuse of chosen numbers.",
      href: "https://yosefyan.github.io/MathPath",
      dHref: "./Projects/javaScriptZips/MathPath.zip",
    },
    15: {
      subTitle:
        "Bingood is a customizable bingo game that allows players to set the number of players and table size, offering a versatile and entertaining gaming experience.",
      href: "https://yosefyan.github.io/Bingood",
      dHref: "./Projects/javaScriptZips/Bingood.zip",
    },
    16: {
      subTitle:
        "SquareTask is a user-friendly to-do list web application, allowing seamless task management with features like task addition, editing, moving to a completed area, and easy removal.",
      href: "https://yosefyan.github.io/SquareTask",
      dHref: "./Projects/javaScriptZips/SquareTask.zip",
    },
    17: {
      subTitle:
        "TicTxcToe transforms the classic Tic-Tac-Toe game into a visually dazzling experience with neon lights decoration, offering endless entertainment with the ability to go back home and restart.",
      href: "https://yosefyan.github.io/TicTxcToe",
      dHref: "./Projects/javaScriptZips/TicTxcToe.zip",
    },
    18: {
      subTitle:
        "Calendary is an interactive calendar application that allows users to navigate through months, add and remove events, and seamlessly switch between monthly views with arrow buttons.",
      href: "https://yosefyan.github.io/Calendary",
      dHref: "./Projects/javaScriptZips/Calendary.zip",
    },
  },
};

/**
 * Project Click Event Handler and Dialog Controller
 *
 * This code sets up click event handlers for project elements and manages the display of a dialog box with project details. When a project is clicked, it updates the dialog with relevant information and displays it. The dialog can be closed by clicking the close button.
 *
 * Usage:
 * - Clicking on a project element triggers the dialog to display project details.
 * - The dialog contains project title, description, and links.
 * - Closing the dialog restores the page's appearance.
 *
 * Functionality:
 * - Clicking on a project:
 *   - Clears theIcons content.
 *   - Updates cursor and overflow style for the body.
 *   - Shows the dialog and sets the background image.
 *   - Calls 'keyValues' function to update dialog content and links.
 *
 * - Closing the dialog:
 *   - Closes the dialog, hides it, and restores cursor and overflow style.
 *
 * project - An array of project elements to attach click event handlers.
 *  dialog - The dialog element containing project details.
 *  theIcons - The container element for project icons.
 *  projTitle - The element for the project title.
 *  projDesc - The element for the project description.
 *  preview - The element for the preview link.
 *  download - The element for the download link.
 *  data - Data containing project details.
 */

project.forEach((proj, i) => {
  proj.addEventListener("click", () => {
    const selected = document.querySelector(".selected");
    const { subTitle, href, dHref } = data[selected.children[0].innerHTML][i];

    theIcons.innerHTML = "";

    [...proj.children].forEach((img) =>
      theIcons.appendChild(img.cloneNode(true))
    );

    document.body.style.cssText = "cursor: initial; overflow-Y: hidden";

    dialog.classList.remove("o0");
    dialog.showModal();

    spaceshipBG.style.backgroundImage = proj.style.backgroundImage;

    function keyValues(element, value, attributeElement, attributeValue) {
      element.innerHTML = value;
      attributeElement.href = attributeValue;
    }

    keyValues(projTitle, proj.nextElementSibling.innerHTML, preview, href);
    keyValues(projDesc, subTitle, download, dHref);
  });
});

closeDialog.addEventListener("click", () => {
  dialog.close();
  dialog.classList.add("o0");
  document.body.style.cssText = "cursor: none; overflow-Y: scroll";
});
