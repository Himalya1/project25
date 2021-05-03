
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var engine,world;
var ground,ball;




function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;
	
	
	crupledPaper = new Paper(200,650);
	groundObject=new Ground(width/2,670,width,20);
	dustbinObj=new Dustbin(1200,650);

	

	Engine.run(engine);
  }


function draw() {
  
  background("white");
  Engine.update(engine);
  crupledPaper.display();
  groundObject.display();
  dustbinObj.display();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	   Body.applyForce(crupledPaper.body,crupledPaper.body.position,{x:130,y:-145});
	   
   
	   
	 }
   }

