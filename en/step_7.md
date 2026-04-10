limit the number of scoops - 

let maxScoops = 10; make this 3 butlet them choos

and

  if (scoops < maxScoops) {
    image(scoop, scoopX, scoopY, 150, 150);
  }


and 

  if (scoops < maxScoops && dist(scoopX, scoopY, mouseX, 600 - (scoops * 60)) < 80) {
    fallrate = 0;
    scoopX = random(0, width);
    scoops++;
  }