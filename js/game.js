function Game(canvadId) {
  this.canvas = document.getElementById(canvadId);
  this.ctx = this.canvas.getContext("2d");
  this.fps = 60;
  this.dxGame = 4;
  this.mainSong = new Audio();
  this.mainSong.volume = 0.2;
  this.mainSong.src = "music/background_song.wav";
  this.pointsSong = new Audio();
  this.pointsSong.volume = 0.2;
  this.pointsSong.src = "music/points.wav";
  this.gameOverSong = new Audio();
  this.gameOverSong.volume = 0.2;
  this.gameOverSong.src = "music/sound-game-over.mp3";


  this.reset();
}

//START GAME
Game.prototype.start = function () {
  this.mainSong.play();


  this.interval = setInterval(function() {
    this.clear();

    this.framesCounter++;

    if (this.framesCounter > 1000) {
      this.framesCounter = 0;
    }

    if (this.framesCounter % 60 === 0) {
      this.generateObstacle();
    } 

    if (this.score >= 60 && this.framesCounter % 100 === 0) {
      this.generateExtraObstacle();
    } 

    if (this.framesCounter % 200 === 0) {
    this.generatePoints();
    }

    this.moveAll();
    this.draw();
    this.clearObstacles();
    this.clearPoints();
    this.clearExtraObstacles();

    if (this.isCollision()) {
      this.gameOver();
    }

    if (this.isCollisionextra()) {
      this.gameOver();
    }

    if (this.pCollision()) {
      this.score += 0.01;
    }

  }.bind(this), 1000 / this.fps);
};



Game.prototype.stop = function() {
  clearInterval(this.interval);
};

Game.prototype.gameOver = function() {
  this.stop();
  this.mainSong.pause();
  this.gameOverSong.play();
  this.gameover.draw();
};


Game.prototype.reset = function() {
  this.background = new Background(this);
  this.gameover = new Gameover (this);
  this.player = new Player(this);
  this.framesCounter = 0;
  this.obstacles = [];
  this.epoints = [];
  this.extraobstacle = [];
  this.score = 0;
};


//Colisiones 1Obstaculos 2Puntos
Game.prototype.isCollision = function() {
    this.obstacles.some(function(obstacle) {
        if (
          this.player.x + this.player.width >= obstacle.x + 10 &&
          this.player.x < obstacle.x + obstacle.width &&
          this.player.y + this.player.height >= obstacle.y + 5
        ) {
          clearInterval(this.interval);
          this.gameOver();
        }
      }.bind(this)
    );
};

Game.prototype.isCollisionextra = function() {
  this.extraobstacle.some(function(tiefighter) {
      if (
        this.player.x + this.player.width >= tiefighter.x + 10 &&
        this.player.x < tiefighter.x + tiefighter.width &&
        this.player.y + this.player.height >= tiefighter.y + 5 &&
        this.player.y < tiefighter.y + tiefighter.height)
         {
        clearInterval(this.interval);
        this.gameOver();
            }
    }.bind(this)
  );
};

Game.prototype.pCollision = function() {
  return this.epoints.forEach(function(epoints, index) {
    if (
      this.player.x + this.player.width >= epoints.x &&
        this.player.x < epoints.x + epoints.width &&
        this.player.y + this.player.height >= epoints.y &&
          this.player.y < epoints.y + epoints.height) 
          {
          this.pointsSong.play();
          this.epoints.splice(index, 1);
          this.score += 10;
      }
    }.bind(this)
  );
};

//CLEAR
Game.prototype.clearObstacles = function() {
  this.obstacles = this.obstacles.filter(function(obstacle) {
    return obstacle.x >= 0;
  });
};

Game.prototype.clearPoints = function () {
  this.epoints = this.epoints.filter(function (points) {
    return points.x >= 0;
  });
};

Game.prototype.clearExtraObstacles = function() {
  this.extraobstacle = this.extraobstacle.filter(function(tiefighter) {
    return tiefighter.x >= 0;
  });
};

//CREAR OBSTACULOS/PUNTOS
Game.prototype.generateObstacle = function() {
  this.obstacles.push(new Obstacle(this));
};

Game.prototype.generatePoints = function() {
  this.epoints.push(new Points(this));
};

Game.prototype.generateExtraObstacle = function() {
  this.extraobstacle.push(new Tiefighter(this));
};

Game.prototype.clear = function () {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
};

//DIBUJAR SOBRE CANVAS
Game.prototype.draw = function() {
  this.background.draw();
  this.player.draw();
  this.obstacles.forEach(function(obstacle) { obstacle.draw(); });
  this.epoints.forEach(function(points) {points.draw(); });
  this.extraobstacle.forEach(function(tiefighter) {tiefighter.draw(); });
  this.drawScore();
};

//MOVIMIENTOS
Game.prototype.moveAll = function () {
  this.dxGame += 0.004;
  this.background.move(this.dxGame);
  this.obstacles.forEach(function (obstacle) { obstacle.move(this.dxGame); }.bind(this));
  this.epoints.forEach(function (points) { points.move(this.dxGame); }.bind(this));
  this.extraobstacle.forEach(function (tiefighter) { tiefighter.move(this.dxGame); }.bind(this));
};

//SCORE PUNTOS
Game.prototype.drawScore = function() {
  this.ctx.font = "50px sans-serif";
  this.ctx.fillStyle = "white";
  this.ctx.fillText(Math.floor(this.score), 50, 50);
};