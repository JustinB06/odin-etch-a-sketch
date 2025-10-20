/* Get DOM object references */
let containerRef = document.querySelector("#container");

/* Create a 16x16 grid of square divs */
for (let i = 0; i < 16; i++) {
  /* We put every row of divs into its own flexbox 
    container, which will allow them to expand 
    horizontally properly */
  let rowContainerDiv = document.createElement("div");
  rowContainerDiv.style["display"] = "flex";

  /* Create each square of the current row */
  for (let j = 0; j < 16; j++) {
    let squareDiv = document.createElement("div");

    squareDiv.classList.add("square");
    squareDiv.addEventListener("mouseover", hover);

    rowContainerDiv.appendChild(squareDiv);
  }

  containerRef.appendChild(rowContainerDiv);
}

function hover(event) {
  event.target.style["background-color"] = "green";
}
