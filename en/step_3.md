make the scoop fall down

  fallrate -= 5;
  scoopY = 0 - fallrate;

  if (scoops < maxScoops) {
    image(scoop, scoopX, scoopY, 150, 150);
  }
