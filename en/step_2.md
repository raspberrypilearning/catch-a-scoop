## Add a scoop
Choose an ice-cream scoop image.

## Step 1
Choose the ice-cream scoop image you want and add it to the code.

<div class="c-project-code">
--- code ---
---
language: javascript
filename: scripts.js
line_numbers: true
line_number_start: 1
line_highlights: 1-2, 6
---
let cone, scoop;

function preload() {
  cone = loadImage("cone1.png");
  scoop = loadImage("scoop1.png");
}
--- /code ---

</div>

## Step 2
Draw the scoop in `draw()` using your random x position.

<div class="c-project-code">
--- code ---
---
language: javascript
filename: scripts.js
line_numbers: true
line_number_start: 21
line_highlights: 25
---
function draw() {
  background(26, 100, 255);

  image(cone, mouseX, 750);
  image(scoop, scoopX, 150, 150, 150);
}

--- /code ---

</div>

### Now run your code
You should see one scoop appear near the top of the screen.

