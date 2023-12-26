/**
 * Configuration Object for Element Looping
 *
 * This object is used to configure the looping of elements and their associated properties.
 *
 * Properties:
 * - data: Number of elements to loop through
 * - elementType: Type of element to be looped
 * - classes: CSS classes to apply to the looped element
 * - additionalElement: Additional element to include
 * - additionalClasses: CSS classes for the additional element
 * - elementContainerClasses: CSS classes for the container
 * - additionalInfo: Landing pages for elements
 * - additionalInfoDesc: Descriptions for each element
 * - additionalInfoIcons: Icons needed for each element
 * - additionalAttributesFor: 'for' attribute for label
 *
 * Child Elements (Optional):
 * - childElements: Include child elements for each looped element
 * - childElementType: Type of child element
 * - childElementClasses: CSS classes for child element
 * - childElementContent: Inner HTML content for child element
 * - childElementAttributes: Additional attributes for child element
 *   - href: Href attribute for links
 *   - src: Src attribute for images
 *   - alt: Alt attribute for images
 *   - id: ID attribute for child elements
 *   - rel: Rel attribute for links (e.g., 'noopener noreferrer')
 *   - target: Target attribute for links (e.g., '_blank')
 *   - value: Value attribute for input elements
 *   - placeholder: Placeholder attribute for input elements
 */

