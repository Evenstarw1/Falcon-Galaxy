function Obstacle(game) {
    this.game = game;
    var random = Math.floor(Math.random() * 310);
    this.x = this.game.canvas.width;
    this.y = random;


    this.img = new Image();
    this.img.src = "img/obstaculo.png";

    this.width = 40;
    this.height = 65;

    this.dx = 4;
  
};
  

Obstacle.prototype.draw = function () {
    this.game.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
};

Obstacle.prototype.move = function () {
    this.x -= this.dx;
};