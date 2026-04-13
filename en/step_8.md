## Move the catch point
Make the scoop land on top of the stack instead of always aiming for the cone.

## Step 1
Change the `dist()` check so the catch point moves up as the stack gets taller. 
<div class="c-project-code">
--- code ---
---
language: javascript
filename: scripts.js
line_numbers: true
line_number_start: 40
line_highlights: 40
---
  if (dist(scoopX, scoopY, mouseX, 600 - (scoops * 60)) < 80) {
    fallrate = 0;
    scoopX = random(0, width);
    scoops++;
  }
--- /code ---
</div>  

### Now run your code
Each new scoop should land on top of the scoops you have already caught.

Experiment with the catch point so that it looks how you want it.

<div class="c-project-output">

![ADD](images/step8.gif)

</div>
