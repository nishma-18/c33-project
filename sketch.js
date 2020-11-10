const Engine = Matter.Engine;
const  World = Matter.World;
const  Events = Matter.Events;
const  Bodies = Matter.Bodies;

var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score= 0;
var count= 0;


function setup() {
  createCanvas(800,800);
  engine=Engine.create();
  world=engine.world;
  ground= new Ground(width/2, height, width,20);

  for(var k=0; k<=width; k=k+80 ){
  divisions.push(new Divisions(k, height-divisionHeight/2,10,divisionHeight));
  }

  /*for (var j=40; j<=width; j=j+50){
  plinkos.push(new Plinko(j,75));
  }

  for(var j=15; j<=width-10; j=j+50){
    plinkos.push(new Plinko(j,175));
  }*/

  for (var j=75; j<=width; j=j+50){
    plinkos.push(new Plinko(j,75))
  }

  for (var j=50; j<=width-10; j=j+50){
    plinkos.push(new Plinko(j,175))
  }

  for (var j=75; j<=width; j=j+50){
    plinkos.push(new Plinko(j,275))
  }

  for (var j=50; j<=width-10; j=j+50){
    plinkos.push(new Plinko(j,375))
  }

}

function draw() {
  background("black");
  textSize(20);
  text("score"+score,20,40);
  fill("white");
  drawSprites();
  Engine.update(engine);
  ground.display();

  if ( count>= 5) {
    gameState ="end";
    textSize(100);
    text("GameOver", 150, 250);
  }

  for (var i = 0; i < plinkos.length; i++) {
     
    plinkos[i].display();
    
  }
  if(particle != null ){
    particle.display;
    if(particle.body.position.y>760){
      if(particle.body.position.x<300){
      score=score+500;
      particle=null;
      //if(count>=5)gameState="end";
      }

    }
  }
  if(frameCount%60===0){
    particles.push(new Particle(random(100, 700), 10,10));
   
  }

 for (var j = 0; j < particles.length; j++) {
  
    particles[j].display();
  }
  for (var k = 0; k < divisions.length; k++) {
    
    divisions[k].display();
  }

  function mousePressed(){
    if(gameState!=="end"){
        count++;
       particles.push(new Particle(mouseX, 10, 10, 10)); 
    }   
  }
  

  /*for (var j=0; j<=particles.length; j++){
    particles[j].display();
  }

  for (var k=0; k<=particles.length; k++){
    particles[k].display();
  }

  for (var l=0; l<=particles.length; l++){
    particles[l].display();
  }

  for (var m=0; m<=particles.length; m++){
    particles[m].display();
  }*/

}


  
