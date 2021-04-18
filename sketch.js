var score=0;
function preload(){
//pacman1=loadImage("pacman1.png");
//packman=loadImage("packman.png");
//pacman2=loadImage("pacmandown.png");
//pacman3=loadImage("pacmanup.png");
circle=loadImage("edible.png");
}

function setup() {
  createCanvas(600,600);
  packman=createSprite(400, 200, 20, 20);
  packman.shapeColor="yellow" 
  

  boundary1=createSprite(300,0,600,5);
  boundary1.shapeColor="red"

  boundary2=createSprite(0,300,5,600);
  boundary2.shapeColor="red"

  boundary3=createSprite(300,600,600,5);
  boundary3.shapeColor="red"
  
  boundary4=createSprite(600,100,5,350);
  boundary4.shapeColor="red"

  boundary5=createSprite(600,500,5,350);
  boundary5.shapeColor="red"

  portal=createSprite(600,300,5,50);
  portal.visibility=false;

   cardboard1 = createSprite(10,70,100,20);
   cardboard1.shapeColor = "brown";
   cardboard2 = createSprite(100,50,20,100);
  cardboard2.shapeColor = "brown";
   cardboard3 = createSprite(80,130,100,20);
  cardboard3.shapeColor = "brown";
   cardboard4 = createSprite(50,250,20,100);
  cardboard4.shapeColor = "brown";
cardboard5 = createSprite(130,210,100,20);
   cardboard5.shapeColor = "brown";
   cardboard6 = createSprite(10,250,100,20);
   cardboard6.shapeColor = "brown";
   cardboard7 = createSprite(160,120,20,100);
   cardboard7.shapeColor = "brown";
   cardboard8 = createSprite(150,20,100,20);
   cardboard8.shapeColor = "brown";
 cardboard9 = createSprite(250,70,20,100);
   cardboard9.shapeColor = "brown";
   cardboard10 = createSprite(270,150,100,20);
   cardboard10.shapeColor = "brown";
   cardboard11 = createSprite(330,50,100,20);
   cardboard11.shapeColor = "brown";
   cardboard12 = createSprite(340,125,20,100);
   cardboard12.shapeColor = "brown";
   cardboard13 = createSprite(220,250,20,100);
   cardboard13.shapeColor = "brown";
   cardboard14 = createSprite(330,210,150,20);
   cardboard14.shapeColor = "brown";
   cardboard15 = createSprite(100,300,20,100);
   cardboard15.shapeColor = "brown";
   cardboard16 = createSprite(180,310,100,20);
   cardboard16.shapeColor = "brown";
   cardboard17 = createSprite(30,352,20,100);
   cardboard17.shapeColor = "brown";
   cardboard18 = createSprite(175,352,20,100);
   cardboard18.shapeColor = "brown";
   cardboard19 = createSprite(280,290,20,100);
   cardboard19.shapeColor = "brown";
   cardboard20 = createSprite(350,270,120,20);
   cardboard20.shapeColor = "brown";
   cardboard21 = createSprite(250,390,100,20);
   cardboard21.shapeColor = "brown";
   cardboard22 = createSprite(330,370,20,100);
   cardboard22.shapeColor = "brown";
   cardboard23 = createSprite(410,70,100,20);
   cardboard23.shapeColor = "brown";
   cardboard24 = createSprite(500,50,20,100);
  cardboard24.shapeColor = "brown";
   cardboard25 = createSprite(480,130,100,20);
  cardboard25.shapeColor = "brown";
   cardboard26 = createSprite(450,250,20,100);
  cardboard26.shapeColor = "brown";
   cardboard27 = createSprite(10,650,100,20);
   cardboard27.shapeColor = "brown";
   cardboard28 = createSprite(160,520,20,100);
   cardboard28.shapeColor = "brown";
   cardboard29= createSprite(150,420,100,20);
   cardboard29.shapeColor = "brown";
   cardboard30 = createSprite(30,502,20,100);
   cardboard30.shapeColor = "brown";
   cardboard31 = createSprite(575,552,20,100);
   cardboard31.shapeColor = "brown";
   cardboard32 = createSprite(110,530,90,20);
   cardboard32.shapeColor = "brown"; 
   ball1=createSprite(10,10,5,5)
   ball1.shapeColor="yellow"
   ball1.addImage("lol1",circle)
   ball1.scale=0.01;
   ball2=createSprite(30,50,10,10)
   ball2.shapeColor="yellow"
   ball3=createSprite(300,15,10,10)
   ball3.shapeColor="yellow"
   ball4=createSprite(180,60,10,10)
   ball4.shapeColor="yellow"
   ball5=createSprite(550,200,10,10)
   ball5.shapeColor="yellow"
   ball6=createSprite(250,100,10,10)
   ball6.shapeColor="yellow"
   ball7=createSprite(350,150,10,10)
   ball7.shapeColor="yellow"
   ball8=createSprite(400,150,10,10)
   ball8.shapeColor="yellow"
   ball9=createSprite(450,150,10,10)
   ball9.shapeColor="yellow"
   ball10=createSprite(500,200,10,10)
   ball10.shapeColor="yellow"
   ball11=createSprite(50,250,10,10)
   ball11.shapeColor="yellow"
   ball12=createSprite(50,300,10,10)
   ball12.shapeColor="yellow"
   ball13=createSprite(50,350,10,10)
   ball13.shapeColor="yellow"
   ball14=createSprite(50,400,10,10)
   ball14.shapeColor="yellow"
   ball15=createSprite(50,450,10,10)
   ball15.shapeColor="yellow"
   ball16=createSprite(50,500,10,10)
   ball16.shapeColor="yellow"
   ball17=createSprite(50,500,10,10)
   ball17.shapeColor="yellow"
   ball18=createSprite(50,550,10,10)
   ball18.shapeColor="yellow"
   
}

