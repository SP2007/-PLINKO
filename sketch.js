const Engine = Matter.Engine,
 World = Matter.World,
 Events = Matter.Events,
 Bodies = Matter.Bodies


var engine,world; 
var particles = [];
var plinkos=[];
var divisions=[];
var ground;


var divisionHeight=300;

function setup() {
  createCanvas(600,500);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(200,500,1700,10);

  //createSprite(400, 200, 50, 50);

  for(var j = 40; j<= width; j = j+50){
    plinkos.push(new Plinko(j,75));
  }

  for (var j =15; j <=width-10; j=j+50){
    plinkos.push(new Plinko(j,175));
  }

  for (var k = 0; k <=width; k = k + 80){
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

}

function draw() {
  background(0); 

if(frameCount%60===0){
  particles.push(new Particle(random(width/2-10, width/2+10), 10,10));

}

 for (var j = 0; j < particles.length; j++){
    
  particles[i].display();
 }

 for(var k = 0; k < divisions.length; k++){

  divisions[k].display();
 }

for(var j = 0; j<plinkos.length;j++){
    plinkos[j].display();
 }

  ground.display();
  particles.display();
  drawSprites();
}