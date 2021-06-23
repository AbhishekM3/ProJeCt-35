var dog;
var database;
var HappyDog;
var dogImg;
var foodS;
var foodStock;

function preload()
{
	dogImg =  loadImage("images/dogImg.png")
  HappyDog = loadImage("images/dogImg1.png")
}

function setup() {
	createCanvas(1000, 800);

  dog = createSprite(500,300,20,20);
  dog.addImage(dogImg,500,300,20,20);
  
  database = firebase.database();
  foodStock = database.ref('Food');
  foodStock.on("value", readStock);
}


function draw() { 
  background(46,139,87);
  
  if(keyDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(HappyDog);
}

  drawSprites();

  stroke("pink");
  textSize(20);
  fill("red");
  text("Food remaining :"+foodS,200,250);
  text("Note: Press UP ARROW To Feed Drago Milk", 200 , 50);
}

function readStock(data){

  foodS = data.val();
}

function writeStock(x){

  if(x<=0){

    x= 0

  } else{
    
    x=x-1
  }

  database.ref('/').update({
    Food:x
  })
}



