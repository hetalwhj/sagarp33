var Engine = Matter.Engine;
var World = Matter.World;
var Events = Matter.Events;
var Bodies = Matter.Bodies;

var snow = [];
var engine, world;
var run, runImg, santa, santaImg;
var bg, bgImg;
//var santa;
//var run;

function preload() {
  bgImg = loadImage("snow1.jpg")
  santaImg = loadImage("santa.png")

}


function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  /*bg=createSprite(400,400,1000,1000)
  bg.addImage(bgImg)
  bg.scale=0.5*/

  santa = createSprite(500, 200, 50, 50)
  santa.addImage(santaImg)
  santa.scale = 0.3
  //santa=new Santa(300,650)

  run = new Run(550, 500)
}



function draw() {
  background(bgImg);


  Engine.update(engine);



  santa.display();
  run.display();


  //display the paricles 
  if (frameCount % 100 === 0) {

    snow.push(new Snow(random(width / 4 - 400, width / 4 + 400), 30, 30))
  }

  for (var h = 0; h < snow.length; h++) {

    snow[h].display();


  }
  drawSprites();
}
