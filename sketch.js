var car, car2, car3, speed, weight, wall, wall2, wall3

function setup() {
  createCanvas(1600,400);
  car=createSprite(50, 150, 50, 50);
  car2=createSprite(50, 250, 50, 50);
  car3=createSprite(50, 350, 50, 50);
  wall=createSprite(1500, 150, 60, height/2)
  wall2=createSprite(1500, 250, 60, height/2)
  wall3=createSprite(1500, 350, 60, height/2)

  car.velocityX=speed;
  car2.velocityX=speed;
  car3.velocityX=speed;
  



  speed=random(55, 90);
  weight=random(400, 1500)
}

function draw() {
  background(50,25,155);  

if(car.x-wall.x<car.width/2+wall.width/2){
car.velocityX=0
var deformation=0.5 * weight * speed * speed/22509;
if(deformation>180){
car.shapeColour("red")

}

if(deformation>180&&< 100){

  car.shapeColour("yellow")
}

if(deformation<100){
car.shapeColour("green")

}

  }

  drawSprites()