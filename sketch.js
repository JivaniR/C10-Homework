var sea;
var ship;
function preload(){
seaImg= loadImage("sea.png");
shipImg= loadAnimation("ship-1.png","ship-2.png");
}

function setup(){
  createCanvas(400,400);
  sea= createSprite(100,100,50,50);
  sea.addImage("abc",seaImg);
  sea.scale= 0.9

ship= createSprite(50,300,20,50);
ship.addAnimation("abc",shipImg);
ship.scale= 0.2;
}

function draw() {
  background("blue");
 if(sea.x<0){
   sea.x= sea.width/2;
 }
 drawSprites();
}