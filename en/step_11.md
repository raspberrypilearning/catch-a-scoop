## Challenge: add a score
Can you add a score that counts how many scoops you catch?

## Ideas to try

- Use `scoops` as your score.
- Add `text()` in `draw()` to show the score on the screen.
- Choose where your score should appear.

<div class="c-project-callout c-project-callout--tip">

### Tip

- Add the score code inside `draw()` so it updates while the game is running.

</div>

<div class="c-project-code">
--- code ---
---
language: javascript
filename: scripts.js
line_numbers: false
line_number_start: 
---
function draw() {
  background(26, 100, 255);

  textSize(32);
  fill(255);
  text("Score: " + scoops, 150, 50);
}
--- /code ---
</div>
