
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world
var paper
function preload() {
  
dustbinImg = loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(800, 700);
    engine = Engine.create();
  world = engine.world

 
  ground = new Ground(200,600,1500,30)
  
  dustbin = new Dustbin(600,500,200,200)
 
  dustbin.scale = 2
  paper = new Paper(100,560,50,50)
  paper.scale = 1
}


function draw() {
  rectMode(CENTER);
  background("white");
  paper.display()
  ground.display()
  dustbin.display()
  
  drawSprites();
 
}

function keyPressed(){
  if( keyCode === UP_ARROW){
  Matter.Body.applyForce(paper.body,paper.body.position,{x:50,y:50})
}
}

