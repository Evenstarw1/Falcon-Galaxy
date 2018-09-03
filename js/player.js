function Player(game) {
  this.game = game;
 
  this.x = this.game.canvas.width * 0.08;

  this.y0 = this.game.canvas.height * 0.8;
  this.y = this.y0;

  this.img = new Image();
  this.img.src = 'img/Halcon_sprites.png';
  
  
  this.img.frames = 3;
  this.img.frameIndex = 0;


//medidas de cada sprite
  this.w = 75;
  this.h = 60;

  this.vy = 1;
  this.vx = 1;
}

//Key code movimientos y ataque
var LEFT_KEY = 37;
var TOP_KEY = 38;
var RIGTH_KEY = 39;
var DOWN_KEY = 40;

var SPACE = 32;

