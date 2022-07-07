function setup() {
  createCanvas(396, 484, WEBGL);
}

function draw() {
  background(0);
  
  stroke(255);
  noFill();
  
  rotateX(frameCount*0.01);
  rotateY(frameCount*0.01);
  box(150);
}