limit the number of scoops - 

let maxScoops = 10; make this 3 butlet them choos

and

  if (scoops < maxScoops) {
    image(scoop, scoopX, scoopY, 150, 150);
  }


and 

  if (scoops < maxScoops && dist(scoopX, scoopY, mouseX, 600 - (scoops * 60)) < 80) {
    fallrate = 0;
    scoopX = random(0, width);
    scoops++;
  }

## Limit the stack
Choose the maximum number of scoops your player can catch.

## Step 1
Add a `maxScoops` variable near the top of your code.

## Step 2
Set it to a small number such as `3`, or choose your own number.

## Step 3
Only draw the falling scoop while `scoops` is less than `maxScoops`.

## Step 4
Only let the player catch another scoop while `scoops` is less than `maxScoops`.

<div class="c-project-callout c-project-callout--tip">

### Tip

- You can change `let maxScoops = 3;` to any number you like.
- Using `if (scoops < maxScoops)` stops the game at the right time.

</div>

<div class="c-project-code">
--- code ---
---
language: javascript
filename: scripts.js
line_numbers: true
line_number_start: 1
line_highlights: 4, 29, 36
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
}

--- /code ---

</div>

### Now run your code
The game should stop adding new scoops when the stack reaches your chosen limit.