const elements = {
  navBarContainer: {
    data: Array(5).fill(""),
    elementType: "li",
    classes: "navLi wFull flex acc pointer hFull",
    childElements: [
      {
        elementType: "a",
        classes: "aNav wFull hFull flex acc jcc trans",
        content: [
          "😺 Yosef Yanushok",
          "🏠 Home",
          "📜 About",
          "🚀 Projects",
          "📞 Contact",
        ],
        attributes: {
          href: ["#", "#top", "#About", "#Projects", "#Contact"],
        },
      },
    ],
  },
  lines: {
    data: Array(7).fill(""),
    elementType: "div",
    classes: "line wFull hFull flex absolute pn",
  },
  solarSystem: {
    data: Array(7).fill(""),
    elementType: "div",
    classes: "planetContainer flex jcc acc",
    childElements: [{ elementType: "p", content: [], attributes: {} }],
  },
  spinningIcons: {
    data: Array(11).fill(""),
    elementType: "figure",
    classes: "iconArea absolute flex jcc acc trans",
    childElements: [
      { elementType: "img", attributes: { src: "", alt: '' } },
    ],
  },
  icons: {
    data: [
      "",
      "",
      "./Images/Icons/regularIcons/html.png",
      "./Images/Icons/regularIcons/css.png",
      "./Images/Icons/regularIcons/javascript.png",
      "./Images/Icons/regularIcons/bootstrap.png",
      "./Images/Icons/regularIcons/sass.png",
      "./Images/Icons/regularIcons/react2.png",
      "./Images/Icons/regularIcons/nodejs2.png",
      "./Images/Icons/regularIcons/mongoDB.png",
      "./Images/Icons/regularIcons/tailwind.png",
    ],
    elementType: "img",
    classes: "icon",
    attributes: {
      alt: "icon",
    },
  },
  folderContainer: {
    data: Array(2).fill(""),
    elementType: "div",
    classes: "folder bRadius flex jcc acc fldc trans pointer",
    childElements: [
      {
        elementType: "p",
        content: ["landingPages", "javaScript"],
        attributes: {},
      },
    ],
  },
  bootstrap: {
    data: Array(6).fill(""),
    elementType: "a",
    classes: "project bootstrapIcons flex jcc wFull hFull bRadius",
    additionalElement: "p",
    additionalClasses:
      "textCover absolute flex jcc acc wFull trans bRadius tShadow p2vmin",
    elementContainerClasses: "bothCard relative flex jcc acc trans pointer",
    additionalInfo: {
      landingPages: [
        "./Images/landingPages/previewPages/previewPage1.png",
        "./Images/landingPages/previewPages/previewPage2.png",
        "./Images/landingPages/previewPages/previewPage3.png",
        "./Images/landingPages/previewPages/previewPage4.png",
        "./Images/landingPages/previewPages/previewPage8.png",
        "./Images/landingPages/previewPages/previewPage9.png",
      ],
      desc: [
        "Build your career!",
        "Here & Now",
        "Coffee",
        "Lead you forward",
        "Discovering the world",
        "Free consultation",
        "Think outside of",
        "The sky is the limit",
        "Calm, steady",
      ],
      neededIcons: ["html", "css", "bootstrap"],
    },
  },
  bootstrapIcons: {
    data: Array(3).fill(""),
    elementType: "img",
    classes: "miniIcon",
    attributes: { src: Array(3).fill(""), alt: "icons" },
  },
  nonBootstrap: {
    data: Array(3).fill(""),
    elementType: "a",
    classes: "project nonIcons flex jcc wFull hFull bRadius fds",
    additionalElement: "p",
    additionalClasses:
      "textCover absolute flex jcc acc wFull trans bRadius tShadow p2vmin",
    elementContainerClasses: "bothCard relative flex jcc acc trans pointer",
    additionalInfo: {
      landingPages: [
        "./Images/landingPages/previewPages/previewPage5.png",
        "./Images/landingPages/previewPages/previewPage6.png",
        "./Images/landingPages/previewPages/previewPage7.png",
      ],
      desc: ["Discovering the world", "Free consultation", "Think outside of"],
      neededIcons: ["html", "css"],
    },
  },
  nonIcons: {
    data: Array(2).fill(""),
    elementType: "img",
    classes: "miniIcon",
    attributes: { src: ["", ""], alt: "icons" },
  },
  css: {
    data: Array(6).fill(""),
    elementType: "a",
    classes: "project cssIcons flex jcc wFull hFull bRadius",
    additionalElement: "p",
    additionalClasses:
      "textCover absolute flex jcc acc trans wFull bRadius tShadow p2vmin",
    elementContainerClasses: "bothCard relative flex jcc acc trans pointer",
    additionalInfo: {
      landingPages: [
        "./Images/javaScript/sumSphere.png",
        "./Images/javaScript/purrfectRecall.png",
        "./Images/javaScript/terraVista.png",
        "./Images/javaScript/weathere.png",
        "./Images/javaScript/mathPath.png",
        "./Images/javaScript/bingood.png",
      ],
      desc: [
        "SumSphere",
        "PurrfectRecall",
        "TerraVista",
        "Weathere!",
        "MathPath",
        "Bingood",
      ],
      neededIcons: ["html", "css", "javascript", "tailwind"],
    },
  },
  cssIcons: {
    data: Array(4).fill(""),
    elementType: "img",
    classes: "miniIcon",
    attributes: {
      src: [
        "../Images/Icons/regularIcons/html.png",
        "../Images/Icons/regularIcons/css.png",
        "../Images/Icons/regularIcons/javascript.png",
        "../Images/Icons/regularIcons/tailwind.png",
      ],
      alt: "icons",
    },
  },
  nonCss: {
    data: Array(3).fill(""),
    elementType: "a",
    classes: "project nonCssIcons flex jcc wFull hFull bRadius",
    additionalElement: "p",
    additionalClasses:
      "textCover absolute flex jcc acc trans wFull bRadius tShadow p2vmin",
    elementContainerClasses: "bothCard relative flex jcc acc trans pointer",
    additionalInfo: {
      landingPages: [
        "./Images/javaScript/squareTask.png",
        "./Images/javaScript/ticTxcToe.png",
        "./Images/javaScript/calendary.png",
      ],
      desc: ["SquareTask", "TicTxcToe", "Calendary"],
      neededIcons: ["html", "javascript", "tailwind"],
    },
  },
  nonCssIcons: {
    data: Array(3).fill(""),
    elementType: "img",
    classes: "miniIcon",
    attributes: {
      src: [
        "../Images/Icons/regularIcons/html.png",
        "../Images/Icons/regularIcons/css.png",
        "../Images/Icons/regularIcons/javascript.png",
        "../Images/Icons/regularIcons/tailwind.png",
      ],
      alt: "icons",
    },
  },
  planetContainer: {
    data: Array(1).fill(""),
    elementType: "div",
    classes: "planet wFull hFull trans bRadius flex jcc acc",
    additionalElement: "form",
    additionalInfo: {
      desc: ["Name", "Phone", "Email", "Message"],
    },
    elementContainerClasses: "part wFull hFull flex acc fldc",
    additionalClasses: "flex acc jcc bRadius fds",
    additionalAttributes: {
      id: ["second"],
      method: ["#"],
    },
    attributes: {
      id: ["first"],
    },
  },
  second: {
    data: Array(5)
      .fill("")
      .map((_, i) =>
        i == 3
          ? `<textarea class="p2vmin trans" placeholder="Leave a message..." required></textarea>`
          : ""
      ),
    elementType: "input",
    classes: "theInput p2vmin bRadius trans",
    attributes: {
      id: ["Name", "Phone", "Email", "", "Submit"],
      type: ["text", "text", "text", "", "submit"],
      value: Array(5)
        .fill("")
        .map((_, i) => (i == 4 ? "Send" : "")),
      placeholder: [
        "Write your name...",
        "Write your phone...",
        "Write your email...",
        "",
        "",
      ],
      required: Array(4).fill(true),
    },
    additionalElement: "label",
    additionalClasses: "theLabel",
    additionalInfo: {
      desc: ["Name", "Phone", "Email", "Message", " "],
    },
    additionalAttributes: {
      for: ["Name", "Phone", "Email", "Message", ""],
    },
    elementContainerClasses: "inputArea wFull flex jcc acc",
  },
  hamburgerMenu: {
    data: Array(3).fill(""),
    elementType: "div",
    classes: "line",
  },
  iconList: {
    data: Array(1).fill(""),
    elementType: "li",
    classes: "liIconList flex jcc wFull",
  },
  liIconList: {
    data: Array(3).fill(""),
    elementType: "a",
    classes: "aIcons flex",
    additionalInfo: {
      landingPages: [
        "./Images/Icons/svgs/attherate-icon.svg",
        "./Images/Icons/svgs/linkedin-icon.svg",
        "./Images/Icons/svgs/github-icon.svg",
      ],
    },
    attributes: {
      href: [
        "mailto:yosefully@gmail.com",
        "https://www.linkedin.com/in/yosef-yan-023225295",
        "https://github.com/yosefyan",
      ],
      rel: Array(1).fill("noopener noreferrer"),
      target: Array(3).fill("_blank"),
    },
  },
  button: {
    data: Array(2).fill(""),
    elementType: "a",
    attributes: {
      href: "#",
      rel: "noopener noreferrer",
      id: ["preview", "download"],
      target: ["_blank", null],
    },
    elementContent: ["👀 Preview", "🔗 DOWNLOAD"],
    classes: "button1 trans pointer bRadius relative flex jcc acc",
  },
};

