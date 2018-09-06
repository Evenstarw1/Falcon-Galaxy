function Points(game) {
    this.game = game;
    var random = Math.floor(Math.random() * 200);
    this.x = this.game.canvas.width;
    this.y = 60 + random;
    
    this.img = new Image();
    this.img.src = "img/R2D2.png";

    this.width = 30;
    this.height = 39;

    this.dx = 4;
}

Points.prototype.draw = function () {
    this.game.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);

};

this.imageStar = new Image ();
this.imageStar.src = "img/star.gif";
Points.prototype.star = function() {
    this.game.ctx.drawImage(this.imageStar, this.x, this.y, this.width, this.height);
};



Points.prototype.move = function (dxGame) {
    this.x -= dxGame;
};