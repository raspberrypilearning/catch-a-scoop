coun thte scoops and put the loop in (migh tneed helwp thi tthis)

  if (scoops < maxScoops && dist(scoopX, scoopY, mouseX, 600 - (scoops * 60)) < 80) {
    fallrate = 0;
    scoopX = random(0, width);
    scoops++;
  }

  for (let i = 0; i < scoops; i++) {
    image(scoop, mouseX, 600 - (i * 60), 150, 150);
  }


could star this not in a loop? maybe plitn tinto two steps