function loopItems(listName, containerSelector) {
  const elementsList = elements[listName];
  const elementsInContainer = document.querySelectorAll(containerSelector);

  elementsInContainer.forEach((element, ind) => {
    const listInfo = elementsList;
    const originalArray = listInfo.data;
    const html = originalArray
      .map((item, i) => {
        const {
          elementType = "",
          elementContent = "",
          attributes = {},
          classes = "",
          additionalElement = "",
          additionalAttributes = "",
          elementContainerClasses = "",
          additionalClasses = "",
          additionalInfo = [],
          childElements = [],
        } = listInfo;
        function filterIcons(container, icons) {
          if (elementType == "img" && listInfo.classes == "miniIcon") {
            elements[icons].attributes.src[i] = elements.icons.data.filter(
              (da) => {
                return da.includes(
                  elements[container].additionalInfo.neededIcons[i]
                );
              }
            );
          } else {
            attributes.src = elements.icons.data[i];
          }
        }
        filterIcons("bootstrap", "bootstrapIcons");
        filterIcons("nonBootstrap", "nonIcons");
        filterIcons("css", "cssIcons");
        filterIcons("nonCss", "nonCssIcons");
        const attributesStr = Object.entries(attributes)
          .map(([key, value]) => {
            const shouldIncludeIndex = [
              "miniIcon",
              "planet",
              "theInput",
              "aIcons",
              "project",
              "button1",
            ].some((className) => listInfo.classes.includes(className));

            return `${key}="${
              shouldIncludeIndex && !value.includes("noopener")
                ? value[i]
                : value
            }"`;
          })
          .join(" ");

        const attributesAdd = Object.entries(additionalAttributes)
          .map(([key, value]) => {
            return `${key}="${value[i]}"`;
          })
          .join(" ");

        const childElementsStr = childElements
          .map((child) => {
            if (child.attributes) {
              const specificIcons = Object.entries(child.attributes)
                .map(([key, value]) =>
                  element.classList.contains("spinningIcons")
                    ? `${key}="${elements.icons.data[i]}"`
                    : `${key}="${value[ind]}"`
                )
                .join(" ");
              if (
                child.elementType == "img" ||
                child.elementType == "figcaption"
              ) {
                return `<${child.elementType} ${specificIcons}></${child.elementType}>`;
              }

              const attributesChild = Object.entries(child.attributes)
                .map(([key, value]) => `${key}=${value[i]}`)
                .join("");

              return `<${child.elementType} ${attributesChild} ${
                child.classes ? `class="${child.classes}"` : ""
              }>${child.content[i] || ""}</${child.elementType}>
                `;
            }
          })
          .join("");

        return `${
          additionalElement ? `<div class="${elementContainerClasses}">` : ""
        }<${elementType} ${attributesStr} class="${classes}" ${
          additionalInfo.landingPages !== undefined
            ? `style="background-image:url(${additionalInfo.landingPages[i]})"`
            : ""
        }>${elementContent ? elementContent[i] : ""} ${
          elementType != "img" ? item : ""
        }${childElementsStr}</${elementType}>${
          additionalElement
            ? `<${additionalElement} class
            ="${additionalClasses}" ${attributesAdd}>${
                additionalInfo.desc[i] || additionalInfo.for[i]
              }</${additionalElement}>`
            : ""
        }${additionalElement ? "</div>" : ""}`;
      })
      .join("");

    element.innerHTML = html;
  });
}
const severalElements = [
  "bootstrapIcons",
  "nonIcons",
  "cssIcons",
  "nonCssIcons",
  "aNav",
  "liIconList",
  "icons",
];

//Grabbing the keys of the object as either a class or id, based on the variable severalElemenmts
for (const listName in elements) {
  const matchingSelectors = severalElements.map((several) => {
    return listName.includes(several) ? `.${listName}` : `#${listName}`;
  });

  matchingSelectors.forEach((selector) => loopItems(listName, selector));
}
