
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var hammer, stone, rubber, ground;

function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    hammer = new Hammer(400,400,100,40);
	stone = new Obj(450,400,50,50);
	rubber = new Obj(350,400,70,60);
	ground = Bodies.rectangle(400,790,800,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  hammer.display();
  rubber.display();
  stone.display();
  rect(400,790,800,20,{isStatic: true});

  
  drawSprites();
 
}



