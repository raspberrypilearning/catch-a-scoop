## Make the scoop random
Use `random()` to choose where the scoop appears across the screen.

## Step 1
Set `scoopX` to a random number in `setup()`.

<div class="c-project-callout c-project-callout--tip">

### Tip

`random(0, width)` chooses a number from the width of the canvas.

</div>

<div class="c-project-code">
--- code ---
---
language: javascript
filename: scripts.js
line_numbers: true
line_number_start: 14
line_highlights: 16
---
  fill(255, 0, 255);

  scoopX = random(0, width); // pick a random x position
}
--- /code ---

</div>

## Step 2
Add `scoopX` to the x position of the `image()`, so that this is in a random position each time the code runs.

<div class="c-project-code">
--- code ---
---
language: javascript
filename: scripts.js
line_numbers: true
line_number_start: 19
line_highlights: 23
---
function draw() {
  background(26, 100, 255);

  image(cone, mouseX, 750);
  
  image(scoop, scoopX, 150, 150, 150);
}
--- /code ---

</div>

### Now run your code
Start and stop the code. The scoop of ice-cream should appear in a different position every time you start again.

<div class="c-project-output">

![ADD](images/step3.gif)

</div>
