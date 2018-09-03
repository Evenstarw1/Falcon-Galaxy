function Player(game) {
  this.game = game;
 
  this.x = this.game.canvas.width * 0.08;

  //comprobar posición inicial
  this.y0 = this.game.canvas.height * 0.8;
  this.y = this.y0;

  this.img = new Image();
  this.img.src = 'Halcon_sprites.png';
  
  
  this.img.frames = 8;
  this.img.frameIndex = 0;

  // medidas de la imagen a representar en el canvas
  this.w = 75;
  this.h = 60;

  this.vy = 1;

  this.bullets = [];

  this.setListeners();
}

//Key code movimientos y ataque

var LEFT_KEY = 37;
var TOP_KEY = 38;
var RIGTH_KEY = 39;
var DOWN_KEY = 40;

var SPACE = 32;

Player.prototype.draw = function() {
  // Documentación drawImage:
  // https://developer.mozilla.org/es/docs/Web/API/CanvasRenderingContext2D/drawImage
  this.game.ctx.drawImage(
    this.img,
    this.img.frameIndex * Math.floor(this.img.width / this.img.frames),
    0,
    Math.floor(this.img.width / this.img.frames),
    this.img.height,
    this.x,
    this.y,
    this.w,
    this.h
  );

  this.animateImg();

  this.bullets = this.bullets.filter(function(bullet) {
    return bullet.x < this.game.canvas.width;
  }.bind(this));

  this.bullets.forEach(function(bullet) {
    bullet.draw();
    bullet.move();
  });
};

Player.prototype.setListeners = function() {
  document.onkeydown = function(event) {
    if (event.keyCode === TOP_KEY && this.y == this.y0) {
      this.y -= 5;
      this.vy -= 10;
    } else if (event.keyCode == SPACE) {
      this.shoot();
    }
  }.bind(this);
};

Player.prototype.shoot = function() {
  var bullet = new Bullet(this.game, this.x + this.w, this.y + this.h / 2);

  this.bullets.push(bullet);
};

Player.prototype.animateImg = function() {
  // se va cambiando el frame. Cuanto mayor es el módulo, mas lento se mueve el personaje
  if (this.game.framesCounter % 6 === 0) {
    this.img.frameIndex += 1;

    // Si el frame es el último, se vuelve al primero
    if (this.img.frameIndex > 2) this.img.frameIndex = 0;
  }
};

Player.prototype.move = function() {
  // Aumenta la velocidad en el eje y.
  var gravity = 0.4;

  // solo salta cuando el personaje está en el suelo
  if (this.y >= this.y0) {
    this.vy = 1;
    this.y = this.y0;
  } else {
    this.vy += gravity;
    this.y += this.vy;
  }
};