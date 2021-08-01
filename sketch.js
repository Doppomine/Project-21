
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400,690,800,7)
	ground1 = new Ground(700,650,10,100)
	ground2 = new Ground(500,650,10,100)
 
	var balls_options={
		isStatic: false,
		restitution: 0,
		friction: 0,
		density: 1.2
	}

	//Create the Bodies Here.
	ball = Matter.Bodies.circle(100,300,10,balls_options);
	World.add(world,ball);
	Engine.run(engine);
   
	
  
}


function draw() {
	rectMode(CENTER);
	ellipseMode(RADIUS);
	background(10);
  	ellipse(ball.position.x,ball.position.y,10)
   
    ground.display();
	ground1.display();
	ground2.display();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
       Matter.Body.applyForce(ball,{x:0,y:0},{x:0.8,y:-0.8})
	}
}

