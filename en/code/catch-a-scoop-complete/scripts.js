let scoopX, scoopY, cone, scoop;
let fallrate = 0;
let scoops = 0;
let maxScoops = 10;

function preload() {
  cone = loadImage("cone.png");
  scoop = loadImage("scoop1.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  imageMode(CENTER);

  textAlign(CENTER);
  textSize(64);
  fill(255, 0, 255);
 
  scoopX = random(0, width);
}

function draw() {
  background(26, 100, 255);

  image(cone, mouseX, 750);

  fallrate -= 5;
  scoopY = 0 - fallrate;

  if (scoops < maxScoops) {
    image(scoop, scoopX, scoopY, 150, 150);
  }

  if (scoopY > height) {
    fallrate = 0;
    scoopX = random(0, width);
  }

  if (scoops < maxScoops && dist(scoopX, scoopY, mouseX, 600 - (scoops * 60)) < 80) {
    fallrate = 0;
    scoopX = random(0, width);
    scoops++;
  }

  for (let i = 0; i < scoops; i++) {
    image(scoop, mouseX, 600 - (i * 60), 150, 150);
  }

  if (scoops >= maxScoops) {
    text("Yum!", mouseX, 500);
  }
}