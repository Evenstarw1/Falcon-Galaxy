function Player(game) {
  this.game = game;

  this.img = new Image();
  this.img.src = "img/Halcon.png";

  this.x = 20;
  this.y = 175;

  this.width = 75;
  this.height = 58;

  this.vx = 20;
  this.vy = 20;


  this.setListeners();
}

//Draw Image 
Player.prototype.draw = function () {
  this.game.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
};


//Key-code movimientos y ataque
var LEFT_KEY = 37;
var TOP_KEY = 38;
var RIGTH_KEY = 39;
var DOWN_KEY = 40;

//Movement
Player.prototype.setListeners = function () {
  document.onkeydown = function (event) {
    switch (event.keyCode) {
      case LEFT_KEY: 
      if (this.x <= 0) 
      {
        break; 
      }
      this.x -= this.vx; 
      break;
      case TOP_KEY:
      if (this.y <= 0) 
      {
        break;
      }
      this.y -= this.vy; break;
      case RIGTH_KEY: 
      if (this.x + this.width >= this.game.canvas.width)
      { 
        break; 
      }
      this.x += this.vx; 
      break;
      
      case DOWN_KEY: 
      if (this.y + this.height >= this.game.canvas.height) 
      {
        break; 
      } 
      this.y += this.vy; break;
    };
  }.bind(this);
};


