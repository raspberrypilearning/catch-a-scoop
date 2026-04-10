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

}