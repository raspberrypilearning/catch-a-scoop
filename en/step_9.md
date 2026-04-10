
add a final message

 if (scoops >= maxScoops) {
    text("Yum!", mouseX, 500);
  }

## Show a final message
When the player has caught all the scoops, display a message above the cone.

## Step 1
Check if the number of scoops is greater than or equal to `maxScoops`.

## Step 2
Use `text()` to display a message such as `"Yum!"`.

## Step 3
Choose where the message should appear on the screen.

<div class="c-project-callout c-project-callout--tip">

### Tip

- `>=` means greater than or equal to.
- You can change `"Yum!"` to your own message.

</div>

<div class="c-project-code">
--- code ---
---
language: javascript
filename: scripts.js
line_numbers: true
line_number_start: 1
line_highlights: 46, 47, 48
---

let scoopX, scoopY, cone, scoop;
let fallrate = 0;
let scoops = 0;
let maxScoops = 3;

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

  if (scoops < maxScoops) {
    image(scoop, scoopX, scoopY, 150, 150);
  }

  if (scoopY > height) {
    fallrate = 0;
    scoopX = random(0, width);
  }

  if (scoops < maxScoops && dist(scoopX, scoopY, mouseX, 600 - (scoops * 60)) < 80) {
    fallrate = 0;
    scoopX = random(0, width);
    scoops++;
  }

  for (let i = 0; i < scoops; i++) {
    image(scoop, mouseX, 600 - (i * 60), 150, 150);
  }

  if (scoops >= maxScoops) {
    text("Yum!", mouseX, 500);
  }
}

--- /code ---

</div>

### Now run your code
When the cone is full, your message should appear on the screen.
