var ball,img,paddle;                                                                     

function preload() {
  ballimg = loadImage('ball.png');
  paddleimg=loadImage("paddle.png");
}

function setup() {
  createCanvas(400, 400);
  ball=createSprite(60,200,20,20);
  ball.addImage (ballimg); 
  ball.velocityX=9;  
  paddle=createSprite(350,200,20,100);
  paddle.addImage(paddleimg);
}

function draw() {
  background(205,153,0);
  
   if (paddle.isTouching(ball)){
    ball.bounceOff(paddle);
    explosion();
  }

  
  edges=createEdgeSprites();
  //Bounce Off the Left Edge only
  ball.bounceOff(edges[0]); 
  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[3]);
  
  paddle.bounceOff(edges);
  
  if(keyDown(UP_ARROW))
  {
    paddle.velocityY=-8;
  }
  
  if(keyDown(DOWN_ARROW))
  {
    paddle.velocityY=+8;
  }
  
  
  if (ball.x> 400){
    ball.x=60;
    ball.y=200;
    paddle.x=350;
    paddle.y=200;
    paddle.velocityY=0;
  }
  
  drawSprites();
  
}

function explosion()
{
  ball.velocityY=random(-8,8);
}

