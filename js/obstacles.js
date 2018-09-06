function Obstacle(game) {
    this.game = game;
    var random = Math.floor(Math.random() * 150);
    this.x = this.game.canvas.width;
    this.y = 160 + random;


    this.img = new Image();
    this.img.src = "img/obstaculos_stormtroopers.png";


    this.width = 40;
    this.height = 500;


    this.dx = 4;

};


Obstacle.prototype.draw = function () {
    this.game.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);

};

Obstacle.prototype.move = function (dxGame) {
    this.x -= dxGame;
};