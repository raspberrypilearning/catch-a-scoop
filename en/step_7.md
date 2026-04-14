## Stack the scoops
Count how many scoops have been caught, then draw that many scoops in a stack on top of the cone.

## Step 1
Create `scoops` and set it to `0` near the top of your code.

<div class="c-project-code">
--- code ---
---
language: javascript
filename: scripts.js
line_numbers: true
line_number_start: 1
line_highlights: 3
---
let scoopX, scoopY, cone, scoop;
let fallrate = 0;
let scoops = 0; // count how many scoops are caught
--- /code ---
</div>

## Step 2
When a scoop touches the cone, add `scoops++` inside the `if` statement. This adds `1` to the number stored in `scoops`.

<div class="c-project-callout c-project-callout--tip">

### Tip

- A `for` loop is useful when you want to repeat the same drawing code several times.
- `600 - (i * 60)` moves each scoop higher up the stack.

</div>

<div class="c-project-code">
--- code ---
---
language: javascript
filename: scripts.js
line_numbers: true
line_number_start: 29
line_highlights: 39, 42-44
---
  image(scoop, scoopX, scoopY, 150, 150);
  
  if (scoopY > height) {
    fallrate = 0;
    scoopX = random(0, width);
  }

  if (dist(scoopX, scoopY, mouseX, 600) < 80) {
    fallrate = 0;
    scoopX = random(0, width);
    scoops++; // add 1 to the total
  }

  for (let i = 0; i < scoops; i++) { // draw one scoop for each catch
    image(scoop, mouseX, 600 - (i * 60), 50, 50); // move each scoop higher up
  }
}
--- /code ---
</div>  

### Now run your code
Each scoop you catch on the cone should build into a stack.

<div class="c-project-output">

![ADD](images/step7.gif)

</div>
