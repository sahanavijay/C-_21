
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
let engine;
let world;
var ball;
var ground;

function preload(){
	
}

function setup() {
	createCanvas(1000, 500);
	engine = Engine.create();
	world = engine.world;
    edges = createEdgeSprites();

	var ball_options = {
		isStatic: false,
		restitution: 0.05,
		friction: 0,
		density: 0.2
	}

	//Create the Bodies Here.
	ball = Bodies.circle(200, 250, 15, ball_options);
    World.add(world, ball);

	ground =new Ground(500,490,1000,10);
	wallRight = new Ground(790, 440, 10, 105);
	wallLeft = new Ground(590, 440, 10, 105);

	Engine.run(engine);
 // ball.bounceOff(edges);
}


function draw() {
  background(0);
  ground.display();
  wallRight.display();
  wallLeft.display();
  //rectMode(CENTER);
  fill("white");
  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 15);
  Engine.update(engine);
  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball,ball.position, {x:5,y:-5});
	}
}


