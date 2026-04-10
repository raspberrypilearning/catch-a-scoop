
make the scoop redraw when it reachest hte ground

  if (scoopY > height) {
    fallrate = 0;
    scoopX = random(0, width);
  }