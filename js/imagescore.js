function Imagescore(game) {
    this.game = game;
    this.x = 25;
    this.y = 50;
    
    this.img = new Image();
    this.img.src = "img/R2D2.png";

    this.width = 35;
    this.height = 45;
}

ImageScore.prototype.draw = function () {
    this.game.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);

};