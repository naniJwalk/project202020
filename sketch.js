//Create variables here
var dog, dogImage, happyDog, happydogImage
var foodS,foodStock
var database
function preload()
{
  //load images here
  dogImage.addImage("doglmg.png");
  happydogImage.addImage("doglmg1.png");
}

function setup() {
	createCanvas(500, 500);
  
  database = firebase.database();
  
  foodStock=database.ref('food');
  foofStock.on("value",readStock);
}


function draw() {  
  background(46,139,87);
  if(keyWentDown(UP_ARROW)){
    foodStock(foodS);
    dog.addImage(dogHappy);
  }
  textSize(13);
  fill("blue");
  stroke(3);
  text("I WANT FOOD",430,10);

  drawSprites();
  //add styles here

}
function readStock(data){
  foodS-data.val();
}
function writeStock(x){
  if(x<-0){
    x-0;
   } else{
     x=x-1;
   }
  
  
  database.ref('/').update({
    Food:x
  })
}



