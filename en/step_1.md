## Choose a cone
Add an image for the cone that catches the ice-cream scoops

## Step 1
Click on the **Image gallery** icon to see all the image files in this project. Choose the cone you want to use.

## Step 2
Change the file name in `load_image()` to the cone you want to use.

<div class="c-project-callout c-project-callout--tip">

### Tip

- The screen is like a grid, and each image has an x and y position, for example, `image(img, x, y)` 
- The code below that uses the `mouseX` value for the x position. 

</div>

<div class="c-project-code">
--- code ---
---
language: javascript
filename: script.js
line_numbers: true
line_number_start: 1
line_highlights: 1, 4, 21
---

let cone;

function preload() {
  cone = loadImage("cone1.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  imageMode(CENTER);

  textAlign(CENTER);
  textSize(64);
  fill(255, 0, 255);
 
}

function draw() {
  background(26, 100, 255);

  image(cone, mouseX, 750);
}

--- /code ---

</div>

### Now run your code 
You can see cone move with your curser. 

<div class="c-project-output">

![ADD](images/step1.gif)

</div>
