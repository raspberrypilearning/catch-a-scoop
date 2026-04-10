coun thte scoops and put the loop in (migh tneed helwp thi tthis)

  if (scoops < maxScoops && dist(scoopX, scoopY, mouseX, 600 - (scoops * 60)) < 80) {
    fallrate = 0;
    scoopX = random(0, width);
    scoops++;
  }

  for (let i = 0; i < scoops; i++) {
    image(scoop, mouseX, 600 - (i * 60), 150, 150);
  }


could star this not in a loop? maybe plitn tinto two steps

## Stack the scoops
Count how many scoops have been caught, then draw that many scoops in a stack on top of the cone.

## Step 1
Create a variable called `scoops` and set it to `0` near the top of your code if you have not already done this.

## Step 2
When a scoop touches the cone, add `1` to `scoops`.

## Step 3
Use a `for` loop to draw each scoop in the stack.

## Step 4
Move each scoop up a little bit more than the one below it.

<div class="c-project-callout c-project-callout--tip">

### Tip

- `scoops++` adds `1` to the number stored in `scoops`.
- A `for` loop is useful when you want to repeat the same drawing code several times.
- `600 - (i * 60)` moves each scoop higher up the stack.

</div>

<div class="c-project-code">
--- code ---
---
language: javascript
filename: scripts.js
line_numbers: true
line_number_start: 1
line_highlights: 3, 36, 39, 42, 43, 44
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
    scoops++;
  }

  for (let i = 0; i < scoops; i++) {
    image(scoop, mouseX, 600 - (i * 60), 150, 150);
  }
}

--- /code ---

</div>

### Now run your code
Each scoop you catch should stay on the cone and build into a stack.
