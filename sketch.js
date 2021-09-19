function preload(){
  bgImg = loadImage("snow2.jpg");
}


function setup() {
  createCanvas(800,400);
  bg= createSprite(400, 200, 800, 400);
  bg.addImage(bgImg);
}


function draw() {
  background(255,255,255);  
  drawSprites();
}