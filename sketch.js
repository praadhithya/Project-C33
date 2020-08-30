const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
 
var particle;
var plinkos = [];
var divisions = [];

var divisionHeight=300;
var score = 0;
var turn = 0;
var gameState = "start";
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  var points = 100;
   for (var k = 0; k <=width; k = k + 80) {
    divisions.push(new Divisions (k,height-divisionHeight/2,10,divisionHeight,points))
    points = points + 100;
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }
}
 


function draw() {
  background("black");
  fill("red")
  textSize(20)
  text("Score : "+score,20,30);
  Engine.update(engine);
  for (var i = 0; i < plinkos.length; i++) {
     
   plinkos[i].display();
   
 }
 for (var k = 0; k < divisions.length; k++) {
   
   divisions[k].display();
 }
 if (gameState == "end"){
 textSize(100)
 fill("blue")
 text("Game Over...",100,500);
 }
if(particle!=null)
{
   particle.display()
   if (particle.body.position.y>760)
   {
      if (particle.body.position.x<300){
         score = score+500;
      }
      else{
         if (particle.body.position.x<600){
            score = score+100;
         }
         else{
            score = score+200;
         }
      }
      particle=null;
   }
  }
}



function mousePressed(){
   if (gameState!= "end"){
      if(turn < 5){
         turn = turn + 1;
         particle = new Particle(mouseX,10,10,10);
      }
      else{
         gameState = "end" ;
         
      }
   }
}