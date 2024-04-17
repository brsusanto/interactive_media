let spacebarPressed = false; //for spacebar
let kKeyPressed = false;
let mKeyPressed = false;

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
  //background(255, 255,0, 3) -- does the fade out to background
  //strokeWeight(5); 
  fill(random(colours));
  //stroke(255, 0, 0);
  //circle(mouseX, mouseY, random(100));
  //line(mouseX, mouseY, pmouseX, pmouseY);
  
   if (spacebarPressed) {
    // Draw a line when the spacebar is pressed //CIRCLE BRUSH
    circle(mouseX, mouseY, random(100))
    stroke(255, 0, 0)
    strokeWeight(5)
   }
   
   
   if (kKeyPressed) {
     //LINE BRUSH
    line(mouseX, mouseY, pmouseX, pmouseY);
    stroke(0,0,255)
    strokeWeight(5);
   }
   
   if (mKeyPressed) {
     //BLACKSQUAREBRUSH
    noStroke(); //Disable Stroke
    fill(0)
    square(mouseX, mouseY, 40);
   }
   
  
}

function mousePressed(){
  //square(mouseX, mouseY, 400);
  fill(random(colours));
}


// if i want to do other keybinds
function keyPressed() {
  if (key === ' ') {
    // Set the flag to true when the spacebar is pressed
    spacebarPressed = true;
  }
  if (key === 'k') {
    // Set the flag to true when the spacebar is pressed
    kKeyPressed = true;
  }
  if (key === 'm') {
    // Set the flag to true when the spacebar is pressed
    mKeyPressed = true;
  }
}

function keyReleased() {
  if (key === ' ') {
    // Set the flag to false when the spacebar is released
    spacebarPressed = false;
  }
   if (key === 'k') {
    // Set the flag to true when the spacebar is pressed
    kKeyPressed = false;
  }
  if (key === 'm') {
    // Set the flag to true when the spacebar is pressed
    mKeyPressed = false;
  }
}
