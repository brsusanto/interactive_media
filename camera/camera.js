var capture;

function preload() {
 img1 = loadImage("data/gardner.png");
}

function setup() {
createCanvas(windowWidth, windowHeight);
capture = createCapture(VIDEO);
capture.size(640, 480);
capture.hide();
;
}


function draw() {
  
image(capture, mouseX, mouseY, 150, 100);
image(img1, mouseX-75,mouseY+15, 300,300);

filter(ERODE);

}
