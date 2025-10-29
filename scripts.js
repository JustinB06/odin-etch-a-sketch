const DEFAULT_GRID_SIZE = 16;

createGrid(DEFAULT_GRID_SIZE);

function createGrid(size) {
  /* Get DOM object references */
  let containerRef = document.querySelector("#container");

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
      squareDiv.addEventListener("mouseover", hover);

      rowContainerDiv.appendChild(squareDiv);
    }

    containerRef.appendChild(rowContainerDiv);
  }
}

function hover(event) {
  event.target.style["background-color"] = "green";
}
