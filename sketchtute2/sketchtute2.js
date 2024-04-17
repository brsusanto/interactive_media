var orange, blue, yellow
orange="#FF5E00";
blue="#00239C";
yellow="#FCE300";
colours=[orange, blue, yellow];

function setup() {
  createCanvas(windowWidth,windowHeight);
  background(255,255,0);
  frameRate(60);
  textSize(120);
}


function draw() {
  //text("HELLO", width/2, height/2);
  background(255, 255,0, 3)
  strokeWeight(5);
  fill(random(colours));
  stroke(255, 0, 0);
  circle(mouseX, mouseY, random(100));
  line(mouseX, mouseY, pmouseX, pmouseY);
  
}

function mousePressed(){
  square(mouseX, mouseY, 400);
}
