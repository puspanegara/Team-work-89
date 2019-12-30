const cvs = document.getElementById("lalat");
const ctx = cvs.getContext("2d");

//Game Vars dan Consts
let frames = 0;

//Load Sprite
conts sprite = new Image();
sprite.src = "img/sprite.png";

//Game State
const state = 
{
  
}
//Game Control
document.addEventListener("click", function(evt)
{
  
});

//Background
const bg = 
{
  sX : 0, 
  sY: 0,
  w : 275,
  h : 226,
  x : 0,
  y : cvs.height - 226, 
  
  draw : function()
  {
    ctx.drawImage(sprite, this.sX, this.sY, this.w, this.h, this.x, this.y, this.w, this.h);
    
    ctx.drawImage(sprite, this.sX, this.sY, this.w, this.h, this.x, this.y, this.w, this.h);
  }
}

//Foreground
const fg =
{
  sX : 276,
  sY : 0,
  w : 224,
  h : 112,
  x : 0,
  y : cvs.height - 112;
  
  draw : function()
  {
    ctx.drawImage(sprite, this.sX, this.sY, this.w, this.h, this.x, this.y, this.w, this.h);
    
    ctx.drawImage(sprite, this.sX, this.sY, this.w, this.h, this.x, this.y, this.w, this.h);
  }
}

//Lalat
const lalat = 
{
  animation = 
 [
  {sX: 276, sY: 112},
  {sX: 276, sY: 139},
  {sX: 276, sY: 164},
  {sX: 276, sY: 139
 ],
   
   x: 50, y: 150, w: 34, h: 26,
   
   frame : 0,
   
   draw :function()
   {
    let lalat = this.animation[this.frame];
    
    ctx.drawImage(sprite, lalat.sX, lalat.sY, this.w, this.h, this.x - this.w/2, this.y - this.h/2, this.w, this.h);
   }
}

//Start the Game Notice
const getStart =
{
  sX: 0,
  sY: 228,
  w: 173,
  h: 152,
  x: cvs.width/2 - 173/2,
  y: 80,
  
  draw : function()
  {
    ctx.drawImage(sprite, this.sX, this.sY, this.w, this.h, this.x, this.y, this.w, this.h);
  }
}

//Game Over Notice
const gameOver=
{
  sX: 175,
  sY: 228,
  w: 225,
  h: 202,
  x: cvs.widht/2 - 225/2,
  y: 90,
  
  draw : function()
  
  {
    ctx.drawImage(sprite, this.sX, this.sY, this.w, this.h, this.x, this.y, this.w, this.h);
  }
}

//Draw
function draw()
{
  ctx.fillStyle = blue;
  ctx.fillRect(0, 0, cvs.height);
  
  bg.draw();
  fg.draw();
  lalat.drawt();
  getStart.draw();
  gameOver.draw();
}

//Update
function update()
{
}

//Loop
fucntion loop()
{
  update();
  draw();
  frames();
  
  requestAnimationFrame(loop);
}

loop();
