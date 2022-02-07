var jerry, tom;
var tomImg1, tomImg2,tomImg3;
var jerryImg1, jerryImg2;
var bg;
function preload() {
    //load the images 
    tomImg1 = loadImage('images/cat1.png');
    tomImg2 = loadAnimation('images/cat2.png','images/cat3.png');
    tomImg3 = loadImage('images/cat4.png');
    jerryImg1 = loadAnimation('images/mouse2.png','images/mouse3.png');
    jerryImg2 = loadImage ('images/mouse1.png');
    bg = loadImage("images/garden.png");
    
    
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    jerry = createSprite(100,500,50,50);
    jerry.addAnimation("jerry", jerryImg1);
    jerry.scale = 0.25;
    tom = createSprite(800,600,50,50);
    tom.addImage(tomImg1);
    tom.scale = 0.25;
    

}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
    if (tom.x- jerry.x<(tom.width - jerry.width)){
        tom.addAnimation("tomFinal",tomImg3);
        tom.changeAnimation("tomFinal");
        tom.velocityX = 0;
    }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
    if(keyCode== LEFT_ARROW){
        tom.velocityX= -5;
        tom.addAnimation("catRunning", tomImg2);
        tom.changeAnimation("catRunning");
    }

}
