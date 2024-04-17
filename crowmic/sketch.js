let mic;
let img;

function preload() {
 img2 = loadImage("crow2.png");
 

}

function setup() {
  createCanvas(500, 500);

  mic = new p5.AudioIn();

  
  mic.start();
}

function draw() {
  
  var vol = mic.getLevel();
  
let imageHeight = map(vol, 0, 1, 100, 400);
  
  
  let imageWidth = img2.width * (imageHeight / img2.height);
  
 
  image(img2, width/2 - imageWidth/2, height/2 - imageHeight, imageWidth, imageHeight);

}
