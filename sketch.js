const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

//const Constraint=Matter.Constraint;


let engine;
let world;

var ball;
var string;

var ball1

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  
  world = engine.world;
  
  var options={restitution:0.5};
  ball= Bodies.circle(200,50,20,options);
  World.add(world,ball);

  var options1={restitution:1};
  ball1=Bodies.circle(300,10,40,options1);
  World.add(world,ball1);

 string= Matter.Constraint.create({
    pointA:{x:200,y:20},
    bodyB:ball,pointB:{x:0,y:0}, length:100, stiffness:0.1
 });
 World.add(world,string);
 rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  Engine.update(engine);

  ellipse(ball.position.x,ball.position.y,20);
  ellipse(ball1.position.x,ball1.position.y,40);
 push()
 stroke(255)
 line(string.pointA.x,string.pointA.y,ball.position.x, ball.posiion.y);

// line(ball.position.x,ball.position.y,)
 
 pop()
}

