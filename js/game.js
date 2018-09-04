function Game(canvadId) {
  this.canvas = document.getElementById(canvadId);
  this.ctx = this.canvas.getContext("2d");
  this.fps = 60;


  this.reset();
}

//START

Game.prototype.start = function () {
  this.interval = setInterval(function() {
    this.clear();

    this.framesCounter++;
    if (this.framesCounter > 1000) {
      this.framesCounter = 0;
    }
    if (this.framesCounter % 60 === 0) {
      this.generateObstacle();
    }

    this.moveAll();
    this.draw();

    this.clearObstacles();

    // if (this.isCollision()) {
    //   this.gameOver();
    // }
  }.bind(this), 1000 / this.fps);
};

Game.prototype.stop = function() {
  clearInterval(this.interval);
};


Game.prototype.reset = function() {
  this.background = new Background(this);
  this.player = new Player(this);
  this.framesCounter = 0;
  this.obstacles = [];
};


Game.prototype.clearObstacles = function() {
  this.obstacles = this.obstacles.filter(function(obstacle) {
    return obstacle.x >= 0;
  });
};

Game.prototype.generateObstacle = function() {
  this.obstacles.push(new Obstacle(this));
};

Game.prototype.clear = function () {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
};

Game.prototype.draw = function() {
  this.background.draw();
  this.player.draw();
  this.obstacles.forEach(function(obstacle) { obstacle.draw(); });

};


Game.prototype.moveAll = function () {
  this.background.move();
  this.obstacles.forEach(function(obstacle) { obstacle.move(); });

};