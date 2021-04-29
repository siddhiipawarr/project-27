


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(windowWidth, windowHeight);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  Bob1 = new Bob(width/2,height-300,30);
  
  Bob2 = new Bob(width/2-60,height-300,30);
  
  Bob3 = new Bob(width/2-120,height-300,30);

  Bob4 = new Bob(width/2+60,height-300,30);
  
	Bob5 = new Bob(width/2+120,height-300,30);
	
	roof = new Roof(width/2,height-550,300,40);

	rope1 = new Chain(Bob3.body,roof.body,-120,0);

  rope2 = new Chain(Bob2.body,roof.body,-60,0);
  
  rope3 = new Chain(Bob1.body,roof.body,0,0);   
  rope4 = new Chain(Bob4.body,roof.body,60,0);
  rope5 = new Chain(Bob5.body,roof.body,120,0);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(55);

  Bob1.display();
  Bob2.display();
  Bob3.display();
  Bob4.display();
  Bob5.display();

  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
  keyPressed();

  text (mouseX+" , "+mouseY,mouseX,mouseY);
}

function keyPressed()
 { if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(bob1.body,bob1.body.position, 
    {x:-50,y:-45});
     } 
    }