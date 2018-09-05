function FinalEnemy(game) {
    this.game = game;
  
    this.img = new Image();
    this.img.src ="img/death_star.png";  
  
    this.x = 1100;
    this.y = 220;
  
    this.width = 100;
    this.height = 77;
  }

  FinalEnemy.prototype.draw = function() {
    this.game.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  };

  