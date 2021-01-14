
function setup() {
createCanvas(800,400);
hr = hour();
mn = minute();
sc = second();
}

function draw() {
  background(255,255,255);  
  angleMode(DEGREES);
  scAngle = map(sc,0,60,0,360)
  drawSprites();
}