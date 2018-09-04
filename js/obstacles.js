function Obstacle(game) {
    this.game = game;
    var random = Math.floor(Math.random() * 360);
    this.x = this.game.canvas.width;
    this.y = 50 + random;


    this.img = new Image();
    this.img.src = "/img/obstaculo.png";

    this.width = 60;
    this.height = 100;

  
    this.dx = 10;
  
  }
  

Obstacle.prototype.draw = function () {
    this.game.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
};

Obstacle.prototype.move = function () {
    this.x -= this.dx;
};