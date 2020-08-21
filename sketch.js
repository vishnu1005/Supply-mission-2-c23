var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dropzone1,dropzone2,dropzone3;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);



	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)




	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:3, isStatic:true});
	World.add(world, packageBody);
	
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	

	Engine.run(engine);

	
	dropzone1 = new Dropzone(1,1,300,637);
	dropzone2 = new Dropzone(1,1,475,637);
	dropzone3=new Dropzone(500,500,310,637);
	


	//Matter.Body.setStatic(dropzone1,true);
	
}


function draw() {
 
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  dropzone1.display();
  dropzone2.display();
  dropzone3.display();

  keyPressed();
 // moveheli();
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	// Look at the hints in the document and understand how to make the package body fall only on
	Matter.Body.setStatic(packageBody,false);
    packageBody.restitution=0.5;
  }
}

function moveheli()
{
	if(keyCode ===DOWN_ARROW)
	{
	helicopterSprite.velocityY=5;
	}

	if(keyCode ===RIGHT_ARROW)
	{
	helicopterSprite.velocityX=5;
	}

	if(keyCode ===LEFT_ARROW)
	{
	helicopterSprite.velocityX=-5;
	}

	if(keyCode ===UP_ARROW)
	{
	helicopterSprite.velocityY=-5;
	}

}



