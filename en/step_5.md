## Start scoops again
When the scoop reaches the bottom of the screen, send it back to the top in a new random place.

## Step 1
If `scoopY` is more than the height of the screen, set the `fallrate` to 0 so the scoop starts falling again from the top.

Also, choose a new random x position for the next falling scoop.

<div class="c-project-code">
--- code ---
---
language: javascript
filename: scripts.js
line_numbers: true
line_number_start: 25
line_highlights: 30-33
---
  fallrate -= 5;
  scoopY = 0 - fallrate;

  image(scoop, scoopX, scoopY, 150, 150);

  if (scoopY > height) {
    fallrate = 0;
    scoopX = random(0, width);
  }
}
--- /code ---

</div>

### Now run your code
Each time the scoop falls off the screen, a new one should appear at the top.

<div class="c-project-output">

![ADD](images/step5.gif)

</div>
