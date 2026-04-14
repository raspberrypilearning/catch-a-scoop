## Add a scoop

## Step 1
Choose the ice-cream `scoop` image you want and add it to the code.

<div class="c-project-code">
--- code ---
---
language: javascript
filename: scripts.js
line_numbers: true
line_number_start: 3
line_highlights: 5
---
function preload() {
  cone = loadImage("cone1.png");
  scoop = loadImage("scoop1.png"); // load the scoop image
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
line_number_start: 22
line_highlights: 24
---
  image(cone, mouseX, 750);

  image(scoop, 150, 150, 50, 50); // draw one scoop near the top
}

--- /code ---

</div>

### Now run your code
You should see one scoop appear near the top of the screen.

<div class="c-project-output">

![ADD](images/step2.gif)

</div>
