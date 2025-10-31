const DEFAULT_GRID_SIZE = 16;

createGrid(DEFAULT_GRID_SIZE);

promptUser();

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
      squareDiv.addEventListener("mouseover", hoverHandler);

      rowContainerDiv.appendChild(squareDiv);
    }

    containerRef.appendChild(rowContainerDiv);
  }
}

function promptUser() {
  let buttonRef = document.querySelector("#grid-size-button");
  buttonRef.addEventListener("click", buttonClickHandler);
}

function hoverHandler(event) {
  event.target.style["background-color"] = "green";
}

function buttonClickHandler(event) {
  const promptForUser =
    "Grid Creation:\nEnter the number of squares per side.\nMaximum size = 100";
  let newGridSize = prompt(promptForUser, "100");

  createGrid(newGridSize);
}
