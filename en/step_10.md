challnege - change the falvero of icecreatm wuth each scoop


tip - load images ad an array in a loop

ramdimise the array when drwaing the image

## Challenge: use different flavours
Can you make each scoop in the stack a different flavour?

## Ideas to try

- Load several scoop images into an array.
- Choose a random scoop image each time a new scoop is caught.
- Store the chosen scoop images in an array so the stack keeps the flavours you picked.

<div class="c-project-callout c-project-callout--tip">

### Tip

- Arrays are useful when you want to keep a list of images.
- You could use a loop in `preload()` to load files such as `scoop1.png`, `scoop2.png`, and `scoop3.png`.
- `random()` can help you choose a different flavour each time.

</div>

<div class="c-project-code">
--- code ---
---
language: javascript
filename: scripts.js
line_numbers: true
line_number_start: 1
---

let scoopImages = [];
let stack = [];

function preload() {
  for (let i = 1; i <= 3; i++) {
    scoopImages.push(loadImage("scoop" + i + ".png"));
  }
}

// When a scoop is caught, choose a random flavour and add it to stack.
// Then draw each image from stack instead of always drawing the same scoop.

--- /code ---

</div>

### Challenge yourself
Try using more scoop images and make every cone look different.
