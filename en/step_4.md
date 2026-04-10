make the scoop fall down

  fallrate -= 5;
  scoopY = 0 - fallrate;

  if (scoops < maxScoops) {
    image(scoop, scoopX, scoopY, 150, 150);
  }

## Make the scoop fall
Use a variable to move the scoop down the screen a little bit every frame.

## Step 1
Add variables for the scoop's y position and fall speed.

## Step 2
In `draw()`, change the fall speed and use it to work out the scoop's y position.

## Step 3
Draw the scoop using `scoopY` so it falls from the top of the canvas.

<div class="c-project-callout c-project-callout--tip">

### Tip

- The `draw()` function runs again and again, so small changes create animation.
- If a value changes every frame, the image will appear to move.

</div>

<div class="c-project-code">
--- code ---
---
language: javascript
filename: scripts.js
line_numbers: true
line_number_start: 1
line_highlights: 1, 3, 26, 27, 30
---

let scoopX, scoopY, cone, scoop;
let fallrate = 0;

function preload() {
  cone = loadImage("cone1.png");
  scoop = loadImage("scoop1.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  imageMode(CENTER);

  textAlign(CENTER);
  textSize(64);
  fill(255, 0, 255);

  scoopX = random(0, width);
}

function draw() {
  background(26, 100, 255);

  image(cone, mouseX, 750);

  fallrate -= 5;
  scoopY = 0 - fallrate;

  image(scoop, scoopX, scoopY, 150, 150);
}

--- /code ---

</div>

### Now run your code
The scoop should start at the top and fall down the screen.
