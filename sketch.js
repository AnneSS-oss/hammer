
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	hammer1 = new Hammer(100,100);
	stone1 = new Stone(400,350);
	ground = new Ground(400,690,800,10);
	rubber = new Rubber(300,200,);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  hammer1.display();
  stone1.display();
  ground.display();
  rubber.display();
 
}



