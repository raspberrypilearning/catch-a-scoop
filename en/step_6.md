Make the scoop redrwaw when it hits the cone


  if (dist(scoopX, scoopY, mouseX, 600 - (scoops * 60)) < 80) {
    fallrate = 0;
    scoopX = random(0, width);

  }

## Catch the scoop
Check when the falling scoop touches the cone, then reset it so another scoop can fall.

## Step 1
Use `dist()` to measure the distance between the falling scoop and the top of the cone.

## Step 2
If the scoop is close enough, reset the fall speed.

## Step 3
Choose a new random x position so the next scoop falls somewhere different.

<div class="c-project-callout c-project-callout--tip">

### Tip

- `dist(x1, y1, x2, y2)` works out the distance between two points.
- A smaller distance means the scoop is touching or very close to the cone.

</div>

<div class="c-project-code">
--- code ---
---
language: javascript
filename: scripts.js
line_numbers: true
line_number_start: 1
line_highlights: 36, 37, 38, 39
---

let scoopX, scoopY, cone, scoop;
let fallrate = 0;
let scoops = 0;

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

  if (dist(scoopX, scoopY, mouseX, 600 - (scoops * 60)) < 80) {
    fallrate = 0;
    scoopX = random(0, width);
  }
}

--- /code ---

</div>

### Now run your code
When the falling scoop touches the cone, it should reset and a new scoop should start falling.
