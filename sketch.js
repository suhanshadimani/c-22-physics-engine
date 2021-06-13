const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var universe,world;
var ground;
var ball;

function setup() {
  createCanvas(400,400);

  universe = Engine.create();
  world = universe.world;

  var ground_option = {
    isStatic : true
  }

  ground = Bodies.rectangle(200,390,400,20,ground_option);
  World.add(world,ground);
  console.log(ground);

  var ball_option = {
    restitution : 0.8
  }

  ball = Bodies.circle(200,200,20,ball_option);
  World.add(world,ball);

}

function draw() {
  background(0);
  Engine.update(universe);

  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
 
  
}