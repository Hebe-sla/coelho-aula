const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ground;
var fruta 
var corda
var corrente
var fundo
var botaodecortar
var coelho
var imagemcoelho
var imagemdafruta


function preload(){
imagemcoelho=loadImage("asets/Rabbit-01.png")
fundo=loadImage("asets/background.png")
imagemdafruta=loadImage("asets/melon.png")

}

function setup() 
{
  createCanvas(500,700);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(200,680,600,20);

  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
 
  fruta = Bodies.circle(250,230,30)
 corda= new Rope(7,{x:250,y:40})

Composite.add(corda.body,fruta)
corrente= new Corrente(corda,fruta)

coelho=createSprite(250,620,)
coelho.addImage(imagemcoelho)
coelho.scale=0.3
botaodecortar=createImg("asets/cut_btn.png")
botaodecortar.position(230,40)
botaodecortar.size(80,80) 
botaodecortar.mouseCliked(cortar)
}

function draw() 
{
  background(51);
  ground.show();

  image(fundo,0,0,500,700)
  Engine.update(engine);
  push()
  imageMode(CENTER)
  if(fruta!==null){
  image(imagemdafruta,fruta.position.x,fruta.position.y,80,80)}
 pop()
  corda.show()
 drawSprites()
   
}
function cortar(){
corda.break()
corrente.desligar()
corrente=null
}



