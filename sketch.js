var fixedRect, movingRect;

function setup(){
  createCanvas(600, 400);
  fixedRect = createSprite(500,200,30,300);
  movingRect = createSprite(200,200,100,30);
  
  movingRect.debug = true;
  fixedRect.debug = true;
  
  movingRect.shapeColor = "yellow";
  fixedRect.shapeColor = "yellow";

  ball1 = createSprite(100,200,20,20);
  ball1.velocityX = 3;

  ball2 = createSprite(100,250,20,20);
  ball2.velocityX = 3;
}



function draw() {
  
  background("black");

  movingRect.x = mouseX;
  movingRect.y = mouseY;
  
  //movingRect.width/2 + fixedRect.width/2 = 75;
  //fixedRect.x - movingRect.x = 75
  
  if(fixedRect.x - movingRect.x <= movingRect.width/2 + fixedRect.width/2 && //detect collision from left side
  movingRect.x - fixedRect.x <= movingRect.width/2 + fixedRect.width/2 &&
  fixedRect.y - movingRect.y <= movingRect.height/2 + fixedRect.height/2 &&
  movingRect.y - fixedRect.y <= movingRect.height/2 + fixedRect.height/2 ) { //detect collision from right side
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  else
  {
    movingRect.shapeColor = "yellow";
    fixedRect.shapeColor = "yellow";
  }

  //collide
  if(fixedRect.x - ball1.x <= ball1.width/2 + fixedRect.width/2 ) {
    ball1.velocityX = 0;
  }

  //bounceOff
  if(fixedRect.x - ball2.x <= ball2.width/2 + fixedRect.width/2 ) {
    ball2.velocityX = -3;
  }

  drawSprites()
}