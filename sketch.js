const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function preload() {
  bg = loadImage("island.jpg")
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(380,250,400,20)
 C1 = new Char1(300,150,60,60)
 C2 = new Char2(350,150,60,60)
 C3 = new Char3(400,150,60,60)
 C4 = new Char4(450,150,70,60)
}

function draw() {
  background(bg); 
  Engine.update(engine)
  C1.display()
  C2.display()
  C3.display()
  C4.display()
  ground.display()
  if(keyDown(LEFT_ARROW)) {
    Matter.Body.translate(C3.body,{x:-5,y:0})
    Matter.Body.translate(C2.body,{x:+2,y:0})
    Matter.Body.translate(C1.body,{x:+1,y:0})
    
  }
  if(keyDown(RIGHT_ARROW)) {
    Matter.Body.translate(C3.body,{x:5,y:0})
    Matter.Body.translate(C4.body,{x:-4,y:0})
  }

if(C1.body.position.y>270) {
  fill("white")
  ellipseMode(RADIUS)
  ellipse(C1.body.position.x-30,C1.body.position.y-60,30,20)
  fill("black")
  text("OH NO!",C1.body.position.x-55,C1.body.position.y-60) 
}
if(C2.body.position.y>270) {
  fill("white")
  ellipseMode(RADIUS)
  ellipse(C2.body.position.x-30,C2.body.position.y-60,30,20)
  fill("black")
  text("OH NO!",C2.body.position.x-55,C2.body.position.y-60) 
}
if(C4.body.position.y>270) {
  fill("white")
  ellipseMode(RADIUS)
  ellipse(C4.body.position.x-30,C4.body.position.y-60,30,20)
  fill("black")
  text("OH NO!",C4.body.position.x-55,C4.body.position.y-60) 
}
if(C1.body.position.y>400&&C2.body.position.y>400&&C4.body.position.y>400&&C3.body.position.y<250) {
  fill("black")
  textSize(50)
  text("Winner!",350,100)
}
}

