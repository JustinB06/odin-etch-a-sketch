/* Get DOM object references */
let containerRef = document.querySelector("#container");

/* Create a 16x16 grid of square divs */
for (let i = 0; i < 16; i++) {
  /* I think we put every row of divs into 
    its own flexbox container, which will allow
    them to expand horizontally properly */
  let rowContainerDiv = document.createElement("div");
  rowContainerDiv.style["display"] = "flex";

  /* Create each element of a row */
  for (let j = 0; j < 16; j++) {
    let squareDiv = document.createElement("div");
    squareDiv.classList.add("square");
    rowContainerDiv.appendChild(squareDiv);

    /* Will cause the flex item to grow and
    shrink, from its baseline CSS width */
    // squareDiv.style["flex"] = "1 1 auto";

    /* Will set the element's dimensions to a 
    width-to-height ratio of 1, forming a square. */
    // squareDiv.style["aspect-ratio"] = "1 / 1";
    // squareDiv.style["width"] = "1rem";

    // squareDiv.style["border"] = "0.1rem solid black";
  }

  containerRef.appendChild(rowContainerDiv);
}
