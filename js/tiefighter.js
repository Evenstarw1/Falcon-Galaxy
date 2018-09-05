function Tiefighter(game) {
    this.game = game;
    var random = Math.floor(Math.random() * 200);
    this.x = this.game.canvas.width;
    this.y = 10 + random;
  
    this.img = new Image();
    this.img.src ="img/tie_fighter.png";  
  
    this.width = 50;
    this.height = 57;
  }

  Tiefighter.prototype.draw = function() {
    this.game.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  };


Tiefighter.prototype.move = function (dxGame) {
  this.x -= dxGame;
};
  