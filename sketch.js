var wall, thickness
var speed , weight, bullet;

function setup() {
  createCanvas(1600,400);

  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);

  bullet = createSprite(50,200,70,10);
  bullet.velocityX = speed;
  bullet.shapeColor = "blue";

  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = color(80,80,80);
}

function draw() {
  background("white");  

  if (hasCollided(bullet,wall)){
    bullet.velocityX = 0;
    var d = 0.5*weight*speed*speed/thickness*thickness*thickness;

    if (d>10){
      bullet.shapeColor = "red";
    }
    
    if (d<10){
      bullet.shapeColor = "green";
    }
  }
  drawSprites();
}

function hasCollided(lbullet,lwall){

bulletRightEdge = lbullet.x + lbullet.width;
wallLeftEdge = lwall.x;

if (bulletRightEdge>=wallLeftEdge){

return true;
}
  return false;
}