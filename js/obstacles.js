function Obstacle(game) {
    this.game = game;
    var random = Math.floor(Math.random() * 100);
    this.x = this.game.canvas.width;
    this.y = 200 + random;


    this.imgBott = new Image();
    this.imgBott.src = "img/obstaculos_stormtroopers.png";

    

    this.width = 40;
    this.height = 500;

    this.dx = 4;
  
};
  

Obstacle.prototype.draw = function () {
    this.game.ctx.drawImage(this.imgBott, this.x, this.y, this.width, this.height);
};

Obstacle.prototype.move = function () {
    this.x -= this.dx;
};