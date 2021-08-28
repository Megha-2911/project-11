
function preload(){
  //pre-load images
  pathImg = loadImage ("path.png");
  runnerImg = loadAnimation ("Runner-1.png", "Runner-2.png")
}

//moving background
 

function setup(){
  createCanvas(400,400);
  //create sprites here
  path = createSprite (200,200);
  path.addImage(pathImg);
  path.velocityY = 4;
  path.scale = 1.2;

  

  runner = createSprite (150,300)
  runner.addAnimation("runner", runnerImg)
  runner.scale = 0.1;

  //leftboundary = createSprite (200,)
}

function draw() {
  background(0);

  runner.x = mouseX
  if (path.y > 400){
    path.y = height/2;
  }
  drawSprites ()
}
