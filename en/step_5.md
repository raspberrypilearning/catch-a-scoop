
make the scoop redraw when it reachest hte ground

  if (scoopY > height) {
    fallrate = 0;
    scoopX = random(0, width);
  }

## Start again at the top
When the scoop reaches the bottom of the screen, send it back to the top in a new random place.

## Step 1
Check if the scoop has moved below the canvas.

## Step 2
Reset the fall speed so the scoop starts falling again from the top.

## Step 3
Choose a new random x position for the next falling scoop.

<div class="c-project-callout c-project-callout--tip">

### Tip

- `height` stores the height of the canvas.
- If `scoopY` is greater than `height`, the scoop has gone off the bottom of the screen.

</div>

<div class="c-project-code">
--- code ---
---
language: javascript
filename: scripts.js
line_numbers: true
line_number_start: 1
line_highlights: 31, 32, 33, 34
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

  if (scoopY > height) {
    fallrate = 0;
    scoopX = random(0, width);
  }
}

--- /code ---

</div>

### Now run your code
Each time the scoop falls off the screen, a new one should appear at the top.
