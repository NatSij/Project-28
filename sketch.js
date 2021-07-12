
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var tree1;
var ground1;
var boy;
var stone1;
var launcher1, launchingForce = 100;
var mango1, mango2, mango3, mango4, mango5;

function preload(){
boy = loadImage("Images/boy.png");
}

function setup() {
	createCanvas(1300, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    tree1 = new Tree(1050, 620);
	ground1 = new Ground(width/2, 600, width, 20);
	stone1 = new Stone(240, 420, 30);
	launcher1 = new Launcher(stone1.body, {x:240, y:420});
    mango1 = new Mango(1100, 100, 30);
    mango2 = new Mango(1050, 150, 30);
    mango3 = new Mango(1000, 210, 30);
    mango4 = new Mango(1150, 200, 30);
    mango5 = new Mango(900, 230, 30);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  
  image(boy, 200, 370, 200, 300);

  tree1.display();
  ground1.display();
  stone1.display();
  launcher1.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  detectCollision(stone1, mango1);
  detectCollision(stone1, mango2);
  detectCollision(stone1, mango3);
  detectCollision(stone1, mango4);
  detectCollision(stone1, mango5);
}

function mouseDragged(){
    Matter.Body.setPosition(stone1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    launcher1.fly();
}

function keyPressed(){
//32 is American code for Space Bar
if (keyCode === 32){
Matter.Body.setPosition(stone1.body, {x:240 , y:420});
launcher1.attach(stone1.body);
}
}

function detectCollision(lstone, lmango){
mangoBodyPosition = lmango.body.position;
stoneBodyPosition = lstone.body.position;

var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
 if(distance<=lmango.r+lstone.r){
Matter.Body.setStatic(lmango.body, false);
 }
}