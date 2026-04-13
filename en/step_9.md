## Limit the stack
Choose the maximum number of scoops your player can catch.

## Step 1
Add `maxScoops`, a maximum number of ice-cream scoops to collect.

<div class="c-project-code">
--- code ---
---
language: javascript
filename: scripts.js
line_numbers: true
line_number_start: 1
line_highlights: 4
---
let scoopX, scoopY, cone, scoop;
let fallrate = 0;
let scoops = 0;
let maxScoops = 3;
--- /code ---
</div>

## Step 2
Use `if (scoops < maxScoops)` to only make new scoops appear if the number of stacked scoops is less than your maximum.

<div class="c-project-code">
--- code ---
---
language: javascript
filename: scripts.js
line_numbers: true
line_number_start: 27
line_highlights: 30-32
---
  fallrate -= 5;
  scoopY = 0 - fallrate;

  if (scoops < maxScoops) {
    image(scoop, scoopX, scoopY, 150, 150);
  }

  if (scoopY > height) {
    fallrate = 0;
    scoopX = random(0, width);
  }
--- /code ---
</div>

### Now run your code
The game should stop adding new scoops when the stack reaches your chosen limit. Experiment with different scoop stack limits.

<div class="c-project-output">

![ADD](images/step8.gif)

</div> 