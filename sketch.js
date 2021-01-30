const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var engine, world;

var Umbrella1,thunder,thunderCreatedFrame = 0;
var thunder1,thunder2,thunder3,thunder4;
var maxDrops = 100;
var drops = [];

function preload()
{
    thunder1 = loadImage("1.png");
    thunder2 = loadImage("2.png");
    thunder3 = loadImage("3.png");
    thunder4 = loadImage("4.png");
}

function setup()
{
var canvas = createCanvas(400,700);
engine = Engine.create();
world = engine.world;

umbrella1 = new Umbrella(200,500);

if(frameCount % 150 === 0)
{
    for(var i=0; i<maxDrops; i++)
       {
           drops.push(new Drop(random(0,400),random(0,400)));
        }
}

    
}

function draw()
{
    background("black");
    Engine.update(engine);

    umbrella1.display();
    var rand = Math.round(random(1,6));

    if(frameCount % 80 === 0) {
        var thunder = createSprite(random(10,370),random(10,30),10,40);
        // thunder.velocityX = -(6 + 3*score/100);
        thunderCreatedFrame = frameCount;

        switch(rand) {
          case 1: thunder.addImage(thunder1);
                  break;
          case 2: thunder.addImage(thunder2);
                  break;
          case 3: thunder.addImage(thunder3);
                  break;
          case 4: thunder.addImage(thunder4);
                  break;
                  
        }
        thunder.scale = random(0.3,0.6);
    }

    if(thunderCreatedFrame  + 10 === frameCount && thunder)
    {
            thunder.destroy();
    }

    for(var i = 0; i < 100 ; i++)
    {
            drops[i].showDrop();
            drops[i].update();
    }
    
}   

    