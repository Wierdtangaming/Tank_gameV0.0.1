const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var cannon;
var ground;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(200,390,400,20);
    cannon = new Cannon(50,345,75,75);
}



function draw(){
    background(0);
    Engine.update(engine);

    ground.display();
    cannon.display();

 

}   