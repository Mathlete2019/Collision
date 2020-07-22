var fixedRect,moveRect;

function setup() {
  createCanvas(400,400);
  fixedRect=createSprite(200,200,50,50);
  fixedRect.shapeColor="yellow";
  moveRect=createSprite(100,200,80,30);
  moveRect.shapeColor="yellow";
}
function draw() {
  background("black"); 
  moveRect.debug=true;
  fixedRect.debug=true;
  moveRect.x=World.mouseX;
  moveRect.y=World.mouseY; 

  if(moveRect.x-fixedRect.x<moveRect.width/2+fixedRect.width/2 && 
    fixedRect.x-moveRect.x<moveRect.width/2+fixedRect.width/2 && 
    moveRect.y-fixedRect.y<moveRect.height/2+fixedRect.height/2 &&
    fixedRect.y-moveRect.y<moveRect.height/2+fixedRect.height/2){
      moveRect.shapeColor="red";
      fixedRect.shapeColor="red";
    }
    else{
      moveRect.shapeColor="yellow";
      fixedRect.shapeColor="yellow";
    }
  drawSprites();
}