## Make the scoops fall
Move the scoops down the screen.

## Step 1
Add a `scoopY` and `fallrate`.

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
--- /code ---

</div>

<div class="c-project-callout c-project-callout--tip">

### Tip

The `draw()` function runs again and again, so if a value changes every frame, the image will appear to move.

</div>

## Step 2
In `draw()`, change the `fallrate`, and set `scoopY` to change with this. 

<div class="c-project-code">
--- code ---
---
language: javascript
filename: scripts.js
line_numbers: true
line_number_start: 22
line_highlights: 26-27
---
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
The scoop should start at the top and move down the screen. Experiment with the `fallrate` to change the speed of the ice-cream.

<div class="c-project-output">

![ADD](images/step4.gif)

</div>
