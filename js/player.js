function Player(game) {
  this.game = game;
  this.x = 100;
  this.y = 250;
  

  this.img = new Image();
  this.img.src = "img/Halcon.png";  

  this.w = 50;
  this.h = 75;

  this.vx = 1;
  this.vy = 1;


  this.setListeners();
}

//Key-code movimientos y ataque
var LEFT_KEY = 37;
var TOP_KEY = 38;
var RIGTH_KEY = 39;
var DOWN_KEY = 40;

var SPACE = 32;

//Draw Image 
Player.prototype.draw = function() {
  this.game.ctx.drawImage(this.img.src);
};


//Movement
Player.prototype.setListeners = function() {
  document.onkeydown = function(event) {
    switch (event.keyCode) {
      case LEFT_KEY: this.x -= this.vx; break;
      case TOP_KEY: this.y -= this.vy; break;
      case RIGTH_KEY: this.x += this.vx; break;
      case DOWN_KEY: this.y += this.vy; break; 
  };
}.bind(this);
};


