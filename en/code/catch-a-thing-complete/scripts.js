let scoopX, scoopY, cone, scoop;
let fallrate = 0;
let scoops = 0;
let maxScoops = 3;

//function preload() {
//  cone = loadImage("cone1.png");
//  scoop = loadImage("scoop1.png");
//}

function setup() {
  createCanvas(windowWidth, windowHeight);

  rectMode(CENTER);
  textAlign(CENTER);
  textSize(200);
  fill(255, 0, 255);

  scoopX = random(0, width);
}

function draw() {
  background(26, 100, 255);

  rect(mouseX, height-200, 50, 100);
  
  fallrate -= 5;
  scoopY = 0 - fallrate;
  
    if (scoops < maxScoops) {
  ellipse(scoopX, scoopY, 50, 50);  
    }

    if (scoopY > height) {
    fallrate = 0;
    scoopX = random(0, width);
  }
  
    if (dist(scoopX, scoopY, mouseX, 540 - (scoops * 30)) < 20) {
    fallrate = 0;
    scoopX = random(0, width);
              scoops++;
  }
  
    for (let i = 0; i < scoops; i++) {
    ellipse(mouseX, 540 - (i * 20), 50, 50);
  }

    if (scoops >= maxScoops) {
    text("Yum!", mouseX, 500);
  }
}
