const DEFAULT_GRID_SIZE = 16;

createGrid(DEFAULT_GRID_SIZE);

setupUserPromptButton();

function createGrid(size) {
  /* Get DOM object references */
  let containerRef = document.querySelector("#grid-container");

  /* Clear all children of the container div, just
    in case a grid already exists */
  containerRef.replaceChildren();

  /* Create a 16x16 grid of square divs */
  for (let i = 0; i < size; i++) {
    /* We put every row of divs into its own flexbox 
    container, which will allow them to expand 
    horizontally properly */
    let rowContainerDiv = document.createElement("div");
    rowContainerDiv.classList.add("row");

    /* Create each square of the current row */
    for (let j = 0; j < size; j++) {
      let squareDiv = document.createElement("div");

      squareDiv.classList.add("square");
      squareDiv.addEventListener("mouseover", mouseHoverHandler);

      rowContainerDiv.appendChild(squareDiv);
    }

    containerRef.appendChild(rowContainerDiv);
  }
}

function setupUserPromptButton() {
  let buttonRef = document.querySelector("#grid-size-button");
  buttonRef.addEventListener("click", userPromptButtonClickHandler);
}

function mouseHoverHandler(event) {
  backgroundColorRandomizer(event);

  opacityDecreaser(event);
  console.log(event.target.style.opacity);
}

function userPromptButtonClickHandler() {
  const promptForUser =
    "Grid Creation:\nEnter the number of squares per side.\nMaximum size = 100";
  let newGridSize = prompt(promptForUser, "100");

  createGrid(newGridSize);
}

function backgroundColorRandomizer(event) {
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);

  event.target.style["background-color"] = `rgb(${r}, ${g}, ${b})`;

  /* Q: Why is this neccesary when we can just 
    specify "opacity:1" as a css rule for .square
    in styles.css?
  
    A: I believe that, when we use 
    "event.target.style", we're interacting with 
    an HTML element's style property. This involves
    inline styling. 
    
    Therefore, when we use "currentOpacity = 
    event.target.style.opacity;" in function
    opacityDecreaser(), we're retrieving inline
    style values. If we don't set the inline 
    style value for opacity ourselves, we won't 
    find a value later at all. Thus, we must
    first set an inline style opacity value.*/
  if (event.target.style["opacity"] === "") {
    event.target.style["opacity"] = "1";
  }
}

function opacityDecreaser(event) {
  /* Decrease the square's opacity by 10% */
  let currentOpacity = event.target.style.opacity;
  event.target.style.opacity = `${Number(currentOpacity) - 0.1}`;
}
