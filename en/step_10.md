## Show a final message
When the player has caught all the scoops, display a message.

## Step 1
Check if the number of scoops is more than or equal to `maxScoops` and use `text()` to display a message such as `"Yum!"`.

<div class="c-project-code">
--- code ---
---
language: javascript
filename: scripts.js
line_numbers: true
line_number_start: 1
line_highlights: 46, 47, 48
---
  for (let i = 0; i < scoops; i++) {
    image(scoop, mouseX, 600 - (i * 60), 150, 150);
  }

  if (scoops >= maxScoops) {
    text("Yum!", mouseX, 500);
  }
}
--- /code ---
</div>

### Now run your code
When the cone is full, your message should appear on the screen. You can change `"Yum!"` to your own message.

<div class="c-project-output">

![ADD](images/step9.gif)

</div>
