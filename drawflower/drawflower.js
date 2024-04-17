let cKeyPressed = false;
let vKeyPressed = false;
let bKeyPressed = false;
let nKeyPressed = false;
let mKeyPressed = false;
let zKeyPressed = false;
let petals = [img2,img3]


var img1;
function preload() {
 img1 = loadImage("data/drawflowerbg.png");
 img2 = loadImage("data/petal.png");
 img3 = loadImage("data/p2.png");
 img4 = loadImage("data/p3.png");
}

function setup() {
createCanvas(windowWidth,windowHeight);
image(img1, 0, 0);
}


function draw() {

   if (cKeyPressed) {
    // RED
    line(mouseX, mouseY, pmouseX, pmouseY)
    stroke(255, 0, 0)
    strokeWeight(5)
   }
   if (vKeyPressed) {
    // Yellow
    line(mouseX, mouseY, pmouseX, pmouseY)
    stroke(255, 255, 0)
    strokeWeight(5)
   }
   if (bKeyPressed) {
    // Blue
    line(mouseX, mouseY, pmouseX, pmouseY)
    stroke(0, 0, 255)
    strokeWeight(5)
   }
   if (nKeyPressed) {
    // green
    line(mouseX, mouseY, pmouseX, pmouseY)
    stroke(0, 255, 0)
    strokeWeight(5)
   }
   if (mKeyPressed) {
    // petal
    
    int; randomIndex = int(random(3));
        
        // Based on the random index, draw one of the three images
        if (randomIndex == 0) {
            image(img2, mouseX, mouseY, 25, 25);
        } else if (randomIndex == 1) {
            image(img3, mouseX, mouseY, 25, 25);
        } else {
            image(img4, mouseX, mouseY, 25, 25);
        }
   }
   if (zKeyPressed) {
    clear();
    image(img1, 0, 0);
   }
}

function keyPressed() {
  if (key === 'c') {
    // Set the flag to true when the spacebar is pressed
    cKeyPressed = true;
  }
  if (key === 'v') {
    // Set the flag to true when the spacebar is pressed
    vKeyPressed = true;
  }
  if (key === 'b') {
    // Set the flag to true when the spacebar is pressed
    bKeyPressed = true;
  }
   if (key === 'n') {
    // Set the flag to true when the spacebar is pressed
    nKeyPressed = true;
  }
   if (key === 'm') {
    // Set the flag to true when the spacebar is pressed
    mKeyPressed = true;
  }
   if (key === 'z') {
    // Set the flag to true when the spacebar is pressed
    zKeyPressed = true;
  }
}

function keyReleased() {
  if (key === 'c') {
    // Set the flag to false when the spacebar is released
    cKeyPressed = false;
  }
   if (key === 'v') {
    // Set the flag to true when the spacebar is pressed
    vKeyPressed = false;
  }
  if (key === 'b') {
    // Set the flag to true when the spacebar is pressed
    bKeyPressed = false;
  }
  if (key === 'n') {
    // Set the flag to true when the spacebar is pressed
    nKeyPressed = false;
  }
  if (key === 'm') {
    // Set the flag to true when the spacebar is pressed
    mKeyPressed = false;
  }
  if (key === 'z') {
    // Set the flag to true when the spacebar is pressed
    mKeyPressed = false;
  }
}
