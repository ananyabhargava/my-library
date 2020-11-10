var fixedRect, movingRect;
var object1,object2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  object1=createSprite(300,500,50,50);
  object1.shapeColor="green";
  object2=createSprite(380,550,50,50);
  object2.shapeColor="green";

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  
bounceOff(movingRect,fixedRect);
  object1.x=World.mouseX;
  object1.y=World.mouseY;
  if(isTouching(object1,object2)){
    object2.shapeColor="red";
    object1.shapeColor="red";
  }
  else{
    object2.shapeColor="green";
    object1.shapeColor="green";
  }
  drawSprites();
}
