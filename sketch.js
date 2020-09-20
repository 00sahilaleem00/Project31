const Body = Matter.Body;
const Bodies = Matter.Bodies;
const World = Matter.World;
const Engine = Matter.Engine;

var engine,world;
var ground;
var particles, start;
var plinkos;
var divisions;

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  particles = [];
  plinkos = [];
  divisions = [];
  start = false;

  ground = new Ground(width/2,height-10,width,20,"red");
  
  for(var i=0;i<=width;i+=80){
    divisions.push(new Ground(i,580,10,400,"white"));
  }

  for(var y=60;y<181;y+=120){
    for(var x = 20;x<=width;x+=40){
      plinkos.push(new Plinko(x,y));
    }
  }
  for(var y=120;y<350;y+=120){
    for(var x = 40;x<=width-10;x+=40){
      plinkos.push(new Plinko(x,y));
    }
  }

}

function draw() {
  background(0);

  Engine.update(engine);

  ground.display();

  for(var k=0;k<divisions.length;k++){
    divisions[k].display();
  }

  for(var l=0;l<plinkos.length;l++){
    plinkos[l].display();
  }

  if(frameCount%30 == 0){
    particles.push(new Particle());
    start = true;
  }

  if(start==true){
    for(var j=0;j<particles.length;j++){
      particles[j].display();
    }
  }
}