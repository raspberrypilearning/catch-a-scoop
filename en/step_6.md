## Catch the scoop
Check when the falling scoop touches the cone, then reset it so another scoop can fall.

## Step 1
Use `dist()` to measure the distance between the falling scoop and the top of the cone. 

<div class="c-project-callout c-project-callout--tip">

### Tip

`dist(x1, y1, x2, y2)` works out the distance between two points.

</div>

If the distance is less than 80, then change the `fallrate` and make a new random `scoopX` position.

<div class="c-project-code">
--- code ---
---
language: javascript
filename: scripts.js
line_numbers: true
line_number_start: 28
line_highlights: 35-38
---
  if (scoopY > height) {
    fallrate = 0;
    scoopX = random(0, width);
  }

  if (dist(scoopX, scoopY, mouseX, 600) < 80) {
    fallrate = 0;
    scoopX = random(0, width);
  }
}

--- /code ---

</div>

### Now run your code
When the falling scoop touches the cone, it should reset and a new scoop should start falling.

Experiment with the numbers to catch the scoop in the right place.

<div class="c-project-output">

![ADD](images/step6.gif)

</div>
