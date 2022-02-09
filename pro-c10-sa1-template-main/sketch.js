var trex,trex_running,ground,groundimg
function setup() 
{
  createCanvas(400,400);
  trex=createSprite(50,160,20,50)
  trex.addAnimation("running",trex_running)
  trex.scale=0.5
  ground=createSprite(200,180,400,20)
  ground.addImage(groundimg)

}
function preload()
  {
    trex_running=loadAnimation("trex1.png","trex3.png","trex4.png")
    groundimg=loadImage("ground2.png")

  }

function draw() 
{
background(51);
ground.velocityX=-2
if(ground.x<0){
  ground.x=ground.width/2
}
if(keyDown("space")){
  trex.velocityY=-8


}
trex.velocityY=trex.velocityY+0.5
trex.collide(ground)
drawSprites()

}