function draw() {
  background("grey");
  
  if(keyDown("left_arrow")){
    packman.velocityX=-5;
    packman.velocityY=0
  // packman.addImage("hello",packman);
  }
  if(keyDown("right_arrow")){
    packman.velocityX=5;
    packman.velocityY=0
   // packman.addImage("lol",pacman1)
  //packman.scale=0.08
  }
  if(keyDown("up_arrow")){
    packman.velocityY=-5;
    packman.velocityX=0
   // packman.addImage("maam",pacman3);
  }
  if(keyDown("down_arrow")){
    packman.velocityY=5;
    packman.velocityX=0
   // packman.addImage("harsh",pacman2);
  }
  if(packman.isTouching(portal)){
packman.x=5;
packman.y=300;
  }
  if(packman.isTouching(ball1)){
    ball1.destroy();
    score=score+5;
  }
  if(packman.isTouching(ball2)){
    ball2.destroy();
  }
  if(packman.isTouching(ball3)){
    ball3.destroy();
  }
  if(packman.isTouching(ball4)){
    ball4.destroy();
  }
  if(packman.isTouching(ball1)){
    ball1.destroy();
  }
  if(packman.isTouching(ball1)){
    ball1.destroy();
  }
  if(packman.isTouching(ball1)){
    ball1.destroy();
  }
  if(packman.isTouching(ball1)){
    ball1.destroy();
  }
  if(packman.isTouching(ball1)){
    ball1.destroy();
  }
  if(packman.isTouching(ball1)){
    ball1.destroy();
  }
  if(packman.isTouching(ball1)){
    ball1.destroy();
  }
  if(packman.isTouching(ball1)){
    ball1.destroy();
  }

  packman.collide(boundary1)
  packman.collide(boundary2)
  packman.collide(boundary3)
  packman.collide(boundary4)
  packman.collide(boundary5)
  packman.bounceOff(cardboard1);
  packman.bounceOff(cardboard2);
  packman.bounceOff(cardboard3);
  packman.bounceOff(cardboard4);
  packman.bounceOff(cardboard5);
  packman.bounceOff(cardboard6);
  packman.bounceOff(cardboard7);
  packman.bounceOff(cardboard8);
  packman.bounceOff(cardboard9);
  packman.bounceOff(cardboard10);
  packman.bounceOff(cardboard11);
  packman.bounceOff(cardboard12);
  packman.bounceOff(cardboard13);
packman.bounceOff(cardboard14);
packman.bounceOff(cardboard15);
packman.bounceOff(cardboard16);
packman.bounceOff(cardboard17);
packman.bounceOff(cardboard18);
packman.bounceOff(cardboard19);
packman.bounceOff(cardboard20);
packman.bounceOff(cardboard21);
packman.bounceOff(cardboard22);
packman.bounceOff(cardboard23);
packman.bounceOff(cardboard24);
packman.bounceOff(cardboard25);
packman.bounceOff(cardboard26);
packman.bounceOff(cardboard27);
packman.bounceOff(cardboard28);
packman.bounceOff(cardboard29);
packman.bounceOff(cardboard30);
packman.bounceOff(cardboard31);
packman.bounceOff(cardboard32);

  drawSprites();
  textSize(20)

  text(score,500,500);
  fill("black")
}