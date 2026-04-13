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
let scoops = 0;
--- /code ---
</div>

## Step 2
When a scoop touches the cone, `scoops++` adds `1` to the number stored in `scoops`.

- A `for` loop is useful when you want to repeat the same drawing code several times.
- `600 - (i * 60)` moves each scoop higher up the stack.

<div class="c-project-code">
--- code ---
---
language: javascript
filename: scripts.js
line_numbers: true
line_number_start: 40
line_highlights: 44
---
  if (dist(scoopX, scoopY, mouseX, 600) < 80) {
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

<div class="c-project-output">

![ADD](images/step7.gif)

</div>