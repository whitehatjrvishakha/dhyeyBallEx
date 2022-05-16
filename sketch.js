const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ball1;

function setup(){
    var canvas = createCanvas(1500,800);
    engine = Engine.create();
    world = engine.world;

    ball1 = new Ball(200,300,50);
    ball2 = new Ball(240,100,50);
    ground = new Ground(800,700,1500,20)
}

function draw(){
    background("blue");
    Engine.update(engine);

    
    ball1.display();
    ball2.display();
    ground.display();
}