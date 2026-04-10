## Make the scoop random
Create `scoopX` and use `random()` to choose where the scoop appears across the screen.

## Step 1
Add `scoopX` near the top of your code.


<div class="c-project-code">
--- code ---
---
language: javascript
filename: scripts.js
line_numbers: true
line_number_start: 1
line_highlights: 2
---
let cone, scoop;
let scoopX;

function preload() {
  cone = loadImage("cone1.png");
  scoop = loadImage("scoop1.png");
}
--- /code ---

</div>

## Step 2
Set `scoopX` in `setup()` so it chooses a random number for the x position.

<div class="c-project-callout c-project-callout--tip">

### Tip

- `random(0, width)` chooses a number from the width of the canvas.

</div>

<div class="c-project-code">
--- code ---
---
language: javascript
filename: scripts.js
line_numbers: true
line_number_start: 15
line_highlights: 18
---
  textSize(64);
  fill(255, 0, 255);

  scoopX = random(0, width);
}
--- /code ---

</div>

## Step 3
Add scoopX to the `image()'

<div class="c-project-code">
--- code ---
---
language: javascript
filename: scripts.js
line_numbers: true
line_number_start: 22
line_highlights: 26
---
function draw() {
  background(26, 100, 255);

  image(cone, mouseX, 750);
  image(scoop, scoopX, 150, 150, 150);
}
--- /code ---

</div>

### Now run your code
ADD