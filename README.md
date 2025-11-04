# odin-etch-a-sketch
An attempt at Odin Project's Etch-a-Sketch project.

# What I've Learned
## Viewport Height
- Specifying a viewport height in CSS, like ```body {height:100vh}```, will still allow overflow.
    - The ```body``` becomes the height of the viewport, but still allows overflow.

## Viewport Width
- If you use ```100vw``` when a vertical scroll bar is present, this can create a horizontal scrollbar.
    - This is because the vertical scroll bar is
    already taking up some of the viewport width, causing overflow.

## Managing Overflow 
### The CSS "overflow" property
- Note that the ```overflow``` property has an x-component and y-component that can be individually adjusted.
- You can hide/cut off overflow using ```overflow: hidden```.
- You can add a scroll bar to manage overflow using ```overflow: scroll```. ```overflow: auto``` will similarly add a scroll bar, but only when necessary.
- Using ```height: 100vh``` on a non-body element will cause overflow when other elements exist.
    - Also pay attention to your margins and padding, which will take up some viewport space.
    - ex. You have a heading and a div as children of the body. Setting ```div {height:100vh}``` will cause overflow because the heading is already taking up some of the viewport height.


### Shrinking a Container's Content
- We can turn a container into a flexbox container, which will shrink the container's content to the minimum size possible.
    - I believe overflow is still possible when the content has shrunk to its minimum, yet still too big for the container.
    - Properly shrinking elements requires:
        - Specifying a CSS height value for the container.
        - Lowering to or setting CSS ```min-height: 0``` and ```min-width: 0``` on flexbox items, allowing them to shrink as much as possible.

## CSS "aspect-ratio" property
- The property will keep elements at a specified width-to-height aspect ratio.
    - ex. ```aspect-ratio: 1 / 1``` will form a square.

## Flexbox Container - "align-items" Property
- By default, it will be set to "align-items:stretch". 
    - In this project, this was causing overflow. By stretching the div squares in the x direction, the squares were stretching in the y direction to keep a square aspect-ratio. This would either:
        - Cause overflow in the y direction (when the flexbox shrinking was not implemented using ```min-height: 0```).
        - Shrink the squares in the y direction, but keep the its length in the x direction. This made the squares look like rectangles.

## NodeReference.replaceChildren() Method
- When no arguments are used, this method will remove all child nodes from the referenced element node.

## Dynamically Generating RGB Colors
- When attempting to change a referenced node's color in JavaScript, it is necessary to do so using strings.
    - I believe that, in general, CSS property values are stored as string internally.
    - ex. ```event.target.style["background-color"] = `rgb(${r}, ${g}, ${b})`;```, the value must be created using a template string.
        - I believe that CSS has a built-in method for rgb. No such method exists in javascript, which is another reason we use a template string here.

## event.target.style Usage
- I believe that, when we use ```event.target.style```, we're interacting with an HTML element's style property. This involves inline styling.
    -  As a result, we cannot use "event.target.style" to retrieve external CSS rule property names or values.
        - Instead we'd have to look into using something like ```document.styleSheets[0].cssRules```.
- In this project, I had to lower the opacity of a square by 10% on every subsequent mouse event interaction with it.
    - To do this, I used the inline style ```opacity``` property, which would display the square at a certain opacity.
        - The square never actually had an initial inline opacity value. To fix this, I specifically set an inline opacity value on the square during its first mouse event interaction.
        - To later modify the square's opacity, I would retrieve the property's value, using ```event.target.style.opacity``` and store it back with a 10% decrease in value